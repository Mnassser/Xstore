import { StatusBar } from 'expo-status-bar';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleCategory from './Screens/SingleCategory';
import SingleProduct from './Screens/SingleProduct';
import { Text, TouchableOpacity } from 'react-native';
import Settings from './Screens/Settings';

import React from 'react';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import Register from './Screens/Register';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={({ navigation }) => ({
            title: 'XStore',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text className='text-4xl mx-[10px]'>
                  ...
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="SingleCategory" component={SingleCategory} 

        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text className='text-4xl mx-[10px]'>
                ...
              </Text>
            </TouchableOpacity>
          ),
        })}
        
        />

      <Stack.Screen name="Profile" component={Profile} 

      options={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text className='text-4xl mx-[10px]'>
              ...
            </Text>
          </TouchableOpacity>
        ),
      })}

      />

      <Stack.Screen name="Register" component={Register} 
      options={({ navigation }) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Text className='text-4xl mx-[10px]'>
        ...
      </Text>
    </TouchableOpacity>
  ),
})}

/>

        <Stack.Screen name="Settings" component={Settings}
        
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text className='text-4xl mx-[10px]'>
                ...
              </Text>
            </TouchableOpacity>
          ),
        })}
        
        />
        <Stack.Screen name="SingleProduct" component={SingleProduct}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Text className='text-4xl mx-[10px]'>
                ...
              </Text>
            </TouchableOpacity>
          ),
        })}
        
        />


<Stack.Screen name="Login" component={Login}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings',navigation)}>
              <Text className='text-4xl mx-[10px]'>
                ...
              </Text>
            </TouchableOpacity>
          ),
        })}
        
        />

        

      </Stack.Navigator>
      <StatusBar hidden />
    </NavigationContainer>
  );
}

export default App;