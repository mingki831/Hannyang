import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageContext } from '../../components/context/PageContext';

import * as MypageST from './style/MypageStyle';
import * as SignST from '../signup/SignUpStyle';
import Layout from '../../components/layout/Layout';
import SVG from '../../components/imgs/SVG';

export default function Mypage() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        setPage('mypage');
    }, []);

    return (
    <>
    <Layout>
    <SignST.ContentZone>
        <MypageST.ProfileZone>
            <MypageST.ProfilePic/>
            <MypageST.PicRight>
                <MypageST.NickText>정은</MypageST.NickText>
                <MypageST.EditBtn onClick={()=>navigate('/mypageEdit')}>
                  내 프로필 <SVG name='Goto' size='8' color='var(--blue-normal)'/>
                </MypageST.EditBtn>
            </MypageST.PicRight>
        </MypageST.ProfileZone>
        <MypageST.BtnZone>
            <MypageST.ProfileBtn>
                <MypageST.DetailBtn onClick={()=>navigate('/mygifticon')}>
                  기프티콘 <SVG name='Goto' size='10' color='var(--grey-normal)'/>
                  <MypageST.NumberText>2</MypageST.NumberText>
                </MypageST.DetailBtn>
                <MypageST.DetailBtn onClick={()=>navigate('/mypoint')}>
                  포인트 <SVG name='Goto' size='10' color='var(--grey-normal)'/>
                  <MypageST.NumberText>13,200</MypageST.NumberText>
                </MypageST.DetailBtn>
                <MypageST.DetailBtn>
                  쿠폰 <SVG name='Goto' size='10' color='var(--grey-normal)'/>
                  <MypageST.NumberText>-</MypageST.NumberText>
                </MypageST.DetailBtn>
            </MypageST.ProfileBtn>
            <MypageST.ProfileBtn>
              내가 조사한 설문 <SVG name='Goto' size='10' color='var(--grey-normal)'/>
            </MypageST.ProfileBtn>
        </MypageST.BtnZone>
        <MypageST.Line/>
        <MypageST.HelpZone>
            <MypageST.HelpBtn onClick={()=>navigate('/inquiryPage')}>
              궁금해요 <SVG name='Goto' size='10' color='var(--grey-normal)'/>
            </MypageST.HelpBtn>
            <MypageST.HelpBtn>
              공지사항 <SVG name='Goto' size='10' color='var(--grey-normal)'/>
            </MypageST.HelpBtn>
        </MypageST.HelpZone>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}