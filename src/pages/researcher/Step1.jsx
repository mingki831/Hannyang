import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle'

import Layout from '../../components/layout/Layout';
import Progress1 from '../../components/imgs/researcher/Progress1.png';
import FormIcon from '../../components/imgs/researcher/FormIcon.png'
import SVG from '../../components/imgs/SVG';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';

export default function StepOne() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    const [ {formUrl},
        onInputChange,
        resetInput
      ] = useInput({formUrl: ""})

    useEffect(() => {
        setPage('Step1');
    }, []);

    return (
        <>
        <Layout>
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
                    placeholder = 'URL 입력'/>
                <ResrchST.CheckText>
                    <SVG name='Caution' size='15' color='var(--blue-normal)'/>
                    접수 후, 한냥이 설문조사를 알맞게 변환했는지 꼭 확인해주세요 :)
                </ResrchST.CheckText>

                <ResrchST.ButtonZone>
                    <ResrchST.CancelBtn>
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