import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Sound} from './components/molecules/Sound';
import {Choice} from './components/molecules/Choice';
import {Result} from './components/molecules/Result';

const Stack = createStackNavigator();

global.position = 0;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sound">
        <Stack.Screen 
          name = "Sound"
          component = {Sound}
          options = {{}}
        />
        <Stack.Screen
          name = "Choice"
          component = {Choice}
          options = {{}}
        />
        <Stack.Screen 
          name= "Result"
          component = {Result}
          options = {{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}