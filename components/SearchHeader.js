import { View, SafeAreaView, TextInput, Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SearchHeader = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}
      className="border-b-2 border-gray-200 border-solid"
    >
      <View className="flex-row w-full items-center justify-between px-3 mt-7 mb-2">
        <AntDesign
          name="arrowleft"
          size={25}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <TextInput
          className="flex-1 h-14 pl-3 text-base pb-1"
          placeholder="Search Book, Title or Author"
          selectionColor="black"
          style={{ fontFamily: "Poppins_400" }}
          
        />
      </View>
    </SafeAreaView>
  );
}

export default SearchHeader