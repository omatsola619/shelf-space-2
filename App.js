import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HomeHeader from './components/HomeHeader';
import { useCustomFonts } from './utility/font';

const Stack = createNativeStackNavigator();


export default function App() {
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
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
