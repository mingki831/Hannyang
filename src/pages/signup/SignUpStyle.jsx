import styled from 'styled-components';

export const ContentZone = styled.div`
  position: relative;
  overflow: scroll;

  width: calc(100% - 40px);
  height: calc(100vh - 100px);
  margin-top: 100px;
`;

export const SuccessZone = styled.div`
  position: relative;
  text-align: center;

  width: calc(100% - 40px);
  height: calc(100vh - 100px);
  margin-top: 100px;
  padding-top: 20%;
`;

export const SignupGuide = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 10%;
  margin-bottom: 5px;

  color: var(--grey-dark);
  font-size: var(--font-large);
  font-weight: var(--weight-thin);
`;

export const LogoText = styled.div`
  margin-right: 8px;
  color: var(--blue-normal);
  font-size: var(--font-huge);
  font-weight: var(--weight-semi-bold);
`;

export const NotLogoText = styled.div`
  color: var(--grey-dark);
  font-size: var(--font-large);
  font-weight: var(--weight-thin);

  margin-bottom: 32px;
`;

export const SuccessText = styled.div`
  color: var(--grey-dark);
  font-size: var(--font-medium);
  font-weight: var(--weight-thin);

  margin-top: 8px;
`;

export const InputBox = styled.input`
  position: relative;
  width: 100%;
  height: 52px;
  margin-top: 16px;
  
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--grey-dark);
  padding-left: 16px;

  border-radius: 12px;
  background-color: var(--grey-blur-light);

  display: flex;
  align-items: center;
`;

export const CheckText = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  color: var(--green-success);
  font-size: var(--font-micro);
  font-weight: var(--weight-regular);
  white-space: nowrap;
`;

export const CautionText = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  color: var(--red-caution);
  font-size: var(--font-micro);
  font-weight: var(--weight-regular);
`;

export const SubmitBtn = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 20px;
  visibility: ${(props) => (props.allPass === true ? 'visible' : 'hidden')};

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  color: var(--white-default);

  border-radius: 12px;
  background-color: var(--blue-normal);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SuccessBtn = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 20px;

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  color: var(--white-default);

  border-radius: 12px;
  background-color: var(--blue-normal);

  display: flex;
  align-items: center;
  justify-content: center;
`;