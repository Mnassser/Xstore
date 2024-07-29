import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const handleRegister = async () => {
    if (!name || !email || !password || !avatar) {
      Alert.alert('Please fill out all fields');
      return;
    }

    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password,avatar }),
          });
    
          const result = await response.json();
          if (response.ok) {
            Alert.alert('Registration successful', 'You can now log in', [
              { text: 'OK', onPress: () => navigation.navigate('Login') },
            ]);
          } else {
            Alert.alert('Registration failed', result.message);
          }

    }catch{
        Alert.alert('Faild')
    }

  };

  return (
    <View className="flex justify-center items-center space-y-[20px]">
      <Text className="text-4xl mt-[150px]">Register</Text>
      <View className="my-12 bg-slate-200 p-[20px] rounded-[20px] w-[90%] max-w-[400px]">
        <TextInput
          placeholder="Name"
          className="text-4xl text-white bg-gray-800 p-4 mb-4 rounded"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email"
          className="text-4xl text-white bg-gray-800 p-4 mb-4 rounded"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Avatar Link"
          className="text-4xl text-white bg-gray-800 p-4 mb-4 rounded"
          placeholderTextColor="#ccc"
          value={avatar}
          onChangeText={setAvatar}
        />


        <TextInput
          placeholder="Password"
          className="text-4xl text-white bg-gray-800 p-4 mb-4 rounded "
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Register" onPress={handleRegister} />
      </View>
    </View>
  );
};

export default Register;
