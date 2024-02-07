import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../../../components/context/PageContext';

import * as MyInfoST from '../style/MyInfoStyle';
import * as MypageST from '../style/MypageStyle';
import * as SignST from '../../signup/SignUpStyle';
import Layout from '../../../components/layout/Layout';

export default function Mypoint() {

    const { setPage } = useContext(PageContext);

    useEffect(() => {
        setPage('noticePage');
    }, []);

    return (
    <>
    <Layout>
    <SignST.ContentZone>
        <MyInfoST.MainZone>
            <MyInfoST.MainText>공지사항</MyInfoST.MainText>
        </MyInfoST.MainZone>
        <MyInfoST.HistoryZone>

            <MypageST.NoticeBox>
                {/* 윗부분 */}
                <MypageST.NoticeTop>
                    <MypageST.NoticeCate>버그수정 안내</MypageST.NoticeCate>
                    2024.01.25
                </MypageST.NoticeTop>
                {/* 내용 */}
                <MypageST.NoticeBottom>
                    <MypageST.NoticeTitle>공지제목공지제목</MypageST.NoticeTitle>
                    공지내용공지내용
                </MypageST.NoticeBottom>
            </MypageST.NoticeBox>

            <MypageST.NoticeBox>
                {/* 윗부분 */}
                <MypageST.NoticeTop>
                    <MypageST.NoticeCate>버그수정 안내</MypageST.NoticeCate>
                    2024.01.25
                </MypageST.NoticeTop>
                {/* 내용 */}
                <MypageST.NoticeBottom>
                    <MypageST.NoticeTitle>공지제목공지제목</MypageST.NoticeTitle>
                    공지내용공지내용
                </MypageST.NoticeBottom>
            </MypageST.NoticeBox>
        </MyInfoST.HistoryZone>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}