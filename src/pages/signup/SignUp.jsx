import React, { useContext, useEffect} from 'react';
import * as SignST from './SignUpStyle';
import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

export default function SignUp() {

    const { setPage } = useContext(PageContext);

    useEffect(() => {
        setPage('SignUp')
    }, []);

    return (
        <>
        <Layout>
            <SignST.ContentZone>
                <SignST.SignupGuide>
                    <text style={{
                        color: '#0E4A84',
                        fontSize: '30px',
                        fontWeight: '600'
                        }}>한냥</text> 에 <br/>
                    오신 것을 환영합니다 !
                </SignST.SignupGuide>

                <SignST.InputBox>
                    이메일
                </SignST.InputBox>

                <SignST.InputBox>
                    비밀번호 (영문,숫자,특수문자 포함 8자 이상)
                </SignST.InputBox>

                <SignST.InputBox>
                    비밀번호 확인
                </SignST.InputBox>

                <SignST.InputBox>
                    닉네임 (5자 이하)
                </SignST.InputBox>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}