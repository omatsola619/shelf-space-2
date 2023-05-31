import { View, Text, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, Image, Button } from 'react-native'
import React, {useState} from 'react'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const initialValues = {
    title: '',
    year: '',
    description: '',
    author: '',
    genre: '',
    price: '',
    quantity: '',
    isbn: '',
    image: null
  }

const AddBook = () => {
  const [formData, setFormData] = useState(initialValues)

  const handleChange = (text, identifier) => {
    setFormData({
      ...formData,
      [identifier]: text,
    })
  }


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: result.assets[0].uri
      }));
    }
  };

  const handleSubmit = () => {
    console.log(formData)
  }

  return (
        <ScrollView className="bg-white px-4 pt-5">
          <>
            <View className="mb-4">
              <Text
                className="text-base mb-1"
                style={{ fontFamily: "Poppins_400" }}
              >
                Title
              </Text>
              <TextInput 
                className="w-full border border-gray-400 h-11 rounded-lg pl-3"
                value={formData.title}
                onChangeText={(text) => handleChange(text, 'title')}
                name='title'
              />
            </View>
            <View className="mb-4">
              <Text
                className="text-base mb-1"
                style={{ fontFamily: "Poppins_400" }}
              >
                Year
              </Text>
              <TextInput 
                className="w-full border border-gray-400 h-11 rounded-lg pl-3"
                value={formData.year}
                onChangeText={(text) => handleChange(text, 'year')}
              />
            </View>
            <View className="mb-4">
              <Text
                className="text-base mb-1"
                style={{ fontFamily: "Poppins_400" }}
              >
                Description
              </Text>
              <TextInput 
                className="w-full border border-gray-400 h-11 rounded-lg pl-3"
                value={formData.description}
                onChangeText={(text) => handleChange(text, 'description')}
              />
            </View>
            <View className="mb-4">
              <Text
                className="text-base mb-1"
                style={{ fontFamily: "Poppins_400" }}
              >
                Author
              </Text>
              <TextInput 
                className="w-full border border-gray-400 h-11 rounded-lg pl-3"
                value={formData.author}
                onChangeText={(text) => handleChange(text, 'author')}
              />
            </View>
            <View className="mb-4">
              <Text
                className="text-base mb-1"
                style={{ fontFamily: "Poppins_400" }}
              >
                Genre
              </Text>
              <TextInput 
                className="w-full border border-gray-400 h-11 rounded-lg pl-3"
                value={formData.genre}
                onChangeText={(text) => handleChange(text, 'genre')}
              />
            </View>
            <View className="mb-4">
              <Text
                className="text-base mb-1"
                style={{ fontFamily: "Poppins_400" }}
              >
                Price
              </Text>
              <TextInput 
                className="w-full border border-gray-400 h-11 rounded-lg pl-3"
                value={formData.price}
                onChangeText={(text) => handleChange(text, 'price')}
              />
            </View>
            <View className="mb-4">
              <Text
                className="text-base mb-1"
                style={{ fontFamily: "Poppins_400" }}
              >
                Quantity
              </Text>
              <TextInput 
                className="w-full border border-gray-400 h-11 rounded-lg pl-3"
                value={formData.quantity}
                onChangeText={(text) => handleChange(text, 'quantity')}
              />
            </View>
            <View className="mb-7">
              <Text
                className="text-base mb-1"
                style={{ fontFamily: "Poppins_400" }}
              >
                ISBN
              </Text>
              <TextInput 
                className="w-full border border-gray-400 h-11 rounded-lg pl-3"
                value={formData.isbn}
                onChangeText={(text) => handleChange(text, 'isbn')}
              />
            </View>
            <View className="mb-4">
              <TouchableHighlight
                className="w-full border border-blue-700 rounded-lg"
                onPress={pickImage}
              >
                <View className="flex-row justify-center items-center gap-2 p-3">
                  <Text
                    className="text-blue-700 text-base"
                    style={{ fontFamily: "Poppins_400" }}
                  >
                    Add Image
                  </Text>
                  <Feather name="upload" size={18} color="#2b6cb0" />
                </View>
              </TouchableHighlight>
              {formData.image && (
                <Image
                  source={{ uri: formData.image }}
                  style={{ width: 200, height: 200, paddingBottom: 5 }}
                  className="mt-5"
                />
              )}
            </View>
            <TouchableOpacity 
              className="w-full rounded-lg bg-blue-700 h-11 mt-2 flex-row justify-center items-center mb-10"
              onPress={handleSubmit}
            >
              <Text
                className="text-base text-white"
                style={{ fontFamily: "Poppins_400" }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </>
        </ScrollView>
  );
};

export default AddBook