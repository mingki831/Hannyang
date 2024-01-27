import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SignST from './SignUpStyle';
import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

export default function SignUpSuccess() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPage('SignUpSuccess');
    }, []);

    return (
        <>
        <Layout>
            <SignST.SuccessZone>
                {/* 문구 */}
                <SignST.LogoText> 감사합니다! </SignST.LogoText>
                <SignST.SuccessText> 회원가입이 완료되었습니다. </SignST.SuccessText>
                {/* 버튼 */}
                <SignST.SuccessBtn onClick={() => { navigate('/login'); }}>
                    한냥 로그인하기
                </SignST.SuccessBtn>
            </SignST.SuccessZone>
        </Layout>
        </>
    );

}