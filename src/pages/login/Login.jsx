import React, { useContext, useEffect, useState } from 'react';
import * as LoginST from './LoginStyle';
import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { login } from '../../shared/api/AuthAPI';
import { useNavigate } from 'react-router-dom';

import SVG from '../../components/imgs/SVG';
import Logo1 from '../../components/imgs/Logo1.png';

export default function SignUp() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    const [isCantLogin, setIsCantLogin] = useState(false);

    const [ { email, pw },
            onInputChange,
            resetInput
          ] = useInput(
            { email: "",
              pw: "",
            })

    //로그인 핸들러
    const LoginHandler = async () => {
        login({email: email, password: pw})
        .then(response => {
            if (parseInt(Number(response) / 100) === 2) {
                navigate('/');
                console.log("로그인 성공 !!");
            } else {
                setIsCantLogin(true);
                resetInput();
                console.log("로그인 실패");
            }
        }).catch((error) => {
            setIsCantLogin(true);
            resetInput();
            console.log("로그인 실패");
        });
    }

    useEffect(() => {
        setPage('Login');
    }, []);

    return (
        <>
        <Layout>
            <LoginST.MainBg>
            <LoginST.ContentZone>

                {/* 문구 */}
                <LoginST.LogoZone> <LoginST.LogoImage src={Logo1}/> </LoginST.LogoZone>
                <LoginST.LogoZone> 한냥 </LoginST.LogoZone>    
                
                <LoginST.InputZone>
                {/* 이메일 */}
                <LoginST.InputBox
                    name = "email"
                    type = 'text'
                    value = {email}
                    onChange = {onInputChange}
                    placeholder = '이메일을 입력해주세요.'/>

                {/* 비밀번호 */}
                <LoginST.InputBox
                    name = "pw"
                    type = 'password'
                    value = {pw}
                    onChange = {onInputChange}
                    placeholder = '비밀번호를 입력해주세요.'/>
                </LoginST.InputZone>

                {/* 로그인 성공여부 */}
                {(isCantLogin === true) ? (
                    <LoginST.CautionText>
                        <SVG name='Caution' size='15'/>
                        이메일과 비밀번호를 다시 확인해주세요 !
                    </LoginST.CautionText>
                ) : null}

                <LoginST.LoginBtn onClick={LoginHandler}>
                    로그인
                </LoginST.LoginBtn>

                <LoginST.SignUpBtn onClick={() => navigate('/signup')}>
                    회원가입
                </LoginST.SignUpBtn>

            </LoginST.ContentZone>
            </LoginST.MainBg>
        </Layout>
        </>
    );
}