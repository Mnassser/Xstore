import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import Category from './Category';

const Categories = ({fetchUrl,navigation}) => {
  // تعريف الحالة لتخزين البيانات
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // استخدام useEffect لجلب البيانات عند تحميل المكون
  useEffect(() => {
    fetch(fetchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ook');
        }
        return response.json(); // تحويل الاستجابة إلى JSON
      })
      .then(data => {
        setData(data); // تعيين البيانات في الحالة
        setLoading(false); // إيقاف التحميل
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error); // تعيين الخطأ في الحالة
        setLoading(false); // إيقاف التحميل
      });
  }, []); // قائمة الاعتماديات فارغة، لذا سيتم تنفيذ التأثير مرة واحدة فقط عند تحميل المكون

  // عرض مؤشر تحميل إذا كانت البيانات قيد التحميل
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // عرض رسالة خطأ إذا حدث خطأ أثناء تحميل البيانات
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
        <Text className='text-xl mx-[10px]'>Categories</Text>
    <ScrollView horizontal>
      {data.map(item => (
        
        <Category key={item.id} item={item} navigation={navigation} />
      ))}
    </ScrollView>
    </View>
  );
};

export default Categories;