import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";

export default (props) => {
    const [nickname, setNickname] = useState("공릉동 불주먹");
    const [password, setPassword] = useState("●●●●●●●●●●");

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
                }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image
                        source = {require('../../assets/back_icon.png')} 
                        resizeMode = {"stretch"}
                        style={{
                            width: 6,
                            height: 12,
                            marginBottom: 31,
                            marginHorizontal: 21,
                        }}
                    />
                </TouchableOpacity>
                
                <Text 
                    style={{
                        color: "#FFFFFF",
                        fontSize: 26,
                        marginBottom: 33,
                        marginLeft: 21,
                    }}>
                    {"프로필 정보 수정"}
                </Text>
                <Text 
                    style={{
                        color: "#FFFFFF",
                        fontSize: 18,
                        marginBottom: 38,
                        marginLeft: 21,
                    }}>
                    {"프로필 수정"}
                </Text>
                <ImageBackground 
                    source={require('../../assets/profile_picture.png')} 
                    resizeMode = {'stretch'}
                    style={{
                        height: 150,
                        paddingLeft: 99,
                        paddingRight: 8,
                        marginBottom: 30,
                        marginHorizontal: 121,
                    }}
                    >
                    <Image
                        source = {require('../../assets/edit_icon.png')} 
                        resizeMode = {"stretch"}
                        style={{
                            width: 43,
                            height: 43,
                            marginTop: 107,
                        }}
                    />
                </ImageBackground>
                <View 
                    style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: 7,
                        paddingTop: 6,
                        paddingBottom: 17,
                        paddingHorizontal: 10,
                        marginBottom: 30,
                        marginHorizontal: 20,
                        shadowColor: "#00000040",
                        shadowOpacity: 0.3,
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowRadius: 2,
                        elevation: 2,
                    }}>
                    <Text 
                        style={{
                            color: "#6A6A6A",
                            fontSize: 8,
                            marginBottom: 8,
                        }}>
                        {"닉네임"}
                    </Text>
                    <TextInput 
                        style={{
                            color: "#000000",
                            fontSize: 16,
                        }}
                        value={nickname}
                        onChangeText={setNickname}
                    />
                </View>
                <View 
                    style={{
                        backgroundColor: "#F0F0F0",
                        borderRadius: 7,
                        paddingTop: 6,
                        paddingBottom: 16,
                        paddingHorizontal: 10,
                        marginBottom: 30,
                        marginHorizontal: 20,
                        shadowColor: "#00000040",
                        shadowOpacity: 0.3,
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowRadius: 2,
                        elevation: 2,
                    }}>
                    <Text 
                        style={{
                            color: "#6A6A6A",
                            fontSize: 8,
                            marginBottom: 9,
                        }}>
                        {"이메일"}
                    </Text>
                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Text 
                            style={{
                                color: "#8A8A8A",
                                fontSize: 16,
                                marginRight: 4,
                                flex: 1,
                            }}>
                            {"dlwlgP@naver.com"} {/* 이메일은 데이터베이스에서 가져온 값을 사용하도록 변경 */}
                        </Text>
                        <Text 
                            style={{
                                color: "#6A6A6A",
                                fontSize: 8,
                            }}>
                            {"이메일 변경 불가"}
                        </Text>
                    </View>
                </View>
                <View 
                    style={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: 7,
                        paddingTop: 6,
                        paddingBottom: 16,
                        paddingHorizontal: 10,
                        marginBottom: 84,
                        marginHorizontal: 20,
                        shadowColor: "#00000040",
                        shadowOpacity: 0.3,
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowRadius: 2,
                        elevation: 2,
                    }}>
                    <Text 
                        style={{
                            color: "#6A6A6A",
                            fontSize: 8,
                            marginBottom: 9,
                        }}>
                        {"비밀번호"}
                    </Text>
                    <TextInput 
                        style={{
                            color: "#000000",
                            fontSize: 16,
                        }}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity 
                    style={{
                        alignItems: "center",
                        backgroundColor: "#64E77B",
                        borderRadius: 9,
                        paddingVertical: 19,
                        marginBottom: 44,
                        marginHorizontal: 20,
                    }}
                    onPress={() => {
                        // 수정 사항을 저장하는 로직 구현하가
                        console.log("닉네임:", nickname);
                        console.log("비밀번호:", password);
                    }}
                >
                    <Text 
                        style={{
                            color: "#000000",
                            fontSize: 20,
                        }}>
                        {"수정하기"}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}