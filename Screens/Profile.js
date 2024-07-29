import { View, Text, Image, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async (key) => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          const data = JSON.parse(value);
          setUser(data);
        }
      } catch (error) {
        console.error('Error getting user session', error);
      }
    };

    getSession('user');
  }, []);

  if (!user) {
    return (
      <View className="flex justify-center items-center m-[20px] w-screen ">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex flex-col justify-center items-center m-[20px] w-screen">
      <Image
        source={{ uri: user.avatar }}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
      />
      <Text className="text-3xl mb-4">{user.name}</Text>
      <Text className="text-xl mb-4">{user.email}</Text>

      <Text className="text-2xl mb-2">Favorites</Text>
      <FlatList
        data={user.favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text className="text-xl mb-1">{item.name}</Text>
        )}
      />

      <Text className="text-2xl mb-2">Purchases</Text>
      <FlatList
        data={user.purchases}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text className="text-xl mb-1">{item.name}</Text>
        )}
      />
    </View>
  );
};

export default Profile;