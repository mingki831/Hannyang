import * as ModalST from '../mypage/style/ModalStyle'
import SVG from '../../components/imgs/SVG'
import { useNavigate } from 'react-router-dom'

export default function MypageSetting({setIsModal}) {

    const navigate = useNavigate();

    return (
        <ModalST.Overlay>
            <ModalST.ModalBox>
                <ModalST.Modalname>
                    <SVG name='Caution' size='18' color='var(--red-caution)'/>
                    <ModalST.ModalnameBlank/>
                    페이지를 벗어나면 <br/>
                    모든 입력 사항이 삭제됩니다.
                </ModalST.Modalname>
                <ModalST.Option onClick={()=>{setIsModal(false)}}>이어서 입력하기</ModalST.Option>
                <ModalST.Option onClick={()=>{navigate(-1)}}>이전 단계로</ModalST.Option>
                <ModalST.Cancel onClick={()=>{navigate('/')}}>게시 취소</ModalST.Cancel>
            </ModalST.ModalBox>
        </ModalST.Overlay>
    )
}