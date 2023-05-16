import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HomeHeader from './components/HomeHeader';
import { useCustomFonts } from './utility/font';
import BookDetail from './screens/BookDetail';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AddBook from './screens/AddBook';

const Stack = createNativeStackNavigator();


export default function App({navigation}) {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{
          title: 'Discover',
          header: ({options, route}) => <HomeHeader options={options} route={route} />,
          headerTitleStyle: {
            fontFamily: 'Poppins_600'
          }
        }} /> 
        <Stack.Screen name='BookDetail' component={BookDetail} options={({navigation}) => ({
          headerRight: () => <View><Text style={{fontFamily: 'Poppins_500', fontSize: 15}}>Delete</Text></View>,
          title: null,
          headerLeft: () => <AntDesign name="arrowleft" size={24} color="black"  onPress={() => navigation.goBack()} />
        })} />
        <Stack.Screen name='AddBook' component={AddBook} options={({navigation}) => ({
          title: 'Add Book',
          headerLeft: () => <AntDesign name="arrowleft" size={24} color="black"  onPress={() => navigation.goBack()} />,
          headerTitleStyle: {
            fontFamily: 'Poppins_600',
            fontSize: 20
          },
          headerTitleAlign: 'center'
        })} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
