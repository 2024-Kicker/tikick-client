import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';

const source = {
    html: '<p>마케팅 정보 수신 동의</p><h1>[선택] 마케팅 정보 수신 동의 안내</h1><p>티킥타카는 회원님이 동의하신 개인정보를 이용하여 푸시알림, 이메일을 통해 서비스 이벤트 및 업데이트, 마케팅 정보, 고객 맞춤 서비스 정보를 전송할 수 있습니다.</p><p>본 동의는 거부하실 수 있으나, 거부 시 이벤트 및 프로모션 안내, 유용한 정보를 받아보실 수 없습니다.</p><p>* 광고성정보수신 동의 여부는 언제든지 변경할 수 있습니다.</p>'
}

const MarketingTerms = () => {
    const route = useRoute();
    const { width } = useWindowDimensions();
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

export default MarketingTerms;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 10,
        overflow: 'scroll',

        alignItems: 'center',
    },
});