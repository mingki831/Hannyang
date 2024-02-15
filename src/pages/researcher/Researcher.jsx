import React, { useContext, useEffect } from 'react';
import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle'
import Layout from '../../components/layout/Layout';
import { PageContext } from '../../components/context/PageContext';


export default function Researcher() {

    const { setPage } = useContext(PageContext);

    useEffect(() => {
        setPage('Researcher');
    }, []);

    return (
        <>
        <Layout>
            <SignST.ContentZone>
                <ResrchST.Character/>
                <ResrchST.GuideBox>
                    <ResrchST.GuideText>비용 안내</ResrchST.GuideText>
                    <ResrchST.GuideImg1/>
                    <ResrchST.GuideText>환불 안내</ResrchST.GuideText>
                    저희가 서비스해 드린 만큼만 받겠습니다. <br/>
                    설문조사 기간이 마감되거나, 설문조사 강제종료 시
                    응답자 수가 미달된 만큼 무조건 환급해드립니다.
                    <ResrchST.GuideImg2/>
                </ResrchST.GuideBox>
                <ResrchST.StartBtn>
                    설문조사 접수하기
                </ResrchST.StartBtn>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}