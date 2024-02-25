import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';

import Layout from '../../components/layout/Layout';
import Progress1 from '../../components/imgs/researcher/Progress1.png';
import FormIcon from '../../components/imgs/researcher/FormIcon.png';
import CancelModal from './CancelModal';
import BlankModal from './BlankModal';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { SET_SURVEY, __postStep1 } from '../../redux/modules/SurveySlice';

export default function Step1() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { setPage } = useContext(PageContext);
    const [isModal, setIsModal] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    const [ {formUrl}, onInputChange, resetInput ] = useInput({formUrl: ""});

    const nextHandler = async() => {
        let Url = formUrl.replace(/ /g,"");
        if (Url === "") {
            setIsBlank(true);
        } else {
            __postStep1(Url)
            .then(res => {
                if (parseInt(Number(res.status) / 100) === 2) {
                    console.log(res.data);
                    dispatch(SET_SURVEY(res.data));
                    navigate('/step2');
                } else {
                    //예외처리
                    resetInput();
                }
            }).catch((error) => {
                //예외처리
                resetInput();
            })
        }
    }

    useEffect(() => {
        setPage('step1');
    }, []);

    return (
        <>
        <Layout>
        {/* 모달 */}
        {isModal === true ?
        <CancelModal setIsModal={setIsModal}/> : <></>}
        {/* 빈칸경고모달 */}
        {isBlank === true ?
        <BlankModal setIsBlank={setIsBlank}/> : <></>}
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