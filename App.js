import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './screens/SignUp/SignUpScreen';
import NicknamePasswordScreen from './screens/SignUp/NicknamePasswordScreen';
import UserDetailsScreen from './screens/SignUp/UserDetailsScreen';
import TermsAgreementScreen from './screens/SignUp/TermsAgreementScreen';
import Login from './Login';
import Welcome from './Welcome';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EditScreenInfo">
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Edit Screen Info' }} />
        <Stack.Screen name="NicknamePasswordScreen" component={NicknamePasswordScreen} options={{ title: 'Nickname and Password' }} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} options={{ title: 'User Details' }} />
        <Stack.Screen name="TermsAgreementScreen" component={TermsAgreementScreen} options={{ title: 'Terms Agreement' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
