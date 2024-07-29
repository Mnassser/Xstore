import { View, Text,ScrollView} from 'react-native'

import React, { useEffect, useState } from 'react'
import Products from './Components/Products'


const SingleCategory = ({route,navigation}) => {
  var {id}= route.params;

  return (
    <ScrollView>
    
    <Products key={'Products'} fetchUrl={`https://api.escuelajs.co/api/v1/categories/${id}/products`} navigation={navigation} />
    </ScrollView>
  )
}

export default SingleCategory