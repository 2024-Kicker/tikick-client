import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';

const source = {
html: '<p>티킥타카는 아래와 같이 사용자의 개인정보를 수집, 활용합니다. 귀하의 소중한 개인정보는 고객관리와 시스템 구축, 내부 마케팅 용도로만 활용하며, 제 3자에게 제공하지 않습니다.</p><h1>[필수] 개인정보 수집 및 활용 동의 안내</h1><p><table border="1"><thead><tr><th>수집/이용 목적</th><th>수집 항목</th><th>보유 및 이용 기간</th></tr></thead><tbody><tr><td>앱 회원 가입 및 관리 / 맞춤형 서비스 개발</td><td>이메일 주소, ID, 비밀번호, 이름, 성별, 생년월일, 휴대폰 번호</td><td>동의 철회 또는 회원탈퇴까지</td></tr><tr><td>추천 플레이스 시스템 개발</td><td>전송한 답변 목록</td><td>동의 철회 또는 회원탈퇴까지</td></tr><tr><td>구단 경기 정보 제공</td><td>응원하는 구단 정보</td><td>동의 철회 또는 회원탈퇴까지</td></tr><tr><td>앱 내 토큰 결제 서비스 제공</td><td>코인 현황, 이벤트 참여 현황</td><td>동의 철회 또는 회원탈퇴까지</td></tr></tbody></table></p><p>* 사용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. <br />단, 회원가입 시 수집하는 최소한의 개인정보 항목(필수 수집 항목)에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이 불가합니다.</p><p>&nbsp;</p>'}

const UseOfInfoTerms = () => {
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

export default UseOfInfoTerms;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 10,
        overflow: 'scroll',

        alignItems: 'center',
    },
});