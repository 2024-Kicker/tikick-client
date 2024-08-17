import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isLoginEnabled = username.length > 0 && password.length > 0;

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground 
        source={require('../../assets/LoginBackground.png')} 
        resizeMode='cover'
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>KI</Text>
          <Image 
            source={require('../../assets/logoGroup.png')} 
            resizeMode="contain"
            style={styles.logoDot}
          />
          <Text style={styles.logoText}>KA</Text>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder="아이디 입력" 
            placeholderTextColor="#CDCDCD" 
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder="비밀번호 입력" 
            placeholderTextColor="#CDCDCD" 
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity 
            style={styles.eyeButton} 
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Image 
              source={passwordVisible 
                ? require('../../assets/eye_valid.png') 
                : require('../../assets/eye_invalid.png')
              } 
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={[
            styles.loginButton, 
            isLoginEnabled && styles.loginButtonEnabled
          ]}
          disabled={!isLoginEnabled}
        >
          <Text 
            style={[
              styles.loginText, 
              isLoginEnabled && styles.loginTextEnabled
            ]}
          >
            로그인
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomLinks}>
          <Text style={styles.linkText}>아이디 찾기</Text>
          <Text style={styles.linkText}>비밀번호 찾기</Text>
          <Text style={styles.linkText}>회원가입</Text>
        </View>

        <View style={styles.snsContainer}>
          <View style={styles.line} />
          <Text style={styles.snsText}>SNS 계정으로 로그인</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.kakaoButton}>
          <Image 
            source={require('../../assets/kakao-icon.png')} 
            style={styles.kakaoIcon}
          />
        </TouchableOpacity>
        <Text style={styles.kakaoText}>카카오톡</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#000000', 
  },
  background: {
    height: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 55,
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 64,
    fontWeight: 'bold',
  },
  logoDot: {
    width: 40,
    height: 50,
    marginHorizontal: 10,
  },
  inputWrapper: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#FFFFFF",
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  eyeButton: {
    marginLeft: 10,
    padding: 10,
  },
  eyeIcon: {
    width: 18,
    height: 12,
  },
  loginButton: {
    width: '80%',
    height: 50,
    borderRadius: 5,
    backgroundColor: "#000000",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginTop: 10,
  },
  loginButtonEnabled: {
    backgroundColor: '#65E77B',
    borderColor: '#65E77B', 
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginTextEnabled: {
    color: "#000000", // 로그인 버튼이 활성화되면 텍스트를 검정색으로 변경
  },
  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  linkText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: -10,
    marginLeft:20,
    marginRight:20,
  },
  snsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
    marginTop: 40,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#FFFFFF',
  },
  snsText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  kakaoButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#F7E600",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop:10,
  },
  kakaoIcon: {
    width: 45,
    height: 45,
  },
  kakaoText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 5,
    alignItems: 'center',
  }
});

export default LoginPage;
