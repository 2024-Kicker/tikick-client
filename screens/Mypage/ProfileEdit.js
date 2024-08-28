import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ProfileEdit = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const isSubmitEnabled = selectedGender !== null && birthdate !== null;

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(Platform.OS === 'ios');
    setBirthdate(currentDate);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/back_icon.png')}
            resizeMode="stretch"
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{"프로필 정보 수정"}</Text>
        <Text style={styles.subtitle}>{"프로필"}</Text>
        
        <View style={styles.profileCard}>
          <TouchableOpacity
            style={styles.profileRow}
            onPress={() => navigation.navigate('ProfileEditDetail', { field: 'nickname' })}
          >
            <Image
              source={require('../../assets/nickname_icon.png')}
              resizeMode="stretch"
              style={styles.profileIcon}
            />
            <Text style={styles.profileLabel}>{"닉네임"}</Text>
            <View style={styles.flexGrow} />
            <Text style={styles.profileValue}>{"닉네임을 말해너구리"}</Text>
            <Image
              source={require('../../assets/arrow_icon_black.png')}
              resizeMode="stretch"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.profileRow}
            onPress={() => navigation.navigate('ProfileEditDetail', { field: 'email' })}
          >
            <Image
              source={require('../../assets/email_icon.png')}
              resizeMode="stretch"
              style={styles.profileIcon}
            />
            <Text style={styles.profileLabel}>{"이메일"}</Text>
            <View style={styles.flexGrow} />
            <Text style={styles.profileValue}>{"dlwlgP@naver.com"}</Text>
            <Image
              source={require('../../assets/arrow_icon_black.png')}
              resizeMode="stretch"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.profileRow}
            onPress={() => navigation.navigate('ProfileEditDetail', { field: 'password' })}
          >
            <Image
              source={require('../../assets/password_icon.png')}
              resizeMode="stretch"
              style={styles.profileIcon}
            />
            <Text style={styles.profileLabel}>{"비밀번호"}</Text>
            <View style={styles.flexGrow} />
            <Image
              source={require('../../assets/arrow_icon_black.png')}
              resizeMode="stretch"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>{"성별"}</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === '남성' && styles.genderButtonSelected,
            ]}
            onPress={() => handleGenderSelect('남성')}
          >
            <Text
              style={[
                styles.genderText,
                selectedGender === '남성' && styles.genderTextSelected,
              ]}
            >
              {"남성"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === '여성' && styles.genderButtonSelected,
            ]}
            onPress={() => handleGenderSelect('여성')}
          >
            <Text
              style={[
                styles.genderText,
                selectedGender === '여성' && styles.genderTextSelected,
              ]}
            >
              {"여성"}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>{"생년월일"}</Text>
        <TouchableOpacity
          style={styles.birthdayInput}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.birthdayText}>
            {birthdate ? birthdate.toISOString().split('T')[0] : "생년월일 선택"}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={birthdate || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <TouchableOpacity
          style={[
            styles.submitButton,
            isSubmitEnabled && styles.submitButtonEnabled,
          ]}
          disabled={!isSubmitEnabled}
        >
          <Text
            style={[
              styles.submitText,
              isSubmitEnabled && styles.submitTextEnabled,
            ]}
          >
            {"수정하기"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollViewContent: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: "#000000",
  },
  backIcon: {
    width: 6,
    height: 12,
    marginBottom: 31,
    marginTop: -30,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 26,
    marginBottom: 33,
    fontWeight: "700",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "500",
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 26,
    marginBottom: 27,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    elevation: 2,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 26,
  },
  profileIcon: {
    width: 17,
    height: 17,
    marginRight: 16,
  },
  profileLabel: {
    color: "#1B1D28",
    fontSize: 14,
  },
  flexGrow: {
    flex: 1,
  },
  profileValue: {
    color: "#616161",
    fontSize: 10,
    marginRight: 18,
  },
  arrowIcon: {
    width: 6,
    height: 11,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 36,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 27,
  },
  genderButton: {
    width: "48%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    paddingVertical: 19,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    elevation: 2,
  },
  genderButtonSelected: {
    backgroundColor: "#65E77B",
    borderColor: "#65E77B",
    borderWidth: 1,
  },
  genderText: {
    color: "#1B1D28",
    fontSize: 20,
  },
  genderTextSelected: {
    color: "#000000",
  },
  birthdayInput: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    marginBottom: 99,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    elevation: 2,
  },
  birthdayText: {
    color: "#616161",
    fontSize: 16,
  },
  submitButton: {
    marginTop: -70,
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 9,
    paddingVertical: 19,
    marginBottom: 44,
  },
  submitButtonEnabled: {
    backgroundColor: "#65E77B",
  },
  submitText: {
    color: "#B8B8B8",
    fontSize: 20,
  },
  submitTextEnabled: {
    color: "#000000",
  },
});

export default ProfileEdit;
