import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SignST from '../signup/SignUpStyle';
import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

export default function StepComplete() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

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