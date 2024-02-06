import styled from 'styled-components';

export const ProfileZone = styled.div`
  position: relative;
  width: 100%;
  height: 180px;

  display: flex;
  align-items: flex-end;
`;

export const EditProfileZone = styled.div`
  padding-top: 70px;
  padding-bottom: 28px;
`;

export const EditSetting = styled.img`
  position: relative;
  float: right;

  width: 30px;
  height: 30px;
`;

export const ProfilePic = styled.div`
  width: 70px;
  height: 70px;

  margin-left: 16px;
  margin-bottom: 24px;
  
  border-radius: 40px;
  background-color: lightgray;
`;

export const ProfilePicEdit = styled.div`
  width: 80px;
  height: 80px;

  margin: auto;
  margin-bottom: 12px;

  border-radius: 40px;
  background-color: lightgray;
`;

export const PicRight = styled.div`
  width: fit-content;
  height: 70px;

  margin-left: 12px;
  margin-bottom: 24px;
`;

export const NickText = styled.div`
  color: var(--grey-dark);
  font-size: var(--font-large);
  font-weight: var(--weight-semi-bold);

  margin-bottom: 12px;
`;

export const EditBtn = styled.div`
  width: fit-content;
  height: 28px;
  padding: 10px;
  margin: auto;
  
  border-radius: 14px;
  background-color: var(--blue-blur-light);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  color: var(--blue-normal);
  font-size: var(--font-micro);
  font-weight: var(--weight-semi-bold);
`;

export const BtnZone = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  margin-bottom: 24px;
`;

export const ProfileBtn = styled.div`
  position: relative;
  width: 95%;
  height: 77px;
  margin: auto;
  margin-bottom: 12px;
  padding: 28px;
  gap: 20px;

  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(187, 187, 187, 0.50);

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--grey-dark);
  font-size: var(--font-regular);
  white-space: nowrap;
`;

export const DetailBtn = styled.div`
  position: relative;
  width: 100%;
  height: 45px;

  text-align: center;

  color: var(--grey-dark);
  font-size: var(--font-small);
`;

export const NumberText = styled.div`
  margin-top: 10px;
  color: var(--yellow-money);
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
`;

export const Line = styled.hr`
  border-top: 4px solid var(--grey-blur-light);
  border-radius: 12px;

  width: 95%;
  margin: auto;
`;

export const HelpZone = styled.div`
  position: relative;
  width: 95%;
  height: 65px;
  margin: auto;
  margin-top: 24px;

  display: flex;
  justify-content: space-between;

  color: var(--grey-dark);
  font-size: var(--font-small);
`;

export const HelpBtn = styled.div`
  position: relative;
  width: 47%;
  height: 100%;
  padding: 20px;

  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(187, 187, 187, 0.50);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoText = styled.div`
  color: var(--grey-dark);
  font-size: var(--font-regular);
`;

export const NickEdit = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NickInput = styled.input`
  position: relative;
  width: 75%;
  height: 52px;
  margin-top: 16px;
  margin-bottom: 16px;
  
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--grey-dark);
  padding-left: 16px;

  border-radius: 12px;
  background-color: var(--grey-blur-light);
`;

export const KaKaoBtn = styled.div`
  width: 100%;
  height: 56px;
  margin-bottom: 12px;

  background-color: #FEE500;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QnaTitleZone = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  padding: 8px;

  border-bottom: 1px solid var(--grey-blur-light);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const QnaImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 20px;
  background-color: var(--grey-light);
`;

export const QnaTitle = styled.div`
  position: absolute;
  left: 64px;
  color: var(--grey-dark);
  font-size: var(--font-regular);
`;

export const AnswerZone = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 8px;
  padding: 12px;

  border-radius: 12px;

  background-color: var(--grey-blur-light);
`;