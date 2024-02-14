import { useContext, useEffect, useState } from 'react';

import { PageContext } from '../../../components/context/PageContext';

import * as MyInfoST from '../style/MyInfoStyle';
import * as SignST from '../../signup/SignUpStyle';
import * as ShopST from '../../shop/ShopStyle';
import Layout from '../../../components/layout/Layout';
import MyGifticonUse from './MygifticonUse';

export default function Mygifticon() {

    const { setPage } = useContext(PageContext);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isUsed, setIsUsed] = useState(false);

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
                <MyInfoST.Select
                    onClick={()=>{setIsUsed(false);}}
                    focused ={isUsed === false ? 'true':''}>
                    사용 전
                </MyInfoST.Select>
                <MyInfoST.Select
                    onClick={()=>{setIsUsed(true);}}
                    focused ={isUsed === true ? 'true':''}>
                    사용 완료
                </MyInfoST.Select>
            </MyInfoST.SelectZone>

            <ShopST.GifticonZone>
                <ShopST.GifticonBox onClick={openModal}>
                    <ShopST.GifticonImg/>
                    <ShopST.GiftCateText>스타벅스</ShopST.GiftCateText>
                    <ShopST.GifticonText>카페아메리카노 T</ShopST.GifticonText>
                    <MyInfoST.LimitText>24.05.01 까지</MyInfoST.LimitText>
                </ShopST.GifticonBox>
            </ShopST.GifticonZone>

        </MyInfoST.HistoryZone>
    </SignST.ContentZone>
    </Layout>
    </>
    )
}