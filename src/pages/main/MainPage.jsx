import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as MainST from './MainPageStyle';
import Layout from '../../components/layout/Layout';

import { PageContext } from '../../components/context/PageContext';

import Character from '../../components/imgs/home/character.png'
import Logo2 from '../../components/imgs/Logo2.png'

export default function MainPage() {

    const nickname = useSelector((state) => state.user.nickname);
    const point = useSelector((state) => state.user.point);
    const authenticated = useSelector((state) => state.token.authenticated);
    const [isLogin, setIsLogin] = useState(false);

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    const giftArray = ['공차', '스벅', '베라', '치킨'];
    const randomValue = giftArray[Math.floor(Math.random() * giftArray.length)];

    useEffect(() => {
        setPage('MainPage');
        if (authenticated === true) {
            setIsLogin(true);
          } else {
            setIsLogin(false);
          };
    }, []);

    return (
        <>
        <Layout>
            <MainST.MainBg>
                <MainST.ContentZone>
                    {isLogin === false ?
                    <MainST.GuideZone>
                        <MainST.GuideText>
                            설문조사 참여하고 <br/>
                            {randomValue} 먹자!
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
                            <MainST.NickText>{nickname}</MainST.NickText>&nbsp;님! 설문 참여하고
                        </MainST.GuideText>
                        <MainST.GuideText>
                            커피 한 잔 어때요 ?
                        </MainST.GuideText>
                        <MainST.NumberZone>
                            오늘 참여&nbsp;&nbsp;<MainST.NumberText>12개</MainST.NumberText>&nbsp;
                            |&nbsp;&nbsp;내 기프티콘&nbsp;&nbsp;<MainST.NumberText>2개</MainST.NumberText>
                        </MainST.NumberZone>
                        <MainST.PointText>
                            {point}
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