import * as ModalST from '../../../components/modal/ModalStyle';
import * as ShopST from '../../shop/ShopStyle';
import * as MyInfoST from '../style/MyInfoStyle';

export default function MypageSetting({closeModal}) {

    const CloseModalHandler = () => {
        closeModal();
    };

    return (
        <ModalST.Overlay>
            <ModalST.ModalBox>
                <ModalST.Modalname2>
                    <ModalST.ModalImg/>
                    <ShopST.GiftCateText>스타벅스</ShopST.GiftCateText>
                    <ShopST.GifticonText>카페아메리카노 T</ShopST.GifticonText>
                    <MyInfoST.LimitText>24.05.01 까지</MyInfoST.LimitText>
                </ModalST.Modalname2>
                <ModalST.Option2>
                    기프티콘 구매일자
                    <ModalST.Option2End>2024.01.05</ModalST.Option2End>
                </ModalST.Option2>
                <ModalST.Option2>
                    가격
                    <ModalST.Option2End>4500 P</ModalST.Option2End>
                </ModalST.Option2>
                <ModalST.Cancel2Zone>
                    <ModalST.UseBtn>사용 완료</ModalST.UseBtn>
                    <ModalST.Cancel2 onClick={CloseModalHandler}>닫기</ModalST.Cancel2>
                </ModalST.Cancel2Zone>
            </ModalST.ModalBox>
        </ModalST.Overlay>
    )
}