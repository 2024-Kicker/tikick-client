import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, TextInput, View, Text, ImageBackground, Alert } from 'react-native';

export default function SignUpScreen() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const navigation = useNavigation();

  const handleNext = () => {
    // console.log('Passcode entered: ', passcode);
    navigation.navigate('UserDetailsScreen');
  };

  const handleNicknameChange = (text) => {
    setNickname(text);
    // Add logic to check if nickname is valid (e.g., not empty, meets criteria)
    setIsNicknameValid(text.length > 0);
  };

  const handlePasswordCheck = (password, confirmPassword) => {
    if (confirmPassword.length > 0) {
      setIsPasswordCorrect(password === confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    handlePasswordCheck(password,text);
  };

  return (
    <ImageBackground
      source={require('../../assets/signupBackground1.png')} // Adjust the path as needed
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.container}>

        <Text style={styles.label}>사용할 닉네임을 입력해주세요. *</Text>
        <View style={styles.nicknameContainer}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.nInput}
              value={nickname}
              onChangeText={handleNicknameChange}
              placeholder="닉네임 입력"
            />
            <TouchableOpacity
              style={[styles.nButton, !isNicknameValid && styles.nButtonDisabled]}
              disabled={!isNicknameValid}
            >
              <Text style={styles.buttonText}>닉네임 중복확인</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.label}>비밀번호를 입력해주세요. *</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="비밀번호 입력"
          secureTextEntry
        />

        <Text style={styles.label}>비밀번호를 확인해주세요. *</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          placeholder="비밀번호 입력"
          secureTextEntry
        />

        <TouchableOpacity
          style={[styles.nextButton, isPasswordCorrect && styles.nextButtonEnabled]}
          // disabled={!isNicknameValid}
          onPress={handleNext}
        >
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>

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
    width: '85%',
    // paddingHorizontal: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    padding: 18,
    marginBottom: 20,
    fontSize: 16,
    width: '55%',
    marginRight: 2,
  },
  nButton: {
    backgroundColor: '#555555',
    padding: 18,
    borderRadius: 7,
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    padding: 18,
    marginRight: 10,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#555555',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '35%',
  },
  buttonDisabled: {
    backgroundColor: '#ddd',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#eeeeee',
    padding: 18,
    borderRadius: 7,
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
    width: '100%',
  },
  nextButtonEnabled: {
    backgroundColor: '#65E77B',
    // color: '#000000'
  },
  nextButtonText: {
    color: '#000',
    fontSize: 18,
  },
});

