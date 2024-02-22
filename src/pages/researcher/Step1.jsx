import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';

import Layout from '../../components/layout/Layout';
import Progress1 from '../../components/imgs/researcher/Progress1.png';
import FormIcon from '../../components/imgs/researcher/FormIcon.png';
import CancelModal from './CancelModal';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { __postStep1 } from '../../redux/modules/SurveySlice';

export default function Step1() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { setPage } = useContext(PageContext);
    const [isModal, setIsModal] = useState(false);
    const [ {formUrl}, onInputChange ] = useInput({formUrl: ""});
    //const SentUrl = useSelector

    const nextHandler = async() => {
        let Url = formUrl.replace(/ /g,"");
        if (Url === "") {
            //빈칸이라는 경고창 팝업
        } else {
            
            dispatch(__postStep1(Url));
            navigate('/step2');
        }
    }
    
    //로그인 핸들러
    // const LoginHandler = async () => {
    //     login({email: email, password: pw})
    //     .then(response => {
    //         if (parseInt(Number(response.status) / 100) === 2) {
    //             setRefreshToken(response.headers['authorization']);
    //             dispatch(SET_TOKEN(response.headers['refresh_token']));
    //             navigate('/');
    //         } else {
    //             setIsCantLogin(true);
    //             resetInput();
    //         }
    //     }).catch((error) => {
    //         setIsCantLogin(true);
    //         resetInput();
    //     });
    // }


    useEffect(() => {
        setPage('step1');
    }, []);

    return (
        <>
        <Layout>
        {/* 모달 */}
        {isModal === true ?
        <CancelModal setIsModal={setIsModal}/> : <></>}
            <SignST.ContentZone>
                <ResrchST.ProgressBar src={Progress1}/>
                <SignST.SignupGuide>
                    설문받을 Google Form의
                </SignST.SignupGuide>
                <SignST.NotLogoText>
                    <SignST.LogoText>URL</SignST.LogoText>을 입력해주세요.
                </SignST.NotLogoText>

                <ResrchST.FormIcon src={FormIcon}/>
                <SignST.InputBox
                    name = "formUrl"
                    type = 'text'
                    value = {formUrl}
                    onChange = {onInputChange}
                    placeholder = 'URL 입력'>
                </SignST.InputBox>

                <ResrchST.ButtonZone>
                    <ResrchST.CancelBtn onClick={()=>{setIsModal(true)}}>
                        취소하기
                    </ResrchST.CancelBtn>
                    <ResrchST.NextBtn onClick={nextHandler}>
                        다음 단계
                    </ResrchST.NextBtn>
                </ResrchST.ButtonZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}