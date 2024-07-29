import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Product = ({item,navigation}) => {
  return (  
                    <View className='m-2'>
                    <TouchableOpacity onPress={()=>{
                      navigation.navigate('SingleProduct',{id:item.id,title:item.title})
                    }}>
                    <Image className='w-[380px] h-[250px] rounded-t-[20px]' src={item.images[0].replace(/[\[\]",]/g, '')} />
                    <View className='rounded-b-[10px] flex flex-row  justify-center items-center bg-slate-800'>
                    <Text className='text-xl text-white'>{item.title.substring(0, 19)+'..'} </Text>
                    <Text className='text-xl text-white'>  {item.price}  $</Text>
                    </View>
                    </TouchableOpacity>
                    </View>
                  
  )
}

export default Product