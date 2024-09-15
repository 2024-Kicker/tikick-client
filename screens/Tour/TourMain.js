import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Modal, FlatList, Dimensions, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import banner1 from '../../assets/tour/banner1.png';
import banner2 from '../../assets/tour/banner2.png';
import card1 from '../../assets/tour/card1.png';
import kiki from '../../assets/tour/kiki.png';

const { width: screenWidth } = Dimensions.get('window');

const BannerCarousel = () => {
    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.bannerContainer}
        >
            <Image source={banner1} style={styles.bannerImage} />
            <Image source={banner2} style={styles.bannerImage} />
        </ScrollView>
    );
};

const Card = ({ title, location, imageSource, tag, index }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('오디오 상품', { title, location, imageSource, tag })}>
            <View style={styles.cardContent}>
                <View style={styles.cardTopContent}>
                    <Text style={styles.cardNumber}>{index + 1}</Text>
                    <Text style={styles.cardLocation}>  지역 | {location}</Text>
                </View>
                <Text style={styles.cardTitle}>{title}</Text>
                <View style={styles.cardTagContainer}>
                    <Image source={kiki} style={styles.cardTagImage} />
                    {/* <Text style={styles.cardTagText}>{tag}</Text> */}
                </View>
            </View>
            <View style={styles.cardImageContainer}>
                <Image source={card1} style={styles.cardImage} />
                <Ionicons name="headset-outline" size={20} color="white" style={styles.cardIcon} />
            </View>
        </TouchableOpacity>
    );
};

const renderItem = ({ item, index }) => (
    <Card title={item.title} location={item.location} imageUri={item.imageUri} tag={item.tag} index={index} />
);

const TourScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const [selectedLocation, setSelectedLocation] = useState('전체');
    const [selectedSorting, setSelectedSorting] = useState('인기순');

    const radioOptions = {
        location: ['전체', '서울특별시', '경기도', '강원도', '충청도', '경상도', '전라도', '제주도'],
        sorting: ['최신순', '인기순', '판매량순'],
    };

    const RadioButton = ({ label, value, selectedValue, onSelect }) => (
        <TouchableOpacity
            style={[
                styles.radioButton,
                value === selectedValue ? styles.radioButtonSelected : {},
            ]}
            onPress={() => onSelect(value)}
        >
            <Text style={[styles.radioLabel, value === selectedValue ? { color: 'black' } : { color: 'white' }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );


    const data = [
        {
            title: '낮에 듣는 창덕궁의 비밀',
            location: '서울',
            imageSource: card1,
            tag: '오디오',
        },
        {
            title: '낮에 듣는 창덕궁의 비밀',
            location: '서울',
            imageSource: card1,
            tag: '오디오',
        },
        {
            title: '낮에 듣는 창덕궁의 비밀',
            location: '서울',
            imageSource: card1,
            tag: '오디오',
        },
        {
            title: '낮에 듣는 창덕궁의 비밀',
            location: '서울',
            imageSource: card1,
            tag: '오디오',
        },
        {
            title: '낮에 듣는 창덕궁의 비밀',
            location: '서울',
            imageSource: card1,
            tag: '오디오',
        },
        // Add more cards here
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerTitleContainer}>
                        <Text style={styles.headerText}>랜선투어</Text>
                    </View>
                    <View style={styles.headerOrdersContainer}>
                        <View style={styles.messageTextContainer}>
                            <Text style={styles.messageText}>구매내역은 여기서!</Text>
                        </View>
                        <Ionicons name="file-tray-full-outline" size={24} color="#65E77B" />
                    </View>
                </View>

                {/* Banner */}
                <BannerCarousel />

                <View style={styles.sectionTitle}>
                    <Text style={styles.sectionTitleText}>오디오</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Ionicons name="filter-outline" size={24} color="#65E77B" />
                    </TouchableOpacity>
                </View>

                {/* Section Title */}
                <View style={styles.contentTitle}>
                    <Text style={styles.contentTitleText}>인기순</Text>
                    <Ionicons name="search-outline" size={20} color="green" />
                </View>

                {/* Card List */}
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.cardList}
                    scrollEnabled={false}
                />
            </ScrollView>
            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <Ionicons name="map-outline" size={24} color="gray" />
                <Ionicons name="football-outline" size={24} color="gray" />
                <Ionicons name="airplane-outline" size={24} color="green" />
                <Ionicons name="person-outline" size={24} color="gray" />
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
                    <Pressable onPress={(e) => e.stopPropagation()} style={styles.modalView}>
                        <Text style={styles.modalTitle}>필터</Text>
                        <View style={styles.separator} />

                        <ScrollView>
                            {/* Location Options */}
                            <Text style={styles.modalSectionTitle}>범위</Text>
                            <View style={styles.radioGroupRow}>
                                {radioOptions.location.map((option) => (
                                    <RadioButton
                                        key={option}
                                        label={option}
                                        value={option}
                                        selectedValue={selectedLocation}
                                        onSelect={setSelectedLocation}
                                    />
                                ))}
                            </View>
                            <View style={styles.separator} />
                            {/* Sorting Options */}
                            <Text style={styles.modalSectionTitle}>정렬</Text>
                            <View style={styles.radioGroupRow}>
                                {radioOptions.sorting.map((option) => (
                                    <RadioButton
                                        key={option}
                                        label={option}
                                        value={option}
                                        selectedValue={selectedSorting}
                                        onSelect={setSelectedSorting}
                                    />
                                ))}
                            </View>
                        </ScrollView>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>적용하기</Text>
                        </Pressable>

                    </Pressable>
                </Pressable>
            </Modal>
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerTitleContainer: {
        alignContent: 'center',
    },
    headerOrdersContainer: {
        flexDirection: 'row',
        marginTop: 24
    },
    header: {
        backgroundColor: 'black',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 24
    },
    messageText: {
        marginTop: 10,
        paddingHorizontal: 10,
        fontSize: 8,
        color: '#000'
    },
    messageTextContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 10,
        color: '#000'
    },
    bannerContainer: {
        height: 150,
        backgroundColor: '#f2f2f2',
    },
    bannerImage: {
        width: screenWidth,
        height: 150,
        resizeMode: 'cover',
    },
    sectionTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    sectionTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#65E77B',
    },
    contentTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    contentTitleText: {
        fontSize: 18,
        color: 'black',
    },
    cardList: {
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#B1B1B1',
        borderWidth: 1,
        marginBottom: 15,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    cardTopContent: {
        flexDirection: 'row',
    },
    cardImageContainer: {
        width: 100,
        height: 100,
        position: 'relative',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    cardIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    cardContent: {
        justifyContent: 'space-between',
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    cardNumber: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardLocation: {
        fontSize: 12,
        color: 'gray',
        marginVertical: 5,
    },
    cardTitle: {
        marginLeft: 24,
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardTag: {
        fontSize: 14,
        color: 'green',
        marginTop: 5,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    cardTagImage: {
        marginLeft: 10,
        marginBottom: 8,
        width: 20,     // Adjust the width as needed
        height: 20,    // Adjust the height as needed
        resizeMode: 'contain',
    },
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '100%',
        height: '55%',
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        color: '#65E77B',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalSectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
    },
    radioGroupRow: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allows items to wrap to the next row
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    radioButton: {
        backgroundColor: '#1B1D28',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5, // Adjust the margin to control spacing between items
    },
    radioButtonSelected: {
        backgroundColor: '#65E77B',
    },
    radioLabel: {
        fontSize: 14,
        color: 'white',
    },
    button: {
        padding: 20,
        elevation: 2,
    },
    buttonClose: {
        width: '100%',
        backgroundColor: '#65E77B',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#1B1D28',
        marginVertical: 10,
    },
});

export default TourScreen;
