import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HCard from '../components/HCard';
import { DATA } from '../data/dummyData';
import SearchHeader from '../components/SearchHeader';

const SearchScreen = () => {
  const [data, setData] = useState(DATA)
  const [query, setQuery] = useState('')

  const handleTextChange = (text) => {
    setQuery(text)
  }

  const filteredItems = data.filter((item) => {
    return (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.genre.toLowerCase().includes(query.toLowerCase()) ||
        item.author.toLowerCase().includes(query.toLowerCase())
    )
  })

  return (
    <View className="bg-white flex-1 pt-5 px-3">
      <SearchHeader onTextChange={handleTextChange} value={query} />
      <ScrollView className="flex-1 pt-7">
        {filteredItems.length === 0 || query === "" ? (
          <Text
            className="text-base text-center text-gray-500"
            style={{ fontFamily: "Poppins_400" }}
          >
            No Book Found
          </Text>
        ) : (
          filteredItems.map((ft, i) => <HCard data={ft} key={i} />)
        )}
      </ScrollView>
    </View>
  );
}

export default SearchScreen;