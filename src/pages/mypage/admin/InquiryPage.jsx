import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../../../components/context/PageContext';

import * as MyInfoST from '../style/MyInfoStyle';
import * as MypageST from '../style/MypageStyle';
import * as SignST from '../../signup/SignUpStyle';
import Layout from '../../../components/layout/Layout';
import SVG from '../../../components/imgs/SVG';

export default function Mypoint() {

    const { setPage } = useContext(PageContext);
    const [isFirstOpen, setIsFirstOpen] = useState(false);

    const openHandler = () => {
        setIsFirstOpen(true);
    }

    useEffect(() => {
        setPage('mypoint');
    }, []);

    return (
    <>
    <Layout>
    <SignST.ContentZone>
        <MyInfoST.MainZone>
            <MyInfoST.MainText>궁금해요</MyInfoST.MainText>
        </MyInfoST.MainZone>
        <MyInfoST.HistoryZone>
            <MypageST.KaKaoBtn>카카오채널 문의하기</MypageST.KaKaoBtn>
            <MypageST.QnaTitleZone onClick={openHandler} isfirstopen="isfirstopen">
                <MypageST.QnaImg/>
                <MypageST.QnaTitle>첫번째 Q&A</MypageST.QnaTitle>
                <SVG name='Open' size='12' color='var(--grey-dark)'/>
            </MypageST.QnaTitleZone>
            {isFirstOpen === true ?
            <MypageST.AnswerZone>

            </MypageST.AnswerZone> :
            ''}
            <MypageST.QnaTitleZone>
                <MypageST.QnaImg/>
                <MypageST.QnaTitle>두번째 Q&A</MypageST.QnaTitle>
                <SVG name='Open' size='12' color='var(--grey-dark)'/>
            </MypageST.QnaTitleZone>
        </MyInfoST.HistoryZone>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}