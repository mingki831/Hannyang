import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';

import Layout from '../../components/layout/Layout';
import Progress2 from '../../components/imgs/researcher/Progress2.png';
import FormIcon from '../../components/imgs/researcher/FormIcon.png';
import SVG from '../../components/imgs/SVG';
import CancelModal from './CancelModal';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';

export default function Step2() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const [isModal, setIsModal] = useState(false);

    const [ { formUrl },
        onInputChange,
        resetInput
      ] = useInput({formUrl: ""})

    useEffect(() => {
        setPage('step2');
    }, []);

    return (
        <>
        <Layout>
        {/* 모달 */}
        {isModal === true ?
        <CancelModal setIsModal={setIsModal}/> : <></>}
            <SignST.ContentZone>
                <ResrchST.ProgressBar src={Progress2}/>
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
                    placeholder = 'URL 입력'/>

                <ResrchST.ButtonZone>
                    <ResrchST.CancelBtn onClick={()=>{setIsModal(true)}}>
                        취소하기
                    </ResrchST.CancelBtn>
                    <ResrchST.NextBtn>
                        다음 단계
                    </ResrchST.NextBtn>
                </ResrchST.ButtonZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}