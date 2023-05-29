import { View, Text, ScrollView, TextInput, TouchableHighlight, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { validate } from '../utility/formikValidation';

const AddBook = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        year: "",
        description: "",
        author: "",
        genre: "",
        price: "",
        isbn: "",
        image: selectedImage,
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
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
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
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
                onChangeText={handleChange('year')}
                onBlur={handleBlur('year')}
                value={values.year}
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
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
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
                onChangeText={handleChange('author')}
                onBlur={handleBlur('author')}
                value={values.author}
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
                onChangeText={handleChange('genre')}
                onBlur={handleBlur('genre')}
                value={values.genre}
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
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
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
                onChangeText={handleChange('quantity')}
                onBlur={handleBlur('quantity')}
                value={values.quantity}
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
                onChangeText={handleChange('isbn')}
                onBlur={handleBlur('isbn')}
                value={values.isbn}
              />
            </View>
            <View className="mb-4">
              <TouchableHighlight
                className="w-full border border-blue-700 rounded-lg"
                onPress={selectImage}
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
              {selectedImage && (
                <Image
                  source={{ uri: selectedImage }}
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
      )}
    </Formik>
  );
};

export default AddBook