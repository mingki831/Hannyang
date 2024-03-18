import * as ModalST from './ModalStyle'
import SVG from '../imgs/SVG'

export default function CautionModal({setIsBlank, modalMsg}) {

    return (
        <ModalST.Overlay>
            <ModalST.ModalBox>
                <ModalST.Modalname>
                    <SVG name='Check' size='18' color='var(--green-success)'/>
                    <ModalST.ModalnameBlank/>
                    {modalMsg}
                </ModalST.Modalname>
                <ModalST.Option onClick={()=>{setIsBlank(false)}}>확인</ModalST.Option>
            </ModalST.ModalBox>
        </ModalST.Overlay>
    )
}