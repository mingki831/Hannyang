import React, { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import * as ResrchST from './ResrchStyle';
import * as SignST from '../signup/SignUpStyle';

import Layout from '../../components/layout/Layout';
import Progress2 from '../../components/imgs/researcher/Progress2.png';
import CancelModal from './CancelModal';
import SVG from '../../components/imgs/SVG';
import BlankModal from '../../components/modal/BlankModal';

import { PageContext } from '../../components/context/PageContext';
import { useInput } from '../../hooks/useInput';
import { __postStep2, SET_SURVEY } from '../../redux/modules/SurveySlice';

export default function Step2() {

    const { setPage } = useContext(PageContext);
    const navigate = useNavigate();
    const bottomRef = useRef();
    const dispatch = useDispatch();

    const [isModal, setIsModal] = useState(false);
    const [isBlank, setIsBlank] = useState(false);
    const [modalMsg, setModalMsg] = useState('입력사항을 확인해주세요.');
    const [pemOpen, setPemOpen] = useState(false);
    const [pomOpen, setPomOpen] = useState(false);

    const surveyId = useSelector((state) => state.survey.id);
    const [people, setPeople] = useState(10);
    const [point, setPoint] = useState(100);
    const [finalPrice, setFinalPrice] = useState(0);

    const [ { startDate, endDate },
            onInputChange,
            resetInput
          ] = useInput(
            {   startDate: "",
                endDate: "",
            });

    //인원 드롭다운
    const PemHandler = () => {
        if(pemOpen === false) {
            setPemOpen(true);
        } else {
            setPemOpen(false);
        } 
    }

    //포인트 드롭다운
    const PomHandler = () => {
        if(pomOpen === false) {
            setPomOpen(true);
        } else {
            setPomOpen(false);
        } 
    }

    //맨 밑으로 스크롤
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior : 'smooth'});
    }

    const nextHandler = async() => {
        if ( (startDate === "") || (endDate === "") ) {
            setModalMsg('입력사항을 확인해주세요.');
            setIsBlank(true);
        } else {
            __postStep2({surveyId, people, point, startDate, endDate, finalPrice})
            .then(res => {
                if (parseInt(Number(res.status) / 100) === 2) {
                    dispatch(SET_SURVEY(res.data));
                    navigate('/step3');
                } else {
                    //예외처리
                    resetInput();
                }
            }).catch((error) => {
                //예외처리
                resetInput();
            })
        }
    }

    useEffect(() => {
        setPage('step2');
    }, []);

    useEffect(() => {
        if ( (startDate === "") || (endDate === "") ) {
            setFinalPrice(0);
        } else {
            //맨 아래로 스크롤
            scrollToBottom(); 
            //일 수 계산
            const getDateDiff = () => {
                const date1 = new Date(startDate);
                const date2 = new Date(endDate);
                const diffDate = date1.getTime() - date2.getTime();
                return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
            }
            var decimal = getDateDiff(startDate, endDate) / 7;

            //주 수 계산
            if (decimal <= 1) { var week = 1; }
            else if (decimal <= 2) { week = 2; }
            else if (decimal <= 3) { week = 3; }
            else if (decimal <= 4) { week = 4; }
            else if (decimal <= 5) { week = 5; }
            else if (decimal <= 6) { week = 6; }
            else if (decimal <= 7) { week = 7; }
            else if (decimal <= 8) { week = 8; }
            else if (decimal <= 9) { week = 9; }
            else if (decimal <= 10) { week = 10; }
            else if (decimal <= 11) { week = 11; }
            else if (decimal <= 12) { week = 12; }
            else if (decimal <= 13) { week = 13; }
            else if (decimal <= 14) { week = 14; }
            else if (decimal <= 15) { week = 15; }
            else if (decimal <= 16) { week = 16; }
            else { week = NaN; }

            //금액 산정
            if (week <= 2) {
                var price = (Number(people) * Number(point)) + 1000;
            } else {
                price = (Number(people) * Number(point)) + 1000 + (week - 2) * 1000;
            }

            //최종 금액 오류 방지
            if (isNaN(price)) {
                setFinalPrice(0);
            } else {
                setFinalPrice(price);
            }
        }
    }, [people, point, startDate, endDate])

    return (
        <>
        <Layout>
        {/* 모달 */}
        {isModal === true ?
        <CancelModal setIsModal={setIsModal}/> : <></>}
        {/* 빈칸경고모달 */}
        {isBlank === true ?
        <BlankModal setIsBlank={setIsBlank} modalMsg={modalMsg}/> : <></>}
            <SignST.ContentZone>
                <ResrchST.ProgressBar src={Progress2}/>
                <SignST.SignupGuide>
                    <SignST.LogoText>게시 조건</SignST.LogoText>을 설정해주세요.
                </SignST.SignupGuide>
                <div style={{ width: '100%', height: '24px'}}/>
                <ResrchST.FormBox>
                    <ResrchST.FormTitle>
                        희망 응답자 수
                        <ResrchST.FormDetail>
                            몇 명의 참여자가 필요하신가요?
                        </ResrchST.FormDetail>
                    </ResrchST.FormTitle>
                    <ResrchST.DropDown onClick={PemHandler}>
                        <ResrchST.LooksLikeInput>
                            {people} 명
                            <SVG
                                name='Open'
                                size='10'
                                color='var(--grey-normal)'/>
                        </ResrchST.LooksLikeInput>
                        {pemOpen === true ?
                            <ResrchST.Ul>
                                <ResrchST.Li onClick={()=>{setPeople(10)}}> 10 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(15)}}> 15 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(20)}}> 20 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(25)}}> 25 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(30)}}> 30 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(35)}}> 35 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(40)}}> 40 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(45)}}> 45 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(50)}}> 50 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(55)}}> 55 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(60)}}> 60 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(65)}}> 65 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(70)}}> 70 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(75)}}> 75 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(80)}}> 80 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(85)}}> 85 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(90)}}> 90 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(95)}}> 95 명 </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPeople(100)}}> 100 명 </ResrchST.Li>
                            </ResrchST.Ul> : ''
                        }
                    </ResrchST.DropDown>
                </ResrchST.FormBox>

                <ResrchST.FormBox>
                    <ResrchST.FormTitle>
                        1인당 부여 포인트
                        <ResrchST.FormDetail>
                            참여자 1명에게 몇 포인트를 드릴까요?
                        </ResrchST.FormDetail>
                    </ResrchST.FormTitle>
                    <ResrchST.DropDown onClick={PomHandler}>
                        <ResrchST.LooksLikeInput onClick={()=>{setPomOpen(true);}}>
                            {point} P
                            <SVG
                                name='Open'
                                size='10'
                                color='var(--grey-normal)'/>
                        </ResrchST.LooksLikeInput>
                        {pomOpen === true ?
                            <ResrchST.Ul>
                                <ResrchST.Li onClick={()=>{setPoint(100)}}> 100 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(150)}}> 150 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(200)}}> 200 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(250)}}> 250 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(300)}}> 300 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(350)}}> 350 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(400)}}> 400 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(450)}}> 450 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(500)}}> 500 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(550)}}> 550 P </ResrchST.Li>
                                <ResrchST.Li onClick={()=>{setPoint(600)}}> 600 P </ResrchST.Li>
                            </ResrchST.Ul> : ''
                        }
                    </ResrchST.DropDown>
                </ResrchST.FormBox>

                <ResrchST.FormBox>
                    <ResrchST.FormTitle>
                        설문 시작 날짜
                        <ResrchST.FormDetailRed>
                            검수 후 업로드까지 <br/>
                            최소 12시간이 소요됩니다.
                        </ResrchST.FormDetailRed>
                    </ResrchST.FormTitle>
                    <ResrchST.DateInput
                        name="startDate"
                        type="date"
                        min="2024-03-01"
                        onChange = {onInputChange}
                        value={startDate}/>
                </ResrchST.FormBox>

                <ResrchST.FormBox>
                    <ResrchST.FormTitle>
                        설문 마감 날짜
                        <ResrchST.FormDetail>
                            마감 시간은 23:59 입니다.
                        </ResrchST.FormDetail>
                    </ResrchST.FormTitle>
                    <ResrchST.DateInput
                        name="endDate"
                        type="date"
                        min="2024-03-01"
                        onChange = {onInputChange}
                        value={endDate}/>
                </ResrchST.FormBox>

                <ResrchST.CalculationBtn ref={bottomRef}>
                    <ResrchST.FormTitle>
                        결제 금액
                        <ResrchST.FormDetail>
                            설정값을 바꿔가며 <br/>
                            금액을 조정해보세요 !
                        </ResrchST.FormDetail>
                    </ResrchST.FormTitle>
                    {finalPrice === (0 || NaN) ?
                        <ResrchST.PriceText>
                            원
                        </ResrchST.PriceText> :
                        <ResrchST.PriceText>
                            {finalPrice} 원
                        </ResrchST.PriceText>
                    }
                </ResrchST.CalculationBtn>

                <ResrchST.RelaButtonZone>
                    <ResrchST.CancelBtn onClick={()=>{setIsModal(true)}}>
                        취소하기
                    </ResrchST.CancelBtn>
                    <ResrchST.NextBtn onClick={nextHandler}>
                        다음 단계
                    </ResrchST.NextBtn>
                </ResrchST.RelaButtonZone>
            </SignST.ContentZone>
        </Layout>
        </>
    );
}