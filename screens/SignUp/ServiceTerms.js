import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';

const source = {
    html: '<h1>티킥타카 서비스 이용약관</h1><p>제 1 조 [목적]</p><p>본 이용약관은 티킥타카(이하 &ldquo;회사&rdquo;라 합니다)가 모바일 기기를 통해 제공하는 국내 여행지 맞춤 추천 서비스(이하 &ldquo;서비스&rdquo;라 합니다)의 이용과 관련하여 회원과 회사 간의 권리ㆍ의무 및 책임사항, 기타 필요한 사항을 정함으로써 상호 이익을 도모하는 것을 그 목적으로 합니다.</p><p>제 2 조 [용어의 정의]</p><p>① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br />&ldquo;서비스&rdquo;라 함은 회사가 회원에게 유ㆍ무선 접근기기를 통해 제공하는 콘텐츠 및 관련 정보와 소프트웨어 등을 의미합니다.<br />&ldquo;회원&rdquo;이라 함은 본 약관 및 개인정보 제공에 동의하여 회원 등록절차를 마치고, 회사로부터 서비스 이용 자격을 부여 받은 이용자를 의미합니다.<br />&ldquo;아이디(ID)&rdquo;라 함은 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하여 등록된 전자우편주소를 의미합니다.<br />&ldquo;비밀번호&rdquo;라 함은 회원의 동일성 확인과 회원의 권익 보호를 위하여 회원 스스로 설정한 문자와 숫자의 조합을 의미합니다.<br />&ldquo;콘텐츠&rdquo;라 함은 디지털 방식으로 제작, 처리되어 회원에게 서비스되는 내용물 일체(글, 사진, 음성, 정보 등)를 의미합니다.<br />&ldquo;접근기기&rdquo;라 함은 휴대전화, PC, 태블릿 등 콘텐츠를 다운로드 받아 설치하여 이용하거나 콘텐츠를 네트워크를 통해 이용할 수 있도록 해 주는 기계적 수단을 의미합니다.<br />&ldquo;상품정보&rdquo;라 함은 티킥타카가 판매하는 상품의 이미지, 상품명, 가격정보 등의 정보를 의미합니다.<br />"코인(키키볼)"이라 함은 포인트, 마일리지 등 그 명칭에 관계없이 회원이 쇼핑 플랫폼 이용 시 회사가 제공하는 혜택으로, 각포인트별 제공 기준 및 사용방법 등에 대하여는 회사가 별도로 정하는 정책에 따릅니다.</p><p>② 제1항에서 정의되지 않은 본 이용약관 상의 용어의 의미는 일반적인 거래관행에 의합니다.</p><p>제 3 조 [약관의 게시 및 효력]</p><p>① 회사는 본 이용약관을 회원이 쉽게 확인할 수 있도록 서비스 내 또는 회원가입 약관 동의 화면 등 별도의 연결화면을 통해 게시합니다.<br />② 회사는 필요한 경우 개별약관 또는 이용정책 등을 정하여 별도로 고지할 수 있습니다.<br />③ 본 이용약관에서 정하지 아니한 사항과 이용약관의 해석에 관하여는 콘텐츠산업진흥법, 전자상거래 등에서의 소비자 보호에 관한 법률, 약관의 규제에 관한 법률, 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 법령 및 상관례에 따릅니다.<br />④ 회원은 회사가 고지하는 이용약관, 개별약관, 개인정보처리방침, 이용정책 등을 항상 숙지해야 하며, 회사의 고의 또는 과실이 없는 한 이를 알지 못하여 발생하는 불이익은 회원에게 책임이 있습니다.<br />⑤ 본 이용약관은 이용자가 동의한 때로부터 효력이 있으며, 본 이용약관에 동의하지 않고 서비스를 이용한 경우에는 본 이용약관에 동의한 것으로 봅니다.<br />⑥ 본조에 따른 이용약관의 개정에 동의하지 않는 회원은 제2항에 따라 고지된 개정 약관의 효력발생일 전날까지 회사에 이용약관 개정에 동의하지 않는다는 의사표시를 함으로써 서비스 이용을 종료할 수 있으며, 회사가 고지하면서 변경약관의 효력발생일까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 안내하였음에도 회원이 효력발생일까지 명시적으로 거부의사를 표명하지 않을 경우 개정된 약관에 동의한 것으로 봅니다.<br />제 4 조 [서비스의 제공 범위 및 한계]<br />① 회사는 다음과 같은 업무를 수행합니다.<br />사용자의 성향에 맞춘 관광지 추천 서비스<br />랜선투어 상품 제공<br />축구 구단 경기 정보 제공 서비스</p><p>제 5 조 [이용계약의 성립]</p><p>① 이용계약은 서비스를 이용하고자 하는 자가 이 약관의 내용에 대하여 동의를 한 다음 회원가입 신청을 하고 "회사"가 이러한 신청에 대하여 승낙함으로써 체결됩니다.<br />② 회사는 회원가입 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.<br /> 1. 회원가입을 신청하는 자가 본 이용약관에 의하여 회원자격을 상실했던 자로서 회사의 재가입 승낙을 받지 못한 경우<br /> 2. 회사가 제시하는 가입신청 양식의 필수항목을 기재하지 않거나, 허위의 정보를 기재한 경우<br /> 3. 회사의 서비스 제공 또는 타인의 서비스 이용을 방해하는 경우<br /> 4. 본 이용약관이 금지하거나 공공질서, 미풍양속에 반하는 행위를 하는 경우<br /> 5. 만 14세 미만의 아동이 회원가입을 신청한 경우<br /> 6. 회원의 요청에 의하여 탈퇴한 때로부터 14일이 지나지 아니한 경우<br /> 7. 기타 이용자의 귀책사유가 있는 경우<br />③ 회사는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.<br />④ 제2항과 제3항에 따라 회원가입신청의 승낙을 하지 아니하거나 유보한 경우, 회사는 원칙적으로 이를 가입신청자에게 고지합니다.<br />⑤ 이용계약의 성립 시기는 회사가 가입완료를 신청절차 상에서 표시한 시점으로 합니다.</p><p>제 6 조 [개인정보의 변경 및 보호]</p><p>① 회원은 회원가입 시 기재한 사항이 변경되었을 경우, 지체없이 회원정보 수정 등의 방법으로 회원정보를 수정해야 합니다. 변경사항을 수정하지 않아 발생하는 손해는 해당 회원이 부담하며, 회사의 고의 또는 과실로 인하여 손해가 발생한 경우 그에 대한 책임은 회사가 부담합니다.<br />② 회사는 회원정보를 서비스 제공 목적 이외의 목적으로 사용하거나 이용자의 동의없이 제3자에게 제공하지 않습니다. 다만, 관련법령에 의한 경우는 예외로 합니다.<br />③ 회사는 관련법령이 정하는 바에 따라 이용자의 개인정보 보호를 위해 노력합니다.</p><p>제 7 조 [아이디 및 비밀번호의 관리]</p><p>① 아이디(ID) 및 비밀번호에 대한 관리책임은 회원에게 있으며, 회원은 어떠한 경우에도 본인의 아이디(ID) 또는 비밀번호를 타인에게 양도하거나 대여할 수 없습니다.<br />② 회사의 귀책사유 없이 아이디(ID) 또는 비밀번호의 유출, 양도, 대여로 인하여 발생하는 손실이나 손해에 대하여는 회사의 고의 또는 과실이 없는 한 이용자 본인이 그에 대한 책임을 부담합니다.<br />③ 회원은 아이디(ID) 또는 비밀번호를 도난당하거나 제3자가 무단으로 사용하고 있음을 인지한 경우, 즉시 회사에 통보하여야 하고 회사는 이에 대한 신속한 처리를 위하여 최선의 노력을 다합니다.</p><p>제 8 조 [이용계약의 종료]</p><p>① 회원은 언제든지 회사에게 회원 탈퇴의 의사를 통지함으로써 이용계약을 해지할 수 있습니다.<br />② 회원은 이용계약을 해지할 경우 해지의사를 통지하기 최소한 7일 전에 모든 거래를 완결시키는데 필요한 조취를 취하여야만 합니다. 만약, 이를 준수하지 않아 발생한 불이익에 대한 책임은 회사의 고의 또는 과실이 없는 한 회원 본인이 부담하여야 합니다.<br />③ 회원의 의사로 이용계약을 해지 한 후, 추후 재이용을 희망할 경우에는 회원가입 절차를 다시진행하고 회원가입 절차가 완료된 경우에만 서비스 재이용이 가능합니다.<br />④ 회사가 서비스의 전부 또는 일부를 제공하지 않기로 경영적 판단을 하는 경우에는 회원에 대한 30일 전 서면 통지로써 이용계약의 전부 또는 일부를 해지할 수 있습니다. 또한, 회사는 회원에게 다음과 같은 사유가 발생하거나 확인된 경우 해당 회원과의 이용계약을 해지할 수 있습니다.<br /> 1. 다른 회원의 권리나 명예, 신용 기타 정당한 이익을 침해하거나 대한민국 법령 또는 공서양속에 위배되는 행위를 한 경우<br /> 2. 회사가 제공하는 서비스의 원활한 진행을 방해하는 행위를 하거나 시도한 경우<br /> 3. 제6조 제2항의 승낙거부사유가 있음이 확인된 경우<br /> 4. 기타 회사가 합리적인 판단에 기해 서비스의 제공을 거부할 필요가 있다고 인정할 경우<br />⑤ 회사가 전항에 따라 이용계약을 해지를 하는 경우 회원에게 전자우편 등 기타의 방법을 통하여 해지사유를 밝혀 해지의사를 통지합니다. 이용계약은 회사의 해지의사를 회원에게 통지한 시점에 종료됩니다.<br />⑥ 본 조에 따라 이용계약이 종료되더라도, 종료 이전에 이미 제공받았던 서비스의 완결과 관련해서는 본 이용약관이 계속 적용됩니다.<br />⑦ 제1항 및 제4항에 따라 이용계약이 종료되는 경우, 회사는 회원에게 부가적으로 제공한 각종 혜택을 회수할 수 있으며, 이후 회원의 재이용신청에 대하여 승낙하지 않을 수 있습니다.<br />⑧ 본 조에 따른 이용계약의 해지는 손해배상의 청구에 영향을 미치지 않습니다.</p><p>제 9 조 [서비스 기간과 중단]</p><p>① 본 이용약관에 따른 서비스 기간은 서비스 신청일로부터 이용계약의 종료까지 입니다.<br />② 회사는 업무상 또는 기술상 특별한 사정이 없는 한 연중무휴, 1일 24시간 서비스를 제공합니다.<br />③ 회사는 컴퓨터 등 정보통신설비의 보수, 점검, 증설, 교체 및 고장, 통신의 두절, 시스템 장애, 서비스 이용 폭주 또는 운영 상의 상당한 사유가 있는 경우 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 서비스 일시 중단 사실과 그 사유를 티킥타카 및 티킥타카 외 플랫폼 초기화면에 통지합니다.<br />④ 회사는 국가비상사태, 정전 등으로 정상적인 서비스 이용에 지장이 있는 때에는 서비스의 전부 또는 일부의 이용을 제한하거나 정지할 수 있습니다.<br />⑤ 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 회사 서비스를 제공할 수 없는 경우에는 서비스의 제공을 제한하거나 일시 중단할 수 있습니다.<br />⑥ 제4항 및 제5항의 경우 회사는 홈 화면에 게시하거나 기타의 방법으로 회원들에게 통지합니다. 단, 부득이한 사유가 있는 경우에는 사후 통지로 대체할 수 있습니다.</p><p>제 10 조 [회원 관리]</p><p>① 회사는 회원이 다음 각 호에 해당하는 경우, 회사가 부가적으로 제공한 혜택의 일부 또는 전부의 회수, 특정 서비스 이용제한, 이용계약 해지(재가입 제한 조치 포함) 등(이하 &ldquo;이용제한 등&rdquo;)으로 서비스 이용을 제한할 수 있습니다.<br /> 1. 본 약관 또는 관련 법령을 위반하는 경우<br /> 2. 부정거래(조작 행위 등)를 하거나 이를 시도하는 경우<br /> 3. 이용정지 중인 계정을 소유한 회원에게 계정을 이용할 수 있도록 제공하는 경우<br /> 4. 타인의 권리나 명예, 신용 기타 정당한 이익을 침해하는 경우<br /> 5. 사회 공공질서나 미풍양속에 위배되는 경우<br /> 6. 범죄행위와 관련된 내용을 포함하는 경우<br /> 7. 정치, 경제적 분쟁을 야기하는 내용을 포함하는 경우<br /> 8. 기타 회사가 제공하는 서비스의 원활한 진행을 방해하는 경우<br />② 회사가 전항 각 호에 정한 조치를 할 경우 회사는 사전에 회원에게 이메일로 통보하며, 회원의 연락이 두절되거나 긴급을 요하는 것과 같이 부득이한 경우 선 조치 후 통보할 수 있습니다.<br />③ 회원은 본 조 제3항에 의한 회사의 조치에 대하여 이의가 있는 경우 회사에 대하여 이의를 제기할 수 있습니다.<br />④ 회원에 대한 통지는 회원이 회원가입 시 입력란 주소, 이메일, 연락처 등의 정보로 이루어지며, 통지가 도달한 때에 통지된 것으로 봅니다.</p><p>제 11 조 [저작권의 귀속 및 이용제한]</p><p>① 회사는 서비스를 이용함에 있어 저작권자의 저작권 보호를 위한 정책을 수립하여 운영하며 회원은 회사의 저작권 정책을 준수하여야 합니다.<br />② 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.<br />③ 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p><p>제 12 조 [금지행위]</p><p>① 회사가 제공하는 서비스 이용방법에 의하지 아니하고 비정상적인 방법으로 서비스를 이용하거나 시스템에 접근하는 행위는 금지됩니다.<br />② 이용자는 디컴파일, 해킹 또는 리버스 엔지니어링 등의 방법으로 소스코드를 분석하거나 임의로 변경 또는 서비스의 정상적인 운영을 방해하려는 시도를 해서는 안 됩니다.<br />③ 회사는 시스템 부정행위가 확인된 경우 해당 회원에 대하여 회사가 부가적으로 제공한 혜택의 일부 또는 전부의 회수, 특정 서비스의 이용제한, 이용계약의 해지 등의 조치를 할 수 있으며 이로 인하여 발생한 손해가 있을 시 이의 배상을 청구할 수 있습니다.<br />④ 이용자는 회사와 정당한 계약 또는 회사의 동의 없이 회사의 서비스(이용자의 계정 포함)를 재판매할 수 없고 이를 이용하여 영업 활동을 할 수 없으며, 회사는 이용자가 이 약관에 위반한 영업 활동으로 인하여 발생한 결과에 대하여 책임을 지지 않습니다.<br />⑤ 이용자가 본 조에 정한 내용을 위반한 경우 회사에 대하여 손해배상 의무를 집니다.</p><p>제 13 조 [회사의 면책]</p><p>① 제9조 제3항의 사유로 인하여 서비스를 일시적으로 중단하는 경우 회사는 이로 인하여 이용자 또는 제3자가 입은 손해에 대하여 책임지지 않습니다.<br />② 제9조 제4항 또는 제5항의 사유로 인하여 서비스를 제한하거나 중단하는 경우 회사는 그로 인한 결과에 대하여 어떠한 책임도 지지 않습니다.<br />③ 회사는 이용자 또는 제휴사의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.<br />④ 회사는 이용자가 다른 이용자가 게재한 정보, 자료, 사실의 정확성 등을 신뢰함으로써 입은 손해에 대하여 책임을 지지 않습니다.<br />⑤ 회원이 자신의 개인정보를 타인에게 유출 또는 제공함으로써, 발생하는 피해에 대해서 회사는 일체의 책임을 지지 않습니다.<br />⑥ 회사는 무료로 제공하는 서비스 이용과 관련하여 관련 법령에 특별한 규정이 없는 한, 이용자에게 손해가 생기더라도 책임지지 않습니다.<br />⑦ 본조 제1항 내지 제7항의 내용에도 불구하고 회사의 고의 또는 과실로 인하여 이용자에게 손해가 발생한 경우 그에 대한 책임은 회사가 부담합니다.</p><p>제 14 조 [정보의 제공 및 광고의 게재]</p><p>① 회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보를 공지사항이나 전자우편, 푸시메시지 등의 방법으로 회원에게 제공할 수 있습니다. 다만, 회원은 관련법에 따른 거래관련 정보 및 고객문의 등에 대한 답변 등을 제외하고는 언제든지 수신 거절을 할 수 있습니다.<br />② 제1항에 따라 전송하고자 하는 정보가 광고성 정보인 경우에는 회원의 사전 동의를 받아서 전송합니다.<br />③ 회사는 서비스의 운영과 관련하여 서비스 화면, 전자우편 등에 광고를 게재할 수 있습니다. 다만, 이는 광고 수신에 동의한 회원에 한합니다.<br />④ 이용자는 회사가 제공하는 서비스와 관련하여 게시물 또는 기타 정보를 변경, 수정 등의 조치를 취하지 않습니다.</p><p>제 15 조 [회사의 의무]</p><p>① 회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 안정적으로 서비스를 제공하는 데 최선을 다하여야 합니다.<br />② 회사는 이용자가 안전하게 서비스를 이용할 수 있도록 이용자의 개인정보보호를 위한 보안 시스템을 갖추어야 합니다.<br />③ 회사는 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.</p><p>제 16 조 [회원의 의무]</p><p>① 회원은 이 약관 및 회사가 서비스 화면에서 고지하는 내용을 준수하여야 하며, 약관 및 고지내용을 위반하거나 이행하지 아니하여 발생하는 모든 손실, 손해에 대하여 책임을 부담합니다.<br />② 회원은 회사가 서비스를 안전하게 제공할 수 있도록 회사에 협조하여야 합니다. 만약, 회사가 이 약관 위반행위를 발견하여 이용자에게 해당 위반행위에 대하여 소명을 요청할 경우 이용자는 회사의 요청에 적극 응하여야 합니다.<br />③ 회원은 다음 각 호의 행위를 하여서는 안됩니다.<br /> 1. 가입신청 또는 변경 시 허위내용의 등록하거나 타인의 개인정보를 무단으로 이용하는 행위<br /> 2. 게시된 정보를 무단으로 변경&middot;편집&middot;수정&middot;복제하는 행위<br /> 3. 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시하는 행위<br /> 4. 회사의 지적재산권을 침해하는 행위<br /> 5. 회사 및 제3자의 명예를 손상시키거나 업무를 방해하는 행위<br /> 6. 외설 또는 폭력적인 메시지, 기타 공서양속에 반하는 정보를 게시하는 행위<br /> 7. 불특정 다수의 자를 대상으로 회사의 서비스를 이용하여 영리 목적으로 활동하는 행위<br /> 8. 기타 법령 또는 사회상규에 위배되는 행위<br />④ 회원은 회사가 운영하는 고객센터의 분쟁조정에 성실히 응하여야 합니다.<br /></p><p>&bull; 공고일자: 2024년 9월 8일<br />&bull; 시행일자: 2024년 9월 15일</p><h1>&nbsp;</h1><p>&nbsp;</p>'
}

const ServiceTerms = () => {
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

export default ServiceTerms;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 10,
        overflow: 'scroll',

        alignItems: 'center',
    },
});