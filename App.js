import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";

// Import screens
import SignUpScreen from './screens/SignUp/SignUpScreen';
import NicknamePasswordScreen from './screens/SignUp/NicknamePasswordScreen';
import UserDetailsScreen from './screens/SignUp/UserDetailsScreen';
import TermsAgreementScreen from './screens/SignUp/TermsAgreementScreen';
import Login from './screens/Login/Loginpage';
import MyPageMain from './screens/Mypage/MyPageMain';
import ProfileEdit from './screens/Mypage/ProfileEdit';
import ProfileEditDetail from './screens/Mypage/ProfileEditDetail';
import PickedProduct from './screens/Mypage/PickedProduct';

const Stack = createStackNavigator();

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
