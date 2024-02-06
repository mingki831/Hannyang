import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../../../components/context/PageContext';

import * as MyInfoST from '../style/MyInfoStyle';
import * as SignST from '../../signup/SignUpStyle';
import Layout from '../../../components/layout/Layout';
import MyGifticonUse from './MygifticonUse';

export default function Mygifticon() {

    const { setPage } = useContext(PageContext);

    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true);
    }
    const closeModal = () => {
        setIsOpenModal(false);
    }

    useEffect(() => {
        setPage('mygifticon');
    }, []);

    return (
    <>
    <Layout>
    {/* 모달 */}
    {isOpenModal === true ?
    <MyGifticonUse closeModal={closeModal}/> :
    <></>}
    <SignST.ContentZone>
        <MyInfoST.MainZone>
            <MyInfoST.MainText>
                <MyInfoST.NickText>정은</MyInfoST.NickText>&nbsp;님의
            </MyInfoST.MainText>
            <MyInfoST.MainText>
                기프티콘함
            </MyInfoST.MainText>
        </MyInfoST.MainZone>
        <MyInfoST.HistoryZone>
            <MyInfoST.SelectZone>
                <MyInfoST.Select>사용 전</MyInfoST.Select>
                <MyInfoST.Select>사용 완료</MyInfoST.Select>
            </MyInfoST.SelectZone>
            <MyInfoST.GifticonZone>
                <MyInfoST.GifticonBox onClick={openModal}>
                    <MyInfoST.GifticonImg/>
                    <MyInfoST.GiftCateText>스타벅스</MyInfoST.GiftCateText>
                    <MyInfoST.GifticonText>카페아메리카노 T</MyInfoST.GifticonText>
                    <MyInfoST.LimitText>24.05.01 까지</MyInfoST.LimitText>
                </MyInfoST.GifticonBox>
                <MyInfoST.GifticonBox>
                    <MyInfoST.GifticonImg/>
                    <MyInfoST.HisCateText>스타벅스</MyInfoST.HisCateText>
                    <MyInfoST.GifticonText>카페아메리카노 T</MyInfoST.GifticonText>
                    <MyInfoST.LimitText>24.05.01 까지</MyInfoST.LimitText>
                </MyInfoST.GifticonBox>
                <MyInfoST.GifticonBox>
                    <MyInfoST.GifticonImg/>
                    <MyInfoST.HisCateText>스타벅스</MyInfoST.HisCateText>
                    <MyInfoST.GifticonText>카페아메리카노 T</MyInfoST.GifticonText>
                    <MyInfoST.LimitText>24.05.01 까지</MyInfoST.LimitText>
                </MyInfoST.GifticonBox>
            </MyInfoST.GifticonZone>
        </MyInfoST.HistoryZone>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}