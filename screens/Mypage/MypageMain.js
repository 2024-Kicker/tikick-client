import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const MyPageMain = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.pageTitle}>{"MY PAGE"}</Text>
        
        <View style={styles.profileSection}>
          <ImageBackground 
            source={require('../../assets/profile_background.png')} 
            resizeMode='stretch'
            style={styles.profileImageBackground}
          >
            <Image
              source={require('../../assets/edit_icon.png')} 
              resizeMode='stretch'
              style={styles.editIcon}
            />
          </ImageBackground>
          
          <View style={styles.profileInfo}>
            <Text style={styles.nickname}>{"닉네임을 말해너구리"}</Text>
            <TouchableOpacity
              style={styles.editProfile}
              onPress={() => navigation.navigate('ProfileEdit')}
            >
              <Text style={styles.editProfileText}>{"정보 수정"}</Text>
              <Image
                source={require('../../assets/arrow_icon.png')} 
                resizeMode='stretch'
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.topMenuContainer}>
          <View style={styles.topMenu}>
            <View style={styles.topMenuItem}>
              <Image
                source={require('../../assets/team_icon.png')} 
                resizeMode='stretch'
                style={styles.topMenuIcon}
              />
              <Text style={styles.topMenuText}>{"나의 구단"}</Text>
            </View>
            <View style={styles.topMenuSeparator} />
            <View style={styles.topMenuItem}>
              <Image
                source={require('../../assets/style_icon.png')} 
                resizeMode='stretch'
                style={styles.topMenuIcon}
              />
              <Text style={styles.topMenuText}>{"나의 성향"}</Text>
            </View>
            <View style={styles.topMenuSeparator} />
            <View style={styles.topMenuItem}>
              <Image
                source={require('../../assets/coin_icon.png')} 
                resizeMode='stretch'
                style={styles.topMenuIcon}
              />
              <Text style={styles.topMenuText}>{"나의 코인"}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{"나의 구매 내역"}</Text>
          <View style={styles.itemsRow}>
            <TouchableOpacity 
              style={styles.itemCard}
              onPress={() => navigation.navigate('PickedProduct')}
            >
              <Image
                source={require('../../assets/heart_icon.png')} 
                resizeMode='stretch'
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>{"찜한 상품"}</Text>
            </TouchableOpacity>
            <View style={styles.itemCard}>
              <Image
                source={require('../../assets/box_icon.png')} 
                resizeMode='stretch'
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>{"구매 상품"}</Text>
            </View>
            <View style={styles.itemCard}>
              <Image
                source={require('../../assets/payment_icon.png')} 
                resizeMode='stretch'
                style={styles.itemIcon}
              />
              <Text style={styles.itemText}>{"결제 이력"}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>{"나의 활동"}</Text>
          <View style={styles.activityCard}>
            <View style={styles.activityRow}>
              <Image
                source={require('../../assets/review_icon.png')} 
                resizeMode='stretch'
                style={styles.activityIcon}
              />
              <Text style={styles.activityText}>{"내가 작성한 리뷰글"}</Text>
              <Image
                source={require('../../assets/arrow_icon.png')} 
                resizeMode='stretch'
                style={styles.arrowIcon}
              />
            </View>
            <View style={styles.separator} />
            <View style={styles.activityRow}>
              <Image
                source={require('../../assets/question_icon.png')} 
                resizeMode='stretch'
                style={styles.activityIcon}
              />
              <Text style={styles.activityText}>{"내가 작성한 문의글"}</Text>
              <Image
                source={require('../../assets/arrow_icon.png')} 
                resizeMode='stretch'
                style={styles.arrowIcon}
              />
            </View>
            <View style={styles.separator} />
            <View style={styles.activityRow}>
              <Image
                source={require('../../assets/answer_icon.png')} 
                resizeMode='stretch'
                style={styles.activityIcon}
              />
              <Text style={styles.activityText}>{"내가 전송한 답변"}</Text>
              <Image
                source={require('../../assets/arrow_icon.png')} 
                resizeMode='stretch'
                style={styles.arrowIcon}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#000000", 
    paddingTop: 10,
  },
  pageTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    marginBottom: 33,
    marginLeft: 22,
    marginTop: 20,
    fontWeight: "bold",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
    marginHorizontal: 21,
  },
  profileImageBackground: {
    width: 107,
    height: 107,
    paddingLeft: 71,
    paddingRight: 5,
    marginRight: 16,
  },
  editIcon: {
    width: 31,
    height: 31,
    marginTop: 76,
  },
  profileInfo: {
    flex: 1,
  },
  nickname: {
    color: "#64E77B",
    fontSize: 22,
    marginBottom: 15,
    fontWeight: "bold",
  },
  editProfile: {
    flexDirection: "row",
    alignItems: "center",
  },
  editProfileText: {
    color: "#FFFFFF",
    fontSize: 15,
    marginRight: 8,
  },
  arrowIcon: {
    width: 6,
    height: 11,
  },
  topMenuContainer: {
    position: 'relative',
    height: 88,
    marginBottom: 30,
    backgroundColor: '#000000', 
    borderRadius: 13, 
    paddingHorizontal: 16, 
    justifyContent: 'center', 
  },
  topMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between', 
    backgroundColor: "#64E77B",
    borderRadius: 13,
    paddingHorizontal: 20,
    height: 88,
  },
  topMenuItem: {
    alignItems: "center",
    flexDirection: "row",
  },
  topMenuSeparator: {
    width: 1,
    height: 34,
    backgroundColor: "#000000",
    marginHorizontal: 10,
  },
  topMenuIcon: {
    width: 42,
    height: 42,
    marginRight: 8,
  },
  topMenuText: {
    color: "#000000",
    fontSize: 12,
  },
  section: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 22,
  },
  sectionTitle: {
    color: "#2C2C2C",
    fontSize: 18,
    marginBottom: 16,
  },
  itemsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 31,
  },
  itemCard: {
    width: 100,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 11,
    paddingHorizontal: 20,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    alignItems:"center",
    shadowOffset: {
        width: 0,
        height: 0
    },
    shadowRadius: 2,
    elevation: 2,
  },
  itemIcon: {
    height: 25,
    width:27,
    marginBottom: 20,
    marginTop:-10,
    alignItems:"center",
  },
  itemText: {
    color: "#1B1D28",
    fontSize: 12,
  },
  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 26,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: {
        width: 0,
        height: 0
    },
    shadowRadius: 2,
    elevation: 2,
  },
  activityRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 36,
  },
  activityIcon: {
    width: 17,
    height: 17,
    marginRight: 16,
  },
  activityText: {
    color: "#1B1D28",
    fontSize: 14,
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 36,
  },
});

export default MyPageMain;
