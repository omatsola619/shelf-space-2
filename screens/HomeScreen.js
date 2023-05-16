import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FeatureSection from '../components/FeatureSection'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return (
    <View className="bg-white flex-1 pl-3">
      <FeatureSection />
      <TouchableOpacity
        onPress={() => navigation.navigate("AddBook")}
        className="bg-blue-700 p-4 rounded-full absolute bottom-8 right-4"
      >
        <Ionicons name="md-book-outline" size={35} color="white" className="" />
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({});