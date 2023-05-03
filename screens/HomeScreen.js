import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FeatureSection from '../components/FeatureSection'

const HomeScreen = () => {
  return (
    <View className='bg-white flex-1 pl-3'>
      <FeatureSection />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})