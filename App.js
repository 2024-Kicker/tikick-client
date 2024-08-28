import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Modal, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from "expo-font";

// Import screens
import SignUpScreen from './screens/SignUp/SignUpScreen';
import NicknamePasswordScreen from './screens/SignUp/NicknamePasswordScreen';
import UserDetailsScreen from './screens/SignUp/UserDetailsScreen';
import TermsAgreementScreen from './screens/SignUp/TermsAgreementScreen';
import ChooseYourTeam from './screens/Onboarding/ChooseYourTeam';
import Login from './screens/Login/Loginpage';
import MyPageMain from './screens/Mypage/MyPageMain';
import ProfileEdit from './screens/Mypage/ProfileEdit';
import ProfileEditDetail from './screens/Mypage/ProfileEditDetail';
import PickedProduct from './screens/Mypage/PickedProduct';

const Stack = createStackNavigator();

function Dots({ index }) {
  const colors = ['#d9d9d9', '#d9d9d9', '#d9d9d9'];
  colors[index] = '#65E77B'; // Set the color of the dot at the given index to green

  return (
    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      <Ionicons name="ellipse" size={12} color={colors[0]} style={{ marginHorizontal: 8 }} />
      <Ionicons name="ellipse" size={12} color={colors[1]} style={{ marginHorizontal: 8 }} />
      <Ionicons name="ellipse" size={12} color={colors[2]} style={{ marginHorizontal: 8 }} />
    </View>
  );
}

function App() {
  // Load custom fonts if needed (currently commented out)
  // const [fontsLoaded] = useFonts({
  //   "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.ttf"),
  //   "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.ttf"),
  //   "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.ttf"),
  // });
  // useEffect(() => {
  //   if (fontsLoaded) {
  //     fetchUsers();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) return null;

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="EditScreenInfo">
        {/* <Stack.Screen
          name="ChooseYourTeam"
          component={ChooseYourTeam}
          options={{
            headerStyle: { backgroundColor: '#000', height: 80 },
            headerTintColor: '#fff',
            header: () => null,
            
          }}
        /> */}
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: '회원가입',
            headerStyle: { height: 100, borderBottomWidth: 0, shadowOpacity: 0 },
            headerTintColor: '#fff',
            headerTransparent: true,
            headerLeft: () => null,
            headerRight: () => <Dots index={0} />,
          }}
        />
        <Stack.Screen
          name="NicknamePasswordScreen"
          component={NicknamePasswordScreen}
          options={{
            title: '회원가입',
            headerStyle: { height: 100, borderBottomWidth: 0, shadowOpacity: 0 },
            headerTintColor: '#fff',
            headerTransparent: true,
            headerLeft: () => null,
            headerRight: () => <Dots index={1} />,
          }}
        />
        <Stack.Screen
          name="UserDetailsScreen"
          component={UserDetailsScreen}
          options={{
            title: '회원가입',
            headerStyle: { height: 100, borderBottomWidth: 0, shadowOpacity: 0 },
            headerTintColor: '#fff',
            headerTransparent: true,
            headerLeft: () => null,
            headerRight: () => <Dots index={2} />,
          }}
        />
      </Stack.Navigator>
      <Stack.Navigator initialRouteName="MyPageMain">
        {/* Main Screens */}
        <Stack.Screen name="MypageMain" component={MyPageMain} options={{ title: 'My Page', headerShown: false }} />
        <Stack.Screen name="PickedProduct" component={PickedProduct} options={{ title: '찜한 상품', headerShown: false }} />
        
        {/* Profile Edit Screens */}
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileEditDetail" component={ProfileEditDetail} options={{ headerShown: false }} />
        

        {/* Authentication Screens */}
        <Stack.Screen name="Loginpage" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'Edit Screen Info' }} />
        <Stack.Screen name="NicknamePasswordScreen" component={NicknamePasswordScreen} options={{ title: 'Nickname and Password' }} />
        <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} options={{ title: 'User Details' }} />
        <Stack.Screen name="TermsAgreementScreen" component={TermsAgreementScreen} options={{ title: 'Terms Agreement' }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  // modalOverlay: {
  //   flex: 1,
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Grey out the background
  //   justifyContent: 'flex-end', // Aligns the modal content at the bottom
  // },
  // modalContent: {
  //   backgroundColor: '#fff',
  //   padding: 20,
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  // },
  // closeButton: {
  //   marginTop: 20,
  //   backgroundColor: '#595959',
  //   padding: 10,
  //   borderRadius: 5,
  //   alignItems: 'center',
  // },
  // closeButtonText: {
  //   color: '#fff',
  //   fontSize: 16,
  // },
  // modalTrigger: {
  //   position: 'absolute',
  //   bottom: 40,
  //   alignSelf: 'center',
  //   backgroundColor: '#000',
  //   padding: 10,
  //   borderRadius: 5,
  // },
  // modalTriggerText: {
  //   color: '#fff',
  //   fontSize: 16,
  // },
});
