import { View, Text, Image,TextInput, TouchableOpacity,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

const SingleProduct = ({route}) => {
  var {id}= route.params
    const [data, setData] = useState([])
    const [images, setImages] = useState([])
    const [number, setNumber] = useState(1);
    

    const handleChange = (text) => {
      if (/^\d*$/.test(text)) {
        setNumber(text);
      }
    };

  useEffect(()=>{
  fetch(`https://api.escuelajs.co/api/v1/products/${id}` )
  .then(res =>res.json())
  .then(data=>{

  setData(data)
      })
    
    },[])

  return (
    <ScrollView>
    <View>
        <Image src='https://picsum.photos/600/300?random=1' className='m-[10px] h-[400px] rounded-[20px]'/>
        <View className='m-[10px] space-y-5'>
          <Text className='text-3xl'>{data.title}</Text>

          <Text className='text-xl bg-slate-300 rounded-[5px] p-3'>{data.description}</Text>
        </View>
      <View>
      <View className='m-[10px] space-x-[50%] justify-center flex flex-row flex-wrap bg-slate-300'>
          <Text className='text-4xl mt-[10px] rounded-[5px] p-3'>Price:{number == 0 ? data.price : data.price * number} $</Text>
          <TextInput
        value={number}
        className='text-5xl'
        maxLength={2}
        onChangeText={handleChange}
        keyboardType="numeric"
        placeholder="1"
      />
        </View>
        <TouchableOpacity onPress={()=>{
          Alert.alert(`You Orderd`,`Your Order Price is ${number == 0 ? data.price : data.price * number}  $`)
        }}>
          <View className='bg-slate-900 flex justify-end items-center'>
          <Text className='text-4xl text-white p-[20px]'>Order</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default SingleProduct