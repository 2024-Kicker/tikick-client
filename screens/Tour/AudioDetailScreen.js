import React, { useState } from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import card1 from '../../assets/tour/card1.png';
import kiki from '../../assets/tour/kiki.png';
import faq from '../../assets/tour/faqImage.png'

const AudioDetailScreen = ({ route, navigation }) => {
    const screenWidth = Dimensions.get('window').width;
    const { title, location, imageSource, tag } = route.params;

    const [activeTab, setActiveTab] = useState('상품정보');
    const [isFavorite, setIsFavorite] = useState(false); // Add state for favorite

    const comments = [
        {
            username: 'user1',
            date: '08.20.2024',
            rating: 4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor nisl eu est viverra, quis molestie nibh blandit. In lectus felis, iaculis mauris.',
        },        {
            username: 'user1',
            date: '08.20.2024',
            rating: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor nisl eu est viverra, quis molestie nibh blandit. In lectus felis, iaculis mauris.',
        },
        {
            username: 'user1',
            date: '08.20.2024',
            rating: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor nisl eu est viverra, quis molestie nibh blandit. In lectus felis, iaculis mauris.',
        },

    ];

    const handleFavoritePress = () => {
        setIsFavorite(!isFavorite); // Toggle the favorite state
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Ionicons
                    key={i}
                    name={i <= rating ? "star" : "star-outline"}
                    size={16}
                    color="#FFD700" // Gold color for stars
                />
            );
        }
        return <View style={styles.starsContainer}>{stars}</View>;
    };

    const CommentCard = ({ username, text, date, rating }) => {

        return (
            <View style={styles.comment}>
                <View style={styles.commentInfo}>
                    <View style={styles.commentProfile}>
                        <Ionicons name="person-circle-outline" size={30} color="gray" />
                    </View>

                    <View style={styles.commentPicNext}>
                        {renderStars(rating)}
                        <Text style={styles.commentAuthor}>{username}   {date}</Text>
                    </View>
                </View>


                <View style={styles.commentContent}>
                    <Text style={styles.commentText}>{text}</Text>
                </View>
            </View>
        );
    };

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
                if (comments.length > 0) {
                    return (

                        <View style={styles.reviewContainer}>
                            <FlatList
                                data={comments}
                                renderItem={renderItem}
                                keyExtractor={(item, index) => index.toString()}
                                contentContainerStyle={styles.cardList}
                                style={{ paddingBottom: 20 }}
                            />
                        </View>);
                }
                else {
                    return (
                        <View style={styles.reviewContainer}>
                            <Ionicons name="chatbubble-ellipses-outline" size={40} color="black" />
                            <Text style={styles.noReviewText}>아직 작성된 리뷰가 없어요</Text>
                        </View>);
                }
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
    const renderItem = ({ item, index }) => (
        <CommentCard username={item.username} date={item.date} rating={item.rating} text={item.text} />
    );

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
            </View>
            <View style={[styles.bottomContainer, { width: screenWidth }]}>
                <View style={[styles.purchaseContainer, { width: screenWidth }]}>
                    <TouchableOpacity style={styles.favorite} onPress={handleFavoritePress}>
                        <Ionicons
                            name={isFavorite ? "heart" : "heart-outline"}
                            size={24}
                            color={isFavorite ? "#65E77B" : "black"}
                        />
                        <Text style={styles.favoriteText}>찜하기</Text>
                    </TouchableOpacity>
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
    starsContainer: {
        flexDirection: 'row',
    },
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
        height: 175,
        paddingTop: 20,
        alignItems: 'center'
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
        position: 'absolute',
        bottom: 0,
        marginBottom: 18,
    },
    purchaseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    favorite: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 18,
        paddingTop: 10,
    },
    favoriteText: {
        color: 'black',
        fontWeight: 'bold',
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
        paddingTop: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    comment: {
        marginLeft: 20,
        flexDirection: 'column',
        marginBottom: 20,
        alignItems: 'left',
    },
    commentInfo: {
        flexDirection: 'row',
    },
    commentProfile: {
        marginRight: 10,
    },
    commentAuthor: {
        fontSize: 10,
        marginVertical: 5,
    },
    commentText: {
        fontSize: 14,
        color: '#333',
    },


});

export default AudioDetailScreen;
