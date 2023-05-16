import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const BookDetail = ({route}) => {
  const data = route.params.dataItem;

  return (
    <ScrollView className="bg-white flex-col flex-1 px-3 pt-7">
      <View className="flex-row justify-center">
        <Image
          source={data.image}
          style={{ width: 200, height: 270, borderRadius: 7 }}
          resizeMode="cover"
        />
      </View>
      <Text
        className="text-center mt-5 text-2xl"
        style={{ fontFamily: "Poppins_500" }}
      >
        {data.title}
      </Text>
      <Text
        className="text-center text-base text-gray-500"
        style={{ fontFamily: "Poppins_300" }}
      >
        {data.author}
      </Text>
      <View className="mt-8">
        <Text className="text-xl mb-3" style={{ fontFamily: "Poppins_400" }}>
          Description
        </Text>
        <Text
          className="text-sm text-gray-700"
          style={{ fontFamily: "Poppins_300" }}
        >
          {data.description}
        </Text>
        <View className="w-full border-b-2 border-gray-300 my-5"></View>
        <View className='flex-row items-center justify-between mb-5'>
            <Text className='text-base text-gray-500' style={{fontFamily: 'Poppins_400'}}>In Stock</Text>
            <Text className='text-lg' style={{fontFamily: 'Poppins_600'}}>{data.quantity}</Text>
        </View>
        <View className='flex-row items-center justify-between'>
            <Text className='text-base text-gray-500' style={{fontFamily: 'Poppins_400'}}>Price</Text>
            <Text className='text-lg' style={{fontFamily: 'Poppins_600'}}>${data.price}</Text>
        </View>
      </View>
        <TouchableOpacity className='flex-row justify-center mt-20 w-full bg-blue-700 p-3 rounded-md'>
            <Text className='text-white text-xl' style={{fontFamily: 'Poppins_500'}}>Edit</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

export default BookDetail;