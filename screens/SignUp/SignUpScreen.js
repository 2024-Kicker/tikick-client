import React, { useState } from 'react';
import { TouchableOpacity, Alert, Button, StyleSheet, TextInput, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [codeMismatch, setCodeMismatch] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const navigation = useNavigation();

  const handleSendCode = () => {
    // Logic to send the code
    if (validateEmail(email)) {
      setIsEmailValid(true);
      setCodeMismatch(false);
    } else {
      setIsEmailValid(false);
      Alert.alert('Please enter a valid email address.');
    }
  };

  const handleVerifyCode = () => {
    // Logic to verify the code
    // setCodeMismatch(false);
    if (code === 'a') {
      setEmailVerified(true);
      setCodeMismatch(false);
    } else {
      setCodeMismatch(true);
      setEmailVerified(false);
    }
  };

  const validateEmail = (email) => {
    // Simple email validation logic
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleNext = () => {
    // console.log('Passcode entered: ', passcode);
    navigation.navigate('NicknamePasswordScreen');
  };

  return (
    <ImageBackground
      source={require('../../images/signupBackground1.png')} // Adjust the path as needed
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <Text style={styles.label}>이메일 주소를 입력해주세요. *</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="이메일을 입력하세요"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={handleSendCode}>
          <Text style={styles.buttonText}>인증번호 받기</Text>
        </TouchableOpacity>

        {isEmailValid && (
          <>
            <Text style={styles.label}>발송된 인증번호를 입력해주세요. *</Text>
            <View style={styles.passcodeContainer}>
              <TextInput
                style={styles.vInput}
                value={code}
                onChangeText={setCode}
                placeholder="인증번호 입력"
                keyboardType="number-pad"
              />
              <TouchableOpacity style={styles.vButton} onPress={handleVerifyCode}>
                <Text style={styles.buttonText}>인증번호 확인</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {codeMismatch && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>인증번호가 일치하지 않습니다.</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.nextButton, emailVerified && styles.nextButtonEnabled]}
          disabled={!emailVerified}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>

        {emailVerified && (
          <View style={styles.successContainer}>
            <Text style={styles.successText}>이메일 인증을 완료하였습니다.</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    maxHeight: '100%',
    marginTop: -8,
  },
  container: {
    flex: 1,
    marginTop: 190,
    backgroundColor: '#fff',
    width: '85%'
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   marginBottom: 30,
  // },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    padding: 18,
    marginBottom: 20,
    fontSize: 16
  },
  vInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    padding: 18,
    marginBottom: 20,
    fontSize: 16,
    width: '55%'
  },
  vButton: {
    backgroundColor: '#555555',
    padding: 18,
    borderRadius: 7,
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#555555',
    padding: 18,
    borderRadius: 7,
    alignItems: 'center',
    marginBottom: 45,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passcodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextButton: {
    backgroundColor: '#eeeeee',
    padding: 18,
    borderRadius: 7,
    alignItems: 'center',
    position: 'absolute', // Position the button absolutely
    bottom: 80, // Set the distance from the bottom
    width: '100%', // Set the width of the button
  },
  nextButtonEnabled: {
    backgroundColor: '#65E77B', // Button color when enabled
    color: '#000000'
  },
  nextButtonDisabled: {
    backgroundColor: '#f5f5f5',
  },
  nextButtonText: {
    color: '#000',
    fontSize: 18,
  },
  errorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: '#f3f3f3'
  },
  errorText: {
    color: '#ff0000',
    textAlign: 'center',
  },
  successContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    borderColor: '#f3f3f3'

  },
  successText: {
    color: '#0000ff',
    textAlign: 'center',
  },
});

