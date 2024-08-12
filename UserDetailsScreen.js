import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function UserDetailsScreen() {
  const [gender, setGender] = useState('male');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: '남성', value: 'male' },
    { label: '여성', value: 'female' },
    { label: '기타', value: 'other' }
  ]);

  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleBirthdayChange = (text) => {
    setBirthday(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleNext = () => {
    console.log('Gender:', gender);
    console.log('Birthday:', birthday);
    console.log('Phone Number:', phoneNumber);
    // Handle the next steps here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>성별</Text>
      <DropDownPicker
        open={open}
        value={gender}
        items={items}
        setOpen={setOpen}
        setValue={setGender}
        setItems={setItems}
        style={styles.dropdown}
      />

      <TextInput
        style={styles.input}
        placeholder="생년월일 (YYYY-MM-DD)"
        value={birthday}
        onChangeText={handleBirthdayChange}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="전화번호"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="phone-pad"
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
  label: {
    fontSize: 16,
    marginBottom: 5,
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
  dropdown: {
    marginVertical: 10,
    height: 40,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
