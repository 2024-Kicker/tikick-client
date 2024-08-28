import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const teams = [
    { id: '1', name: '전북', logo: require('../../assets/jeonbuk.png') },
    { id: '2', name: '포항', logo: require('../../assets/pohang.png') },
    { id: '3', name: '김천', logo: require('../../assets/gimcheon.png') },
    { id: '4', name: '울산', logo: require('../../assets/ulsan.png') },
    { id: '5', name: '강원', logo: require('../../assets/gangwon.png') },
    { id: '6', name: '서울', logo: require('../../assets/seoul.png') },
    { id: '7', name: '수원', logo: require('../../assets/suwon.png') },
    { id: '8', name: '인천', logo: require('../../assets/incheon.png') },
    { id: '9', name: '제주', logo: require('../../assets/jeju.png') },
    { id: '10', name: '광주', logo: require('../../assets/gwangju.png') },
    { id: '11', name: '대전', logo: require('../../assets/daejeon.png') },
    { id: '12', name: '대구', logo: require('../../assets/daegu.png') },
];

export default function ChooseYourTeam() {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.teamButton,
                selectedTeam === item.id && styles.teamButtonSelected,
            ]}
            onPress={() => setSelectedTeam(item.id)}
        >
            <Image source={item.logo} style={styles.teamLogo} />
            <Text style={styles.teamName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.headerText}>
                당신이 <Text style={styles.highlightedText}>응원</Text>하는{'\n'}
                <Text style={styles.highlightedText}>구단</Text>을 알려주세요!
            </Text>
            <TouchableOpacity style={styles.noTeamContainer}>
                <Text style={styles.noTeamText}>응원하는 구단이 없어요 &gt;</Text>
            </TouchableOpacity>
            <FlatList
                data={teams}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={styles.teamGrid}
            />
            <TouchableOpacity
                style={[
                    styles.completeButton,
                    selectedTeam ? styles.buttonEnabled : styles.buttonDisabled,
                ]}
                disabled={!selectedTeam}
            >
                <Text
                    style={[
                        styles.completeButtonText,
                        selectedTeam && styles.completeButtonTextEnabled,
                    ]}
                >
                    완료</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40
    },
    highlightedText: {
        color: '#65E77B',
    },
    noTeamContainer: {
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        marginTop: 20,
        // marginBottom: 20,
    },
    noTeamText: {
        color: '#00ff00',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    teamGrid: {
        alignItems: 'center',
    },
    teamButton: {
        backgroundColor: '#222',
        borderRadius: 15,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        width: 100,
    },
    teamButtonSelected: {
        borderColor: '#65E77B',
        borderWidth: 1,
    },
    teamLogo: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    teamName: {
        color: '#fff',
        fontSize: 14,
    },
    completeButton: {
        backgroundColor: '#444',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 50,
        marginTop: 20,
        width: '100%'
    },
    buttonDisabled: {
        backgroundColor: '#888',
    },
    buttonEnabled: {
        backgroundColor: '#65E77B',
    },
    completeButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    completeButtonTextEnabled: {
        color: '#000000', // Text color when button is enabled
    },
});
