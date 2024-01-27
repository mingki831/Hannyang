import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as MainST from './MainPageStyle';

import { getCookieToken } from '../../shared/storage/Cookie';
import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';

import Ellipse from '../../components/imgs/home/ellipse.png'
import Character from '../../components/imgs/home/character.png'

export default function MainPage() {

    // const nickname = useSelector((state) => state.user);
    // console.log(nickname);

    const token = getCookieToken();
    if ((token !== null) && (token !== undefined)) {
        var a = '로그인 상태'
    } else {
        var a = '로그인 안한 상태'
    }

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPage('MainPage')
    }, []);

    return (
        <>
        <Layout>
            <MainST.MainBg path={Ellipse}>

                <MainST.ContentZone>
                <MainST.GuideZone>
                    <MainST.GuideText>
                        설문조사 빠르게 끝내고 <br/>
                        기프티콘 받자!
                        {a}
                        {/* {nickname} 님 */}
                    </MainST.GuideText>
                    <MainST.GuideButton
                        onClick={() => {
                            navigate('/login');
                        }}
                    > 로그인하고 시작하기
                    </MainST.GuideButton>
                </MainST.GuideZone>

                <MainST.CharacterZone>
                    <MainST.Character src={Character}/>
                </MainST.CharacterZone>
                
                <MainST.OptionBox>
                    <MainST.Option1>설문 조사 <br/> 올리기</MainST.Option1>
                    <MainST.Option2>설문 조사 <br/> 참여하기</MainST.Option2>
                </MainST.OptionBox>

                </MainST.ContentZone>

            </MainST.MainBg>

        </Layout>
        </>
    );
}