import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <TouchableOpacity>
    <View className='m-[10px]'>
        <Image 
          src='https://via.placeholder.com/400x200'
          className='w-[100%] h-[200px] rounded-[10px]'
        />
        <View className='bg-slate-900'>
        <Text className='absolute bottom-[10px] left-[10px] text-white text-4xl p-5 bg-[rgba(0,0,0,0.5)]'>
          Sale
        </Text>
        </View>
      </View>
      </TouchableOpacity>
  )
}

export default Banner