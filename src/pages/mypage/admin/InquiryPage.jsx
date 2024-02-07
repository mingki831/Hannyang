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
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);

    const FirstHandler = () => {
        if(isFirstOpen === false) {
            setIsFirstOpen(true);
        } else {
            setIsFirstOpen(false);
        } 
    }

    const SecondHandler = () => {
        if(isSecondOpen === false) {
            setIsSecondOpen(true);
        } else {
            setIsSecondOpen(false);
        } 
    }

    const ThirdHandler = () => {
        if(isThirdOpen === false) {
            setIsThirdOpen(true);
        } else {
            setIsThirdOpen(false);
        } 
    }

    useEffect(() => {
        setPage('inquiryPage');
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

            <MypageST.QnaTitleZone onClick={FirstHandler}>
                <MypageST.QnaImg/>
                <MypageST.QnaTitle>첫번째 Q&A</MypageST.QnaTitle>
                {isFirstOpen === false ?
                <SVG name='Open' size='12' color='var(--grey-dark)' /> :
                <SVG name='Close' size='12' color='var(--grey-dark)'/>}
            </MypageST.QnaTitleZone>
            {isFirstOpen === true ?
            <MypageST.AnswerZone>
                답변내용답변내용답변내용답변내용
            </MypageST.AnswerZone> :
            ''}

            <MypageST.QnaTitleZone onClick={SecondHandler}>
                <MypageST.QnaImg/>
                <MypageST.QnaTitle>두번째 Q&A</MypageST.QnaTitle>
                {isSecondOpen === false ?
                <SVG name='Open' size='12' color='var(--grey-dark)'/> :
                <SVG name='Close' size='12' color='var(--grey-dark)'/>}
            </MypageST.QnaTitleZone>
            {isSecondOpen === true ?
            <MypageST.AnswerZone>
                답변내용답변내용답변내용답변내용
            </MypageST.AnswerZone> :
            ''}

            <MypageST.QnaTitleZone onClick={ThirdHandler}>
                <MypageST.QnaImg/>
                <MypageST.QnaTitle>세번째 Q&A</MypageST.QnaTitle>
                {isThirdOpen === false ?
                <SVG name='Open' size='12' color='var(--grey-dark)'/> :
                <SVG name='Close' size='12' color='var(--grey-dark)'/>}
            </MypageST.QnaTitleZone>
            {isThirdOpen === true ?
            <MypageST.AnswerZone>
                답변내용답변내용답변내용답변내용
            </MypageST.AnswerZone> :
            ''}

        </MyInfoST.HistoryZone>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}