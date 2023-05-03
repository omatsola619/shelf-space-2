import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const BookCard = ({data, title}) => {
  return (
    <View className='mb-5'>
        <Text style={{fontFamily: 'Poppins_500'}} className='text-lg' >{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => (
          <View key={i} className="mt-5 mr-3" style={{ width: 130 }}>
            <Image
              source={item.image}
              style={{ width: 130, height: 190, borderRadius: 7 }}
              resizeMode="cover"
            />
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