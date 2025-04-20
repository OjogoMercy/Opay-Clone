import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './app/HomeScreen';
import IntroScreen from './app/IntroScreen';
import { NavigationIndependentTree } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='IntroScreen'> 
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
    
  );
}
