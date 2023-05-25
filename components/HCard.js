import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HCard = ({data}) => {
  const navigation = useNavigation()

    const handleNav = (selectedData) => {
        navigation.navigate('BookDetail', {dataItem: selectedData})
    }

  return (
    <TouchableOpacity onPress={() => handleNav(data)} className='flex-row gap-2 mb-8'>
      <Image
        source={data.image}
        style={{ width: 100, height: 120}}
        resizeMode="cover"
      />
      <View className='flex-col'>
        <Text className='text-base' style={{ fontFamily: "Poppins_400" }}>{data.title}</Text>
        <Text className='text-sm flex-grow text-gray-600' style={{ fontFamily: "Poppins_400" }}>{data.author}</Text>
        <Text className='flex-shrink mt-auto text-blue-700 text-base mb-4' style={{fontFamily: 'Poppins_400'}}>₦{data.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default HCard