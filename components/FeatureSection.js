import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import BookCard from './BookCard'
import {DATA} from '../data/dummyData'


const romanceBooks = DATA.filter((item) => item.genre === 'romance')
const historyBooks = DATA.filter((item) => item.genre === 'history')
const latestBooks = DATA.slice(0, 5)

const FeatureSection = () => {
  return (
    <ScrollView className='pt-7'>
      <View>
        <BookCard title='Latest Books' data={latestBooks} />
      </View>

      <View>
        <BookCard title="Romance" data={romanceBooks} />
      </View>

      <View>
        <BookCard title="History" data={historyBooks} />
      </View>
    </ScrollView>
  );
}

export default FeatureSection