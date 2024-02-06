import * as ModalST from '../style/ModalStyle';
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
                    <MyInfoST.GiftCateText>스타벅스</MyInfoST.GiftCateText>
                    <MyInfoST.GifticonText>카페아메리카노 T</MyInfoST.GifticonText>
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