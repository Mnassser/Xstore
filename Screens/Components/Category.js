import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({item, navigation }) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate('SingleCategory',{id:item.id})}>
    
      <Image src={item.image} className='w-screen h-[200px] rounded-t-[10px] mx-[10px]'/> 
      <View className=' bg-slate-800 justify-center items-center mx-[10px] rounded-b-[10px]'>
        <Text className='text-white text-4xl '>{item.name}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default Category