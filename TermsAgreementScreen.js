import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, Alert } from 'react-native';
import CheckBox from 'expo-checkbox';


export default function TermsAgreementScreen({ navigation }) {
    const [agreeAll, setAgreeAll] = useState(false);
    const [agreeStatement1, setAgreeStatement1] = useState(false);
    const [agreeStatement2, setAgreeStatement2] = useState(false);
    const [agreeStatement3, setAgreeStatement3] = useState(false);
    const [agreeStatement4, setAgreeStatement4] = useState(false);
    const [agreeStatement5, setAgreeStatement5] = useState(false);
    const [agreeStatement6, setAgreeStatement6] = useState(false);



    // Function to handle the 'Agree All' checkbox
    const handleAgreeAllChange = (value) => {
        setAgreeAll(value);
        setAgreeStatement1(value);
        setAgreeStatement2(value);
        setAgreeStatement3(value);
        setAgreeStatement4(value);
        setAgreeStatement5(value);
        setAgreeStatement6(value);
    };

    // Function to handle individual checkboxes
    const handleIndividualCheckboxChange = (statement, value) => {
        if (statement === 'statement1') setAgreeStatement1(value);
        if (statement === 'statement2') setAgreeStatement2(value);
        if (statement === 'statement3') setAgreeStatement3(value);
        if (statement === 'statement4') setAgreeStatement4(value);

        // Update the 'Agree All' checkbox based on the individual checkboxes
        if (value === false) {
            setAgreeAll(false);
        } else if (agreeStatement1 && agreeStatement2 && agreeStatement3 && agreeStatement4 && agreeStatement5 && agreeStatement6) {
            setAgreeAll(true);
        }
    };

    const handleNext = () => {
        if (agreeStatement1 && agreeStatement2 && agreeStatement3 && agreeStatement4) {
            navigation.navigate('NextScreen'); // Replace 'NextScreen' with the actual next screen's name
        } else {
            Alert.alert('Error', 'You must agree to all the statements to proceed.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>약관에 동의해주세요</Text>
            <Text style={styles.title}>보다 나은 서비스 제공을 위해 동의가 꼭 필요합니다.</Text>
            {/* Overall 'Agree All' checkbox */}
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agreeAll}
                    onValueChange={handleAgreeAllChange}
                    style={styles.checkbox}
                />
                <Text style={styles.header}>약관 전체 동의</Text>
                <Text style={styles.title}>서비스 이용을 위해 아래 약관에 모두 동의합니다</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agreeStatement1}
                    onValueChange={setAgreeStatement1}
                    style={styles.checkbox}
                />
                <Text style={styles.Text}>(필수)만 14세 이상입니다.</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agreeStatement2}
                    onValueChange={setAgreeStatement2}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>(필수)서비스 이용약관 동의.</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agreeStatement3}
                    onValueChange={setAgreeStatement3}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>(필수)개인정보 처리방침 동의</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agreeStatement3}
                    onValueChange={setAgreeStatement4}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>(필수)민감정보 수집 및 이용 동의</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agreeStatement3}
                    onValueChange={setAgreeStatement5}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>(선택)마케팅 수신 동의</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={agreeStatement3}
                    onValueChange={setAgreeStatement6}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>(선택)이벤트 및 할인 혜택 안내 수신 동의</Text>
            </View>

            <Button title="동의하고 가입하기" onPress={handleNext} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 10,
    },
    label: {
        fontSize: 16,
    },
});
