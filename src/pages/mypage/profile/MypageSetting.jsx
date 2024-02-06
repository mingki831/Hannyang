import * as ModalST from '../style/ModalStyle';
import { useNavigate } from 'react-router-dom';

import { logout, withdraw } from '../../../shared/api/AuthAPI';
import { removeCookieToken } from '../../../shared/storage/Cookie';
import { useDispatch } from 'react-redux';
import { DELETE_TOKEN } from '../../../redux/modules/AuthSlice';
import { DELETE_USER } from '../../../redux/modules/UserSlice';

export default function MypageSetting({closeSettModal}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const WithdrawHandler = async() => {
        withdraw()
        .then(response => {
            console.log(response);
            closeSettModal();
            navigate('/');
            removeCookieToken();
            dispatch(DELETE_TOKEN());
            //dispatch(DELETE_USER());
        }).catch(error => {
            console.log('탈퇴 실패', error)
        });   
    };

    const LogoutHandler = async() => {
      logout()
      .then(response => {
            console.log(response);
            closeSettModal();
            navigate('/');
            removeCookieToken();
            dispatch(DELETE_TOKEN());
            //dispatch(DELETE_USER());        
      }).catch(error => {
        console.log('로그아웃 실패', error)
      });
    };

    const CloseSettModalHandler = () => {
        closeSettModal();
    };

    return (
        <ModalST.Overlay>
            <ModalST.ModalBox>
                <ModalST.Modalname>설정</ModalST.Modalname>
                <ModalST.Option onClick={WithdrawHandler}>회원탈퇴</ModalST.Option>
                <ModalST.Option onClick={LogoutHandler}>로그아웃</ModalST.Option>
                <ModalST.Cancel onClick={CloseSettModalHandler}>취소</ModalST.Cancel>
            </ModalST.ModalBox>
        </ModalST.Overlay>
    )
}