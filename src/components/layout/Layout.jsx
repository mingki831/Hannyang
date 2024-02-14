import * as LayoutST from './LayoutStyle'
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContext } from '../../components/context/PageContext'

export default function Layout(props) {

    const navigate = useNavigate();
    const { page } = useContext(PageContext);

    return (
        <>
        {/* <LayoutST.BgImage path={BgImage} /> */}
        <LayoutST.Content>
            <LayoutST.Header>
                {/* 뒤로가기 */}
                { (page === 'MainPage') ||
                  (page === 'SignUpSuccess') ? (
                    <></>
                ) : (
                <LayoutST.BackBtn onClick={() => {navigate(-1)}}>
                    <svg
                        width="14"
                        height="23"
                        viewBox="0 0 14 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.35303 12.7688C0.718261 12.1341 0.718261 11.1032 1.35303 10.4685L11.103 0.718456C11.7378 0.0836902 12.7687 0.0836901 13.4034 0.718456C14.0382 1.35322 14.0382 2.38408 13.4034 3.01885L4.80107 11.6212L13.3983 20.2235C14.0331 20.8583 14.0331 21.8892 13.3983 22.5239C12.7636 23.1587 11.7327 23.1587 11.0979 22.5239L1.34795 12.7739L1.35303 12.7688Z" fill="#898C8E"/>
                    </svg>
                </LayoutST.BackBtn>
                )}
                
                {/* 기프티콘샵, 마이페이지 */}
                <LayoutST.GiftMy>
                    {page === 'MainPage' ? ( <>
                    <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            position: 'absolute',
                            bottom: '12px',
                            marginRight: '66px',
                            cursor: 'pointer',
                            }}
                        onClick={() => {navigate('/shop')}}>
                        <path d="M23.45 4.66289L20.9225 0.588477C20.6976 0.224609 20.2962 0 19.8683 0H4.12996C3.70209 0 3.30069 0.224609 3.07573 0.588477L0.543831 4.66289C-0.761818 6.76523 0.393858 9.68965 2.83313 10.0266C3.00957 10.049 3.19042 10.0625 3.36686 10.0625C4.51812 10.0625 5.54147 9.55039 6.24281 8.75977C6.94416 9.55039 7.9675 10.0625 9.11877 10.0625C10.27 10.0625 11.2934 9.55039 11.9947 8.75977C12.6961 9.55039 13.7194 10.0625 14.8707 10.0625C16.0264 10.0625 17.0453 9.55039 17.7466 8.75977C18.4524 9.55039 19.4713 10.0625 20.6226 10.0625C20.8034 10.0625 20.9799 10.049 21.1563 10.0266C23.6044 9.69414 24.7645 6.76973 23.4544 4.66289H23.45ZM21.3372 11.4506H21.3328C21.099 11.482 20.8608 11.5 20.6182 11.5C20.0712 11.5 19.5463 11.4146 19.0567 11.2619V17.25H4.94158V11.2574C4.44755 11.4146 3.91823 11.5 3.37127 11.5C3.12866 11.5 2.88606 11.482 2.65228 11.4506H2.64787C2.46702 11.4236 2.29058 11.3922 2.11855 11.3473V17.25V20.125C2.11855 21.7107 3.3845 23 4.94158 23H19.0567C20.6138 23 21.8797 21.7107 21.8797 20.125V17.25V11.3473C21.7033 11.3922 21.5268 11.4281 21.3372 11.4506Z" fill="white"/>
                    </svg>
                    <svg
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            position: 'absolute',
                            bottom: '12px',
                            marginRight: '24px',
                            cursor: 'pointer',
                            }}
                        onClick={() => {navigate('/mypage')}}>
                        <path d="M11 11.5C12.6671 11.5 14.2659 10.8942 15.4447 9.81586C16.6235 8.73753 17.2857 7.27499 17.2857 5.75C17.2857 4.22501 16.6235 2.76247 15.4447 1.68414C14.2659 0.605802 12.6671 0 11 0C9.33292 0 7.73413 0.605802 6.55533 1.68414C5.37653 2.76247 4.71429 4.22501 4.71429 5.75C4.71429 7.27499 5.37653 8.73753 6.55533 9.81586C7.73413 10.8942 9.33292 11.5 11 11.5ZM8.7558 13.6562C3.91875 13.6562 0 17.241 0 21.6658C0 22.4025 0.653125 23 1.45848 23H20.5415C21.3469 23 22 22.4025 22 21.6658C22 17.241 18.0813 13.6562 13.2442 13.6562H8.7558Z" fill="white"/>
                    </svg> </> ) : (<></>)}
                </LayoutST.GiftMy>
            </LayoutST.Header>
            {props.children}
        </LayoutST.Content>
        </>
    )
}