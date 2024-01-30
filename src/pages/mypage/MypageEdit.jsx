import { useContext, useEffect } from 'react';

import { PageContext } from '../../components/context/PageContext';

import * as MypageST from './MypageStyle';
import * as SignST from '../signup/SignUpStyle';
import Layout from '../../components/layout/Layout';
import Setting from '../../components/imgs/Setting.png'

export default function MypageEdit() {

    const { setPage } = useContext(PageContext);

    useEffect(() => {
        setPage('mypageEdit');
    }, []);

    return (
    <>
    <Layout>
    <SignST.ContentZone>
        {/* 프로필사진 */}
        <MypageST.EditSetting src={Setting}/>
        <MypageST.EditProfileZone>
            <MypageST.ProfilePicEdit/>
            <MypageST.EditBtn>프로필 사진 변경</MypageST.EditBtn>
        </MypageST.EditProfileZone>
        {/* 정보란 */}
        <MypageST.InfoText>닉네임</MypageST.InfoText>
        <MypageST.NickEdit>
            <MypageST.NickInput/>
            <MypageST.EditBtn>중복 확인</MypageST.EditBtn>
        </MypageST.NickEdit>
        <MypageST.InfoText>이메일</MypageST.InfoText>
        <SignST.InputBox/>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}