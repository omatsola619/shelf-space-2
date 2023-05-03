import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const BookCard = ({data, title}) => {
    const navigation = useNavigation()

    const handleNav = (selectedData) => {
        navigation.navigate('BookDetail', {dataItem: selectedData})
    }
  return (
    <View className='mb-5'>
        <Text style={{fontFamily: 'Poppins_500'}} className='text-lg' >{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => (
          <View key={i} className="mt-5 mr-3" style={{ width: 130 }}>
            <TouchableOpacity onPress={() => handleNav(item)}>
                <Image
              source={item.image}
              style={{ width: 130, height: 190, borderRadius: 7 }}
              resizeMode="cover"
            />
            </TouchableOpacity>
            
            <Text
              style={{ fontFamily: "Poppins_500", fontSize: 13 }}
              className="text-center text-sm mt-1"
            >
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default BookCard