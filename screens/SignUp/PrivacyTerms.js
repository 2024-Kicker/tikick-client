import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';

const source = {
html: '<p>티킥타카는 아래와 같이 사용자의 개인정보를 수집, 활용합니다. 귀하의 소중한 개인정보는 고객관리와 시스템 구축, 내부 마케팅 용도로만 활용하며, 제 3자에게 제공하지 않습니다.</p><h2>[필수] 개인정보처리방침 동의 안내</h2><h3>개인정보 수집</h3><p>필요한 범위에서 최소한의 개인정보만을 수집합니다.<br /><strong>&bull; 서비스 가입 정보</strong><br />이메일주소, 이름, 닉네임, 휴대폰 번호, 성별, 생년월일, 프로필 사진<br /><strong>&bull; 본인인증 정보</strong><br />이메일주소, 이름, 성별, 중복가입확인정보(DI) 등<br /><strong>&bull; 서비스 이용 시 생성 정보</strong><br />서비스 이용기록, 코인정보, 구매정보, IP정보 등</p><h3>개인정보 이용</h3><p>서비스 제공 및 개선(시스템 구축)과 내부 마케팅, 고객관리를 위해서만 활용합니다.<br /><strong>&bull; 회원 관리</strong><br />본인확인, 고객 식별, 서비스 부정 이용 방지 등<br /><strong>&bull; 서비스 제공 및 개선</strong><br />관광지 추천 시스템 이용 및 개발 / 구단 경기 정보 제공 등<br /><strong>&bull; 고객 소통</strong><br />서비스 관련 알림, 새로운 공지 및 이벤트 안내 등</p><h3>개인정보 파기</h3><p>보유기간 경과 또는 이용목적 달성 시 개인정보를 안전하게 즉시 파기합니다.</p><h3>개인정보 권리ㆍ의무 및 행사 방법</h3><p>이용자 또는 만 14세 미만 아동의 법정대리인(보호자)은 언제든지 자신 또는 자녀의 개인정보를 조회하거나 정정할 수 있고, 수집ㆍ이용에 대한 동의철회나 가입 해지를 요청할 수 있습니다.</p><p>* 사용자는 개인정보처리방침 동의를 거부할 권리가 있습니다. <br />단, 회원가입 시 수집하는 최소한의 개인정보 항목(필수 수집 항목)에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이 불가합니다.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>'}

const PrivacyTerms = () => {
    const route = useRoute();
    const {width} = useWindowDimensions();
    return (
        <ScrollView
        vertical
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.bannerContainer}
    >
        <View style={styles.container}>
            <RenderHTML
            contentWidth={width}
            source={source} />
        </View>
        </ScrollView>

    );
};

export default PrivacyTerms;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 10,
        overflow: 'scroll',

        alignItems: 'center',
    },
});