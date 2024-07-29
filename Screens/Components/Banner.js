import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <TouchableOpacity>
    <View className='m-[10px]'>
        <Image 
          src='https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg'
          className='w-[100%] h-[200px] rounded-[10px]'
        />
        <View className='bg-slate-900'>
        <Text className='absolute bottom-[10px] left-[10px] text-nlack text-4xl p-5 bg-slate-100 opacity-60 rounded-2xl '>
          Salee
        </Text>
        </View>
      </View>
      </TouchableOpacity>
  )
}

export default Banner