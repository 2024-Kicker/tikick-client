import React, { useState, useEffect } from 'react';
import { ImageBackground, TouchableOpacity, Alert, Modal, Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from 'expo-checkbox';

export default function UserDetailsScreen() {
  const [gender, setGender] = useState('male');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [fieldsComplete, setFieldsComplete] = useState(false);

  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeStatement1, setAgreeStatement1] = useState(false);
  const [agreeStatement2, setAgreeStatement2] = useState(false);
  const [agreeStatement3, setAgreeStatement3] = useState(false);
  const [agreeStatement4, setAgreeStatement4] = useState(false);
  const [agreeStatement5, setAgreeStatement5] = useState(false);
  const [agreeStatement6, setAgreeStatement6] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (year && month && day && first && second && third) {
      setFieldsComplete(true);
    } else {
      setFieldsComplete(false);
    }
  }, [year, month, day, first, second, third]);


  const handleBirthdayChange = (text) => {
    setBirthday(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  const handleNext = () => {
    const birthday = `${year}-${month}-${day}`;
    console.log('Gender:', gender);
    console.log('Birthday:', birthday);
    console.log('Phone Number:', first + second + third);
    // Handle the next steps here
    // navigation.navigate('TermsAgreementScreen');
    setModalVisible(true);
  };

  const handleAgreeAllChange = (value) => {
    setAgreeAll(value);
    setAgreeStatement1(value);
    setAgreeStatement2(value);
    setAgreeStatement3(value);
    setAgreeStatement4(value);
    setAgreeStatement5(value);
    setAgreeStatement6(value);
  };

  // Handle individual checkboxes
  const handleIndividualCheckboxChange = (statement, value) => {
    if (statement === 'statement1') setAgreeStatement1(value);
    if (statement === 'statement2') setAgreeStatement2(value);
    if (statement === 'statement3') setAgreeStatement3(value);
    if (statement === 'statement4') setAgreeStatement4(value);
    if (statement === 'statement5') setAgreeStatement5(value);
    if (statement === 'statement6') setAgreeStatement6(value);

    // Update the 'Agree All' checkbox based on individual checkboxes
    if (value === false) {
      setAgreeAll(false);
    } else if (agreeStatement1 && agreeStatement2 && agreeStatement3 && agreeStatement4 && agreeStatement5 && agreeStatement6) {
      setAgreeAll(true);
    }
  };

  const handleModalNext = () => {
    if (agreeStatement1 && agreeStatement2 && agreeStatement3 && agreeStatement4) {
      setModalVisible(false);
      navigation.navigate('NextScreen'); // Replace 'NextScreen' with the actual next screen's name
    } else {
      Alert.alert('필수 항목에 동의하셔야 다음으로 넘어갑니다.');
    }
  };

  return (
    <ImageBackground
      source={require('../../images/signupBackground1.png')} // Adjust the path as needed
      style={styles.background}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <Text style={styles.label}>회원님의 성별을 알려주세요.</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'male' && styles.genderButtonSelected,
            ]}
            onPress={() => setGender('male')}
          >
            <Text style={styles.genderButtonText}>남성</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'female' && styles.genderButtonSelected,
            ]}
            onPress={() => setGender('female')}
          >
            <Text style={styles.genderButtonText}>여성</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>생년월일을 입력해주세요.</Text>
        <View style={styles.birthdayContainer}>
          <TextInput
            style={styles.birthdayInput}
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
            maxLength={4}
          />
          <Text style={styles.bdText}>년</Text>

          <TextInput
            style={styles.birthdayInput}
            value={month}
            onChangeText={setMonth}
            keyboardType="numeric"
            maxLength={2}
          />
          <Text style={styles.bdText}>월</Text>
          <TextInput
            style={styles.birthdayInput}
            value={day}
            onChangeText={setDay}
            keyboardType="numeric"
            maxLength={2}
          />
          <Text style={styles.bdText}>일</Text>
        </View>
        <Text style={styles.label}>휴대폰 번호를 입력해주세요.</Text>
        <View style={styles.mobileContainer}>
          <TextInput
            style={styles.mobileInput}
            placeholder="010"
            value={first}
            onChangeText={setFirst}
            keyboardType="phone-pad"
            maxLength={3}
          />
          <Text style={styles.dashText}>-</Text>
          <TextInput
            style={styles.mobileInput}
            placeholder=""
            value={second}
            onChangeText={setSecond}
            keyboardType="phone-pad"
            maxLength={4}
          />
          <Text style={styles.dashText}>-</Text>
          <TextInput
            style={styles.mobileInput}
            placeholder=""
            value={third}
            onChangeText={setThird}
            keyboardType="phone-pad"
            maxLength={4}
          />
        </View>

        <TouchableOpacity
          style={[styles.nextButton, fieldsComplete && styles.nextButtonEnabled]}
          onPress={handleNext}
          disabled={!fieldsComplete}
        >
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.header}>약관에 동의해주세요</Text>
              <Text style={styles.title}>보다 나은 서비스 제공을 위해 동의가 꼭 필요합니다.{'\n'}</Text>

              <View style={styles.firstCheckboxContainer}>
                <CheckBox
                  value={agreeAll}
                  onValueChange={handleAgreeAllChange}
                  style={styles.checkbox}
                />
                <Text style={styles.subHeader}>약관 전체 동의{'\n'}</Text>
              </View>
              <Text style={styles.subText}>서비스 이용을 위해 아래 약관에 모두 동의합니다</Text>


              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={agreeStatement1}
                  onValueChange={(value) => handleIndividualCheckboxChange('statement1', value)}
                  style={styles.checkbox}
                />
                <Text style={styles.Text}><Text style={styles.highlightedText}>(필수) </Text>만 14세 이상입니다.</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={agreeStatement2}
                  onValueChange={(value) => handleIndividualCheckboxChange('statement2', value)}
                  style={styles.checkbox}
                />
                <Text style={styles.Text}><Text style={styles.highlightedText}>(필수) </Text>서비스 이용약관 동의.</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={agreeStatement3}
                  onValueChange={(value) => handleIndividualCheckboxChange('statement3', value)}
                  style={styles.checkbox}
                />
                <Text style={styles.Text}><Text style={styles.highlightedText}>(필수) </Text>개인정보 처리방침 동의</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={agreeStatement4}
                  onValueChange={(value) => handleIndividualCheckboxChange('statement4', value)}
                  style={styles.checkbox}
                />
                <Text style={styles.Text}><Text style={styles.highlightedText}>(필수) </Text>민감정보 수집 및 이용 동의</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={agreeStatement5}
                  onValueChange={(value) => handleIndividualCheckboxChange('statement5', value)}
                  style={styles.checkbox}
                />
                <Text style={styles.Text}>(선택) 마케팅 수신 동의</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={agreeStatement6}
                  onValueChange={(value) => handleIndividualCheckboxChange('statement6', value)}
                  style={styles.checkbox}
                />
                <Text style={styles.Text}>(선택) 이벤트 및 할인 혜택 안내 수신 동의</Text>
              </View>

              <TouchableOpacity onPress={handleModalNext} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>동의하고 가입하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subText: {
    fontSize: 16,
    marginBottom: 30,
    marginLeft: 30,
    fontWeight: '200',
  },  
  Text: {
    // marginLeft: 10,
    fontSize: 14,
    fontWeight: '200',
  },
  text: {
    fontSize: 16,
    marginBottom: 30,
  },
  title: {
    fontWeight: '300',
  },
  highlightedText: {
    color: '#007F41',
    fontWeight: 'bold',
},
  bdText: {
    fontSize: 16,
    marginTop: 20,
    color: '#919191',
    fontWeight: 'bold',
  },
  dashText: {
    fontSize: 16,
    marginTop: 10,
    color: '#919191',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 110,
    paddingHorizontal: 20,
    paddingTop: 30,
    width: '100%',
  },
  mobileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  birthdayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  birthdayInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  mobileInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
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
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginBottom: 40,
  },
  genderButton: {
    paddingVertical: 18,
    paddingHorizontal: 55,

    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    width: '47%'
  },
  genderButtonSelected: {
    backgroundColor: '#65E77B',
  },
  genderButtonText: {
    color: '#000',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#F3F3F3', // Button color
    padding: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 100,
    width: '100%',
    alignItems: 'center',
    color: '#595959'
  },
  nextButtonEnabled: {
    backgroundColor: '#65E77B', // Button color when enabled
    color: '#000000'
  },
  nextButtonDisabled: {
    backgroundColor: '#F3F3F3',
  },
  nextButtonText: {
    color: '#B8b8b8',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  firstCheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#B8B8B8'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24
  },
  modalContent: {
    width: '100%',
    height: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    // backgroundColor: '#2196F3',
    // padding: 10,
    // borderRadius: 5,
    // marginTop: 20,
    backgroundColor: '#d6d6d6',
    padding: 18,
    borderRadius: 7,
    alignItems: 'center',
    position: 'absolute',
    marginLeft: 20,
    bottom: 80,
    width: '100%',
  },
  closeButtonText: {
    color: '#919191',
    fontSize: 20,
  alignContent: 'center',
  },
  closeButtonEnabled: {
    backgroundColor: '#65E77B',
    // color: '#000000'
  },
});
