import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Categories from './Components/Categories'
import Banner from './Components/Banner'
import Products from './Components/Products'



const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Banner/>
        </View>

        <View>
        <Categories key={'Categories'} fetchUrl={'https://api.escuelajs.co/api/v1/categories'} navigation={navigation}/>
        </View>

        <View>
          <Text className='text-2xl mx-[10px]' >Products</Text>
        <Products key={'Products'} fetchUrl={'https://api.escuelajs.co/api/v1/products?offset=0&limit=16'} navigation={navigation}/>
        </View>

    </ScrollView>
  )
}

export default Home