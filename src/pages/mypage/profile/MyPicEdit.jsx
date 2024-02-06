import * as ModalST from '../style/ModalStyle';

export default function MypageSetting({closePicModal}) {

    const ClosePicModalHandler = () => {
        closePicModal();
    };

    return (
        <ModalST.Overlay>
            <ModalST.ModalBox>
                <ModalST.Modalname>프로필 사진 변경</ModalST.Modalname>
                <ModalST.Option>기기에서 가져오기</ModalST.Option>
                <ModalST.Option>기본 이미지로 변경</ModalST.Option>
                <ModalST.Cancel onClick={ClosePicModalHandler}>취소</ModalST.Cancel>
            </ModalST.ModalBox>
        </ModalST.Overlay>
    )
}