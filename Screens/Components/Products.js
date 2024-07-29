import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ fetchUrl,navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchUrl]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <View className='flex justify-center items-center flex-wrap flex-row gap-2'>
        {data.map((item) => (
          <Product key={item.id} item={item} navigation={navigation} />
        ))}
      </View>
    </View>
  );
};

export default Products;
