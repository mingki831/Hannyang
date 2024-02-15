import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as MainST from './MainPageStyle';

import { getCookieToken } from '../../shared/storage/Cookie';
import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

import Character from '../../components/imgs/home/character.png'
import Logo2 from '../../components/imgs/Logo2.png'

export default function MainPage() {

    //const nickname = useSelector((state) => state.user.nickname);

    const token = getCookieToken();
    const [isLogin, setIsLogin] = useState(false);

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPage('MainPage');
    }, []);

    useEffect(() => {
        if (token !== null && token !== undefined) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        };
    }, [token]);

    return (
        <>
        <Layout>
            <MainST.MainBg>
                <MainST.ContentZone>
                    {isLogin === false ?
                    <MainST.GuideZone>
                        <MainST.GuideText>
                            설문조사 빠르게 끝내고 <br/>
                            기프티콘 받자!
                        </MainST.GuideText>
                        <MainST.GuideButton
                            onClick={() => {
                                navigate('/login');
                            }}
                        > 로그인하고 시작하기
                        </MainST.GuideButton>
                    </MainST.GuideZone>
                    :
                    <MainST.GuideZone>
                        <MainST.GuideText>
                            <MainST.NickText>정은</MainST.NickText>&nbsp;님! 설문 참여하고
                        </MainST.GuideText>
                        <MainST.GuideText>
                            커피 한 잔 어때요 ?
                        </MainST.GuideText>
                        <MainST.NumberZone>
                            오늘 참여&nbsp;&nbsp;<MainST.NumberText>12개</MainST.NumberText>&nbsp;
                            |&nbsp;&nbsp;내 기프티콘&nbsp;&nbsp;<MainST.NumberText>2개</MainST.NumberText>
                        </MainST.NumberZone>
                        <MainST.PointText>
                            13,500
                            <MainST.Logo2 src={Logo2}/>
                        </MainST.PointText>
                    </MainST.GuideZone>
                    }
                <MainST.CharacterZone>
                    <MainST.Character src={Character}/>
                </MainST.CharacterZone>
                
                <MainST.OptionBox>
                    <MainST.Option1 onClick={()=>{navigate('/researcher')}}>설문 조사 <br/> 올리기</MainST.Option1>
                    <MainST.Option2>설문 조사 <br/> 참여하기</MainST.Option2>
                </MainST.OptionBox>

                </MainST.ContentZone>

            </MainST.MainBg>

        </Layout>
        </>
    );
}