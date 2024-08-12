import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './SignUpScreen';
import NicknamePasswordScreen from './NicknamePasswordScreen';
import UserDetailsScreen from './UserDetailsScreen';  // Import the new screen


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EditScreenInfo">
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Edit Screen Info' }} />
        <Stack.Screen name="NicknamePasswordScreen" component={NicknamePasswordScreen} options={{ title: 'Nickname and Password' }} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} options={{ title: 'User Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
