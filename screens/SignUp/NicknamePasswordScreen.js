import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NicknamePasswordScreen() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();


  const handleNicknameChange = () => {
    setNickname(text);
  };

  const handlePasswordChange = () => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = () => {
    setConfirmPassword(text);
  };

  const handleNext = () => {
    if (password === confirmPassword) {
      console.log('Nickname:', nickname);
      console.log('Password:', password);
      navigation.navigate('UserDetailsScreen');
      // Handle the next steps here
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="닉네임 입력"
        value={nickname}
        onChangeText={handleNicknameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 입력"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        secureTextEntry
      />
      <Button title="다음" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
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
});
