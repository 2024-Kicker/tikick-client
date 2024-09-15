import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, Modal, ImageBackground, StyleSheet, Text, TouchableOpacity, BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from "expo-font";

// Import screens
import SignUpScreen from './screens/SignUp/SignUpScreen';
import NicknamePasswordScreen from './screens/SignUp/NicknamePasswordScreen';
import UserDetailsScreen from './screens/SignUp/UserDetailsScreen';
// import TermsAgreementScreen from './screens/SignUp/TermsAgreementScreen';
import ChooseYourTeam from './screens/Onboarding/ChooseYourTeam';
import Login from './screens/Login/Loginpage';
import TourScreen from './screens/Tour/TourMain';
import PrivacyTerms from './screens/SignUp/PrivacyTerms';
import ServiceTerms from './screens/SignUp/ServiceTerms';
import UseOfInfoTerms from './screens/SignUp/UseOfInfoTerms';
import MarketingTerms from './screens/SignUp/MarketingTerms';
import AudioDetailScreen from './screens/Tour/AudioDetailScreen';
// import MyPageMain from './screens/Mypage/MyPageMain';
// import ProfileEdit from './screens/Mypage/ProfileEdit';
// import ProfileEditDetail from './screens/Mypage/ProfileEditDetail';
// import PickedProduct from './screens/Mypage/PickedProduct';

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

      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          name="랜선투어"
          component={TourScreen}
          options={{
            headerShown: false,
          }}
        />
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
        <Stack.Screen
          name="(필수)개인정보처리방침 동의"
          component={PrivacyTerms}
        />
        <Stack.Screen
          name="(필수) 서비스 이용 약관"
          component={ServiceTerms}
        />
        <Stack.Screen
          name="(필수)개인정보 수집 및 활용 동의"
          component={UseOfInfoTerms}
        />
        <Stack.Screen
          name="(필수)프로모션 정보 수신 동의"
          component={MarketingTerms}
        />
        <Stack.Screen name="오디오 상품" component={AudioDetailScreen}
          options={{
            title: '오디오 상품',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1B1D28',
              height: 120,
            }
          }} />
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
