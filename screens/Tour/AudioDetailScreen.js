import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import card1 from '../../assets/tour/card1.png';
import kiki from '../../assets/tour/kiki.png';
import faq from '../../assets/tour/faqImage.png'

const AudioDetailScreen = ({ route, navigation }) => {
    const screenWidth = Dimensions.get('window').width;
    const { title, location, imageSource, tag } = route.params;

    const [activeTab, setActiveTab] = useState('상품정보');

    const commentCard = () => {

    }

    const renderContent = () => {
        switch (activeTab) {
            case '상품정보':
                return (
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>상품정보 내용입니다.</Text>
                    </View>
                    </ScrollView>
                );
            case '구매후기':
                // return (
                //     <View style={styles.reviewContainer}>
                //         <Ionicons name="chatbubble-ellipses-outline" size={40} color="black" />
                //         <Text style={styles.noReviewText}>아직 작성된 리뷰가 없어요</Text>
                //     </View>
                // );
                return (
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.reviewContainer}>
                        <Ionicons name="chatbubble-ellipses-outline" size={40} color="black" />
                        <Text style={styles.noReviewText}>아직 작성된 리뷰가 없어요</Text>
                    </View>
                    </ScrollView>
                );
            case '문의하기':
                return (
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.inquiryContainer}>
                        <Image source={faq} style={styles.inquiryImage}></Image>

                        <TouchableOpacity style={styles.inquiryButton}>
                        {/* <TouchableOpacity style={styles.inquiryButton} onPress={() => navigation.goBack()}> */}
                            <Text style={styles.inquiryText}>상품 문의하기</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                );
            default:
                return null;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <Image source={card1} style={[styles.mainImage, { width: screenWidth }]} />
                <View style={styles.content}>
                    <View style={styles.contentContainer}>
                        <View style={styles.productContainer}>
                            <Ionicons name="headset-outline" size={14} color="#65E77B" />
                            <Text style={styles.productTag}>{tag}</Text>
                        </View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.tagContainer}>
                        <Image source={kiki} style={styles.cardTagImage} />
                        <Text style={styles.tagText}>200</Text>
                    </View>
                </View>

                {/* Tab Bar */}
                <View style={styles.tabBar}>
                    <TouchableOpacity onPress={() => setActiveTab('상품정보')}>
                        <Text style={[styles.tabText, activeTab === '상품정보' && styles.activeTabText]}>상품정보</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveTab('구매후기')}>
                        <Text style={[styles.tabText, activeTab === '구매후기' && styles.activeTabText]}>구매후기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActiveTab('문의하기')}>
                        <Text style={[styles.tabText, activeTab === '문의하기' && styles.activeTabText]}>문의하기</Text>
                    </TouchableOpacity>
                </View>

                {renderContent()}

                {/* <View style={styles.reviewContainer}>
                    <Ionicons name="chatbubble-ellipses-outline" size={40} color="black" />
                    <Text style={styles.noReviewText}>아직 작성된 리뷰가 없어요</Text>
                </View> */}
            </View>
            <View style={[styles.bottomContainer, { width: screenWidth }]}>
                <View style={[styles.purchaseContainer, { width: screenWidth }]}>
                    <View style={styles.favorite}>
                        <Text style={styles.favoriteText}>찜하기</Text>
                    </View>
                    <TouchableOpacity style={styles.purchaseButton}>
                        <Text style={styles.purchaseButtonText}>구매하기</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.bottomNav}>
                    <Ionicons name="map-outline" size={24} color="gray" />
                    <Ionicons name="football-outline" size={24} color="gray" />
                    <Ionicons name="airplane-outline" size={24} color="green" />
                    <Ionicons name="person-outline" size={24} color="gray" />
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    mainImage: {
        marginTop: -24,
        height: undefined,
        aspectRatio: 1,
    },
    cardTagImage: {
        width: 30,     // Adjust the width as needed
        height: 30,    // Adjust the height as needed
        resizeMode: 'contain',
        marginLeft: 5,
    },
    contentContainer: {
        // flexDirection: 'column',
        justifyContent: 'space-between',
    },
    content: {
        backgroundColor: '#1B1D28',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: -80,
    },
    productContainer: {
        flexDirection: 'row',
        padding: 5,
        borderRadius: 10,
        width: 50,
        backgroundColor: '#000',
        marginBottom: 5,
        marginTop: -5,
    },
    productTag: {
        color: '#65E77B',
        fontSize: 10,
        padding: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    tagContainer: {
        marginTop: 24,
        flexDirection: 'row',
    },
    tagText: {
        fontSize: 14,
        height: 19,
        color: '#65E77B',
        fontWeight: 'bold',
        paddingVertical: 5,
        borderRadius: 5,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 18,
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
    activeTabText: {
        color: '#000',
    },
    infoContainer: {
        padding: 20,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        color: '#333',
    },
    reviewContainer: {
        alignItems: 'center',
        padding: 30,
    },
    noReviewText: {
        fontSize: 16,
        color: 'black',
        marginTop: 10,
    },
    inquiryContainer: {
        height: 175,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inquiryImage: {
        width: 140,     // Adjust the width as needed
        height: 127,    // Adjust the height as needed
        resizeMode: 'contain',
        marginLeft: 5,
    },
    inquiryButton: {
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: '#000',
    },
    inquiryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#65E77B',
    },
    bottomContainer: {
        marginBottom: 18,
    },
    purchaseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    favorite: {
        backgroundColor: 'white',
        padding: 18,
    },
    favoriteText: {
        color: 'black',
    },
    purchaseButton: {
        backgroundColor: '#000',
        padding: 18,
        width: '80%',
        alignItems: 'center',
    },
    purchaseButtonText: {
        color: '#65E77B',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
});

export default AudioDetailScreen;
