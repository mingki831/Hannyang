import { useState } from 'react';
import * as ModalST from '../../components/modal/ModalStyle';
import * as ShopST from './ShopStyle';

import SVG from '../../components/imgs/SVG';

export default function MypageSetting({closeModal}) {

    const [DdOpen, setDdOpen] = useState(false);
    const [Quantity, setQuantity] = useState(1);

    const CloseModalHandler = () => {
        closeModal();
    };

    const DdHandler = () => {
        if(DdOpen === false) {
            setDdOpen(true);
        } else {
            setDdOpen(false);
        } 
    }

    return (
        <ModalST.Overlay>
            <ModalST.ModalBox>
                <ModalST.Modalname2>
                    <ModalST.ModalImg/>
                    <ShopST.GiftCateText>스타벅스</ShopST.GiftCateText>
                    <ShopST.GifticonText>카페아메리카노 T</ShopST.GifticonText>
                    <ModalST.ShopPrice>4500 P</ModalST.ShopPrice>
                </ModalST.Modalname2>

                <ModalST.Option2>
                    수량
                    <ModalST.DropDown onClick={DdHandler}>
                        <ModalST.DdContent>
                            {Quantity}
                            <SVG
                                name='Open'
                                size='10'
                                color='var(--grey-light)'/>
                        </ModalST.DdContent>
                        {DdOpen === true ?
                        <ModalST.Ul>
                            <ModalST.Li onClick={()=>{setQuantity(1)}}> 1 </ModalST.Li>
                            <ModalST.Li onClick={()=>{setQuantity(2)}}> 2 </ModalST.Li>
                            <ModalST.Li onClick={()=>{setQuantity(3)}}> 3 </ModalST.Li>
                            <ModalST.Li onClick={()=>{setQuantity(4)}}> 4 </ModalST.Li>
                            <ModalST.Li onClick={()=>{setQuantity(5)}}> 5 </ModalST.Li>
                        </ModalST.Ul> : ''
                        }
                    </ModalST.DropDown>
                </ModalST.Option2>

                <ModalST.Option2>
                    결제금액
                    <ModalST.Option2Price>4500 P</ModalST.Option2Price>
                </ModalST.Option2>
                <ModalST.Cancel2Zone>
                    <ModalST.Cancel3 onClick={CloseModalHandler}>닫기</ModalST.Cancel3>
                    <ModalST.BuyBtn>구매하기</ModalST.BuyBtn>
                </ModalST.Cancel2Zone>
            </ModalST.ModalBox>
        </ModalST.Overlay>
    )
}