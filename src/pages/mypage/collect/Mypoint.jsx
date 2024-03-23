import { useContext, useEffect } from 'react';

import { PageContext } from '../../../components/context/PageContext';

import * as MyInfoST from '../style/MyInfoStyle';
import * as SignST from '../../signup/SignUpStyle';
import * as MainST from '../../main/MainPageStyle'
import Layout from '../../../components/layout/Layout';

export default function Mypoint() {

    const { setPage } = useContext(PageContext);

    useEffect(() => {
        setPage('mypoint');
    }, []);

    return (
    <>
    <Layout>
    <SignST.ContentZone>
        <MyInfoST.MainZone>
            <MyInfoST.MainText>
                <MyInfoST.NickText>정은</MyInfoST.NickText>&nbsp;님의
            </MyInfoST.MainText>
            <MyInfoST.MainText style={{marginBottom:'12px'}}>
                포인트 내역
            </MyInfoST.MainText>
            <MainST.PointText>
                13,500
            </MainST.PointText>
        </MyInfoST.MainZone>
        <MyInfoST.HistoryZone>
            <MyInfoST.DateText>23.12.26</MyInfoST.DateText>
            <MyInfoST.HistoryBox>
                <MyInfoST.HisCateText>
                    기프티콘 구매
                    <MyInfoST.HistoryText>메가커피 아메리카노</MyInfoST.HistoryText>
                </MyInfoST.HisCateText>
                <MyInfoST.PlusPoint>- 3000</MyInfoST.PlusPoint>
            </MyInfoST.HistoryBox>
            <MyInfoST.HistoryBox>
                <MyInfoST.HisCateText>
                    설문조사 참여
                    <MyInfoST.HistoryText>대학생 봉사시간에 대한 설문조사</MyInfoST.HistoryText>
                </MyInfoST.HisCateText>
                <MyInfoST.MinusPoint>+ 500</MyInfoST.MinusPoint>
            </MyInfoST.HistoryBox>
        </MyInfoST.HistoryZone>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}