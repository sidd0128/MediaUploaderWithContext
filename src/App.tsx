import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-get-random-values';
import OpenCameraGalleryScreen from './screens/OpenCameraGalleryScreen/screen';
import { enableScreens } from 'react-native-screens';
enableScreens();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={OpenCameraGalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
