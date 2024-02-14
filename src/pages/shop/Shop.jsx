import React, { useContext, useEffect, useState } from 'react';

import * as SignST from '../signup/SignUpStyle';
import * as ShopST from '../shop/ShopStyle';
import * as MyInfoST from '../mypage/style/MyInfoStyle';
import Layout from '../../components/layout/Layout';
import SVG from '../../components/imgs/SVG';
import ShopBuy from './ShopBuy';

import { PageContext } from '../../components/context/PageContext';

export default function SignUp() {

    const { setPage } = useContext(PageContext);
    const [shopCate, setShopCate] = useState('카페');
    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        setPage('shop');
    }, []);

    const cates = [
        { category: '카페' },
        { category: '편의점' },
        { category: '배민' },
        { category: '쿠폰'},
    ];

    const openModal = () => {
        setIsOpenModal(true);
    }
    const closeModal = () => {
        setIsOpenModal(false);
    }

    return (
        <>
        <Layout>
        {/* 모달 */}
        {isOpenModal === true ?
        <ShopBuy closeModal={closeModal}/> :
        <></>}
        <SignST.ContentZone>
            <ShopST.CateZone>
                {cates.map((cate, index) => (
                    <ShopST.CateItem
                        key={index}
                        category={cate.category}
                        onClick={() => setShopCate(`${cate.category}`)}
                        focused={shopCate === `${cate.category}` ? 'focused':''}>
                        <SVG
                            name={cate.category}
                            size='23'
                            color= {shopCate === `${cate.category}` ? 'var(--blue-normal)' : 'var(--grey-light)'}/>
                        {cate.category}
                    </ShopST.CateItem>                    
                ))}
            </ShopST.CateZone>

            <MyInfoST.HistoryZone>
            <ShopST.GifticonZone>
                <ShopST.GifticonBox onClick={openModal}>
                    <ShopST.GifticonImg/>
                    <ShopST.GiftCateText>스타벅스</ShopST.GiftCateText>
                    <ShopST.GifticonText>카페아메리카노 T</ShopST.GifticonText>
                    <ShopST.ShopPrice>4500 P</ShopST.ShopPrice>
                </ShopST.GifticonBox>
                <ShopST.GifticonBox>
                    <ShopST.GifticonImg/>
                    <ShopST.GiftCateText>스타벅스</ShopST.GiftCateText>
                    <ShopST.GifticonText>카페아메리카노 T</ShopST.GifticonText>
                    <ShopST.ShopPrice>4500 P</ShopST.ShopPrice>
                </ShopST.GifticonBox>
                <ShopST.GifticonBox>
                    <ShopST.GifticonImg/>
                    <ShopST.GiftCateText>스타벅스</ShopST.GiftCateText>
                    <ShopST.GifticonText>카페아메리카노 T</ShopST.GifticonText>
                    <ShopST.ShopPrice>4500 P</ShopST.ShopPrice>
                </ShopST.GifticonBox>
            </ShopST.GifticonZone>
            </MyInfoST.HistoryZone>

        </SignST.ContentZone>
        </Layout>
        </>
    );
}