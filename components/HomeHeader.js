import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { getHeaderTitle } from '@react-navigation/elements';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const HomeHeader = ({options, route}) => {
    const title = getHeaderTitle(options, route.name);
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 30 : 0}} className="border-b-2 border-gray-200 border-solid">
      <View className="flex-row items-center justify-between px-3 mt-7 mb-2">
        <Text style={{fontFamily: 'Poppins_600'}} className="text-2xl">{title}</Text>
        <Feather name="search" size={26} color="black" onPress={() => navigation.navigate('Search')} />
      </View>
    </SafeAreaView>
  )
}

export default HomeHeader