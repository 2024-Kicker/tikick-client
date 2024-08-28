import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const PickedProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const categories = ['전체', '추천 코스', '오디오 투어', '축구 투어'];

  const navigation = useNavigation();

  return (
    <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
      <ScrollView  
        style={{
          flex: 1,
          backgroundColor: "#000000",
          paddingTop: 60,
          paddingBottom: 378,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/back_icon.png')} 
            resizeMode="stretch"
            style={{
              width: 6,
              height: 12,
              marginBottom: 30,
              marginHorizontal: 21,
            }}
          />
        </TouchableOpacity>
        
        <View 
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
            marginHorizontal: 21,
          }}>
          <Text 
            style={{
              color: "#FFFFFF",
              fontSize: 26,
              marginRight: 12,
            }}>
            {"찜한 상품"}
          </Text>
          <Image
            source={require('../../assets/heart_icon_white.png')} 
            resizeMode="stretch"
            style={{
              width: 25,
              height: 22,
            }}
          />
        </View>
        
        <View 
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#0D0D0D",
            paddingVertical: 17,
            paddingHorizontal: 22,
            marginBottom: 264,
          }}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(category)}
              style={{ flex: 1 }}
            >
              <Text 
                style={{
                  color: selectedCategory === category ? "#64E77B" : "#979797",
                  fontSize: 16,
                  textAlign: 'center'
                }}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text 
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            textAlign: 'center',
          }}>
          {"아직 찜한 상품이 없어요!"}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PickedProduct;
