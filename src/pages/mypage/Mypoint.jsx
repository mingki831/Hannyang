import { useContext, useEffect } from 'react';

import { PageContext } from '../../components/context/PageContext';

import * as MyInfoST from './MyInfoStyle';
import * as SignST from '../signup/SignUpStyle';
import * as MainST from '../main/MainPageStyle'
import Layout from '../../components/layout/Layout';
import Logo2 from '../../components/imgs/Logo2.png'

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
            <MyInfoST.MainText style={{marginBottom:'16px'}}>
                포인트 내역
            </MyInfoST.MainText>
            <MainST.PointText>
                13,500
            <MainST.Logo2 src={Logo2}/>
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
                <MyInfoST.HisCateText>기프티콘 구매</MyInfoST.HisCateText>
                <MyInfoST.MinusPoint>+ 500</MyInfoST.MinusPoint>
            </MyInfoST.HistoryBox>
        </MyInfoST.HistoryZone>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}