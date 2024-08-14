import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [showPasscodeInput, setShowPasscodeInput] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [isPasscodeValid, setIsPasscodeValid] = useState(false);
  const navigation = useNavigation();

  const handleEmailChange = () => {
    setEmail(text);
  };

  const handlePasscodeChange = () => {
    setPasscode();
    setIsPasscodeValid(false); // Reset passcode validation on change
  };

  const handleSubmit = () => {
    console.log('Email submitted: ', email);
    setShowPasscodeInput(true);
  };

  const handleCheckPasscode = () => {
    // Validate the passcode here
    if (passcode === '1234') { // Example passcode validation
      setIsPasscodeValid(true);
      console.log('Passcode is valid');
    } else {
      console.log('Passcode is invalid');
    }
  };

  const handleNext = () => {
    console.log('Passcode entered: ', passcode);
    // Navigate to the next screen
    navigation.navigate('NicknamePasswordScreen');
  };

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <TextInput
          style={styles.input}
          placeholder="이메일 주소 입력"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
        />
        <Button title="인증번호 받기" onPress={handleSubmit} />
        {showPasscodeInput && (
          <>
            <View style={styles.passcodeContainer}>
              <TextInput
                style={styles.input}
                placeholder="인증번호 입력"
                value={passcode}
                onChangeText={handlePasscodeChange}
                secureTextEntry
                keyboardType="numeric"
              />
              <Button title="인증번호 확인" onPress={handleCheckPasscode} />
            </View>
            <Button title="다음" onPress={handleNext} />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
  },
  passcodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
