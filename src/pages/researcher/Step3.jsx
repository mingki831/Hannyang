import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';

import Layout from '../../components/layout/Layout';
import Progress3 from '../../components/imgs/researcher/Progress3.png';
import copyIcon from '../../components/imgs/researcher/copyIcon.png';
import CancelModal from './CancelModal';
import CautionModal from '../../components/modal/CautionModal';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { __postStep3, SET_SURVEY } from '../../redux/modules/SurveySlice';

export default function Step3() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isModal, setIsModal] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    const [modalMsg, setModalMsg] = useState('입력사항을 확인해주세요.');

    const surveyId = useSelector((state) => state.survey.id);

    const [ { accountOwner, account },
            onInputChange,
            resetInput
          ] = useInput(
            {   accountOwner: "",
                account: "",
            });

    const nextHandler = async() => {
        if (accountOwner === "") {
            setModalMsg('입력사항을 확인해주세요.');
            setIsBlank(true);
        } else {
            //surveyId 추가
            __postStep3({ surveyId, accountOwner, account })
            .then(res => {
                if (parseInt(Number(res.status) / 100) === 2) {
                    dispatch(SET_SURVEY(res.data));
                    navigate('/stepComplete');
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
        setPage('step3');
    }, []);

    return (
        <>
        <Layout>
        {/* 모달 */}
        {isModal === true ?
        <CancelModal setIsModal={setIsModal}/> : <></>}
        {/* 빈칸경고모달 */}
        {isBlank === true ?
        <CautionModal setIsBlank={setIsBlank} modalMsg={modalMsg}/> : <></>}
            <SignST.ContentZone>
                <ResrchST.ProgressBar src={Progress3}/>
                <SignST.SignupGuide>
                    산정된 결제금액을
                </SignST.SignupGuide>
                <SignST.NotLogoText>
                    <SignST.LogoText>송금</SignST.LogoText>해주세요.
                </SignST.NotLogoText>

                <ResrchST.FlexBox>
                    <ResrchST.FinalPrice>
                        <ResrchST.FormTitle>
                            결제 금액
                        </ResrchST.FormTitle>
                        <div style={{ width: '100%', height: '8px'}}/>
                        <ResrchST.PriceText>
                            18000원
                        </ResrchST.PriceText>
                    </ResrchST.FinalPrice>
                    <ResrchST.AccountZone>
                        <ResrchST.AccountText>
                            신한은행 <br/> 110-000-000000 <br/> 김정은
                        </ResrchST.AccountText>
                        <ResrchST.CopyIcon src={copyIcon}/>
                    </ResrchST.AccountZone>
                </ResrchST.FlexBox>

                <ResrchST.AccountFormBox>
                    <ResrchST.FormTitle>
                        송금한 예금주명
                    </ResrchST.FormTitle>
                    <SignST.InputBox
                        name="accountOwner"
                        type="text"
                        onChange={onInputChange}
                        value={accountOwner}
                        placeholder='ex) 김한냥'/>
                    <div style={{ width: '100%', height: '16px'}}/>
                    <ResrchST.FormTitle>
                        환불 계좌 (은행명, 계좌번호, 예금주)
                    </ResrchST.FormTitle>
                    <SignST.InputBox
                        name="account"
                        type="text"
                        onChange={onInputChange}
                        value={account}
                        placeholder='ex) 한냥은행 111222333333 김한냥'/>
                </ResrchST.AccountFormBox>

                <ResrchST.ButtonZone>
                    <ResrchST.CancelBtn onClick={()=>{setIsModal(true)}}>
                        취소하기
                    </ResrchST.CancelBtn>
                    <ResrchST.NextBtn onClick={nextHandler}>
                        송금 완료
                    </ResrchST.NextBtn>
                </ResrchST.ButtonZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}