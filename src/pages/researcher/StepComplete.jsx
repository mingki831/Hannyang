import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as SignST from '../signup/SignUpStyle';
import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

export default function StepComplete() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    const id = useSelector((state) => state.survey.id);
    const googleFormLink = useSelector((state) => state.survey.googleFormLink);
    const participantCount = useSelector((state) => state.survey.participantCount);
    const rewardPoints = useSelector((state) => state.survey.rewardPoints);
    const deadline = useSelector((state) => state.survey.deadline);
    const accountHolderName = useSelector((state) => state.survey.accountHolderName);
    const account = useSelector((state) => state.survey.account);
    const createdAt = useSelector((state) => state.survey.createdAt);
    const price = useSelector((state) => state.survey.price);

    console.log(
        id,
        googleFormLink,
        participantCount,
        rewardPoints,
        deadline,
        accountHolderName,
        account,
        createdAt,
        price
    );

    useEffect(() => {
        setPage('stepComplete');
    }, []);

    return (
        <>
        <Layout>
            <SignST.SuccessZone>
                {/* 문구 */}
                <SignST.LogoText> 감사합니다! </SignST.LogoText>
                <SignST.SuccessText> 설문 게시가 요청되었습니다. </SignST.SuccessText>
                {/* 버튼 */}
                <SignST.SuccessBtn
                    //참여 페이지로 이동
                    //onClick={() => { navigate('/login'); }}
                >
                    설문 참여하기
                </SignST.SuccessBtn>
            </SignST.SuccessZone>
        </Layout>
        </>
    );

}