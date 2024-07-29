import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const setSession = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Error of Set Session', error);
    }
  };

  const getSession = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      } else {
        console.log('Do Not Get Data');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Please enter both email and password ');
      return;
    }

    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        await setSession('authToken', result.access_token);

        const session = await getSession('authToken');

        const profileResponse = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${session}`,
          },
        });

        const data = await profileResponse.json();

        setUser(data);

        await setSession('user', JSON.stringify(data));

        // Navigate to the Settings screen after successful login
        navigation.navigate('Settings');
      } else {
        Alert.alert('Login failed', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('An error occurred. Please try again.');
    }
  };

  return (
    <View className="flex justify-center items-center space-y-[20px]">
      <Text className="text-4xl mt-[150px]">Login</Text>
      <View className="my-12 bg-slate-200 p-[20px] rounded-[20px] w-[90%] max-w-[400px]">
        <TextInput
          placeholder="Email"
          className="text-4xl text-white bg-gray-800 p-4 mb-4 rounded"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          className="text-4xl text-white bg-gray-800 p-4 mb-4 rounded"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;
