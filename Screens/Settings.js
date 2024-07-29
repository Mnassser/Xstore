import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings =  ({navigation}) => {

  const [user, setUser] = useState('');

  const getSession = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const data = JSON.parse(value);
        setUser(data);
      }
    } catch (error) {
      console.error('Error getting id', error);
    }

  };

      getSession('user')

      

  return (
    <View className='flex justify-center items-center m-[20px] w-screen'>
    
    {user ? (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text className='text-3xl hover:bg-black bg-slate-700 text-white w-screen flex justify-center items-center'>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text className='text-3xl hover:bg-black bg-slate-700 text-white w-screen flex justify-center items-center'>
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={async () => {
            await AsyncStorage.removeItem('user');
            setUser(null);
            navigation.navigate('Login');
          }}>
            <Text className='text-3xl hover:bg-black bg-slate-700 text-white w-screen flex justify-center items-center '>
              Logout
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text className='text-3xl hover:bg-black bg-slate-700 text-white w-screen flex justify-center items-center'>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className='text-3xl hover:bg-black bg-slate-700 text-white w-screen flex justify-center items-center'>
              Login
            </Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className='text-3xl hover:bg-black bg-slate-700 text-white w-screen flex justify-center items-center'>
              Register
            </Text>
          </TouchableOpacity>

        </>
      )}

      <Text className='text-2xl opacity-25'>Devoloped By # Mohamed Abd El-nasser</Text>
    </View>
  )
}

export default Settings