import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HCard from '../components/HCard';

const SearchScreen = () => {

  return (
    <View className="bg-white flex-1 pt-5 px-3">
      <ScrollView className="flex-1">
        <HCard />
      </ScrollView>
    </View>
  );
}

export default SearchScreen;