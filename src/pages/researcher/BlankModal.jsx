import * as ModalST from '../mypage/style/ModalStyle'
import SVG from '../../components/imgs/SVG'

export default function MypageSetting({setIsBlank}) {

    return (
        <ModalST.Overlay>
            <ModalST.ModalBox>
                <ModalST.Modalname>
                    <SVG name='Caution' size='18' color='var(--red-caution)'/>
                    <ModalST.ModalnameBlank/>
                    입력사항을 확인해주세요.
                </ModalST.Modalname>
                <ModalST.Option onClick={()=>{setIsBlank(false)}}>확인</ModalST.Option>
            </ModalST.ModalBox>
        </ModalST.Overlay>
    )
}