import styled from 'styled-components';

export const MainBg = styled.div`
  position: absolute;
  align-items: center;

  background-color: var(--blue-normal);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const ContentZone = styled.div`
  position: relative;

  width: calc(100% - 48px);
  height: calc(100% - 100px);
  margin-top: 100px;
`;

export const LogoZone = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;

  color: var(--white-default);
  font-size: var(--font-huge);
  font-weight: var(--weight-semi-bold);
`;

export const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 15%;
`;

export const InputZone = styled.div`
  margin-top: 12%;
  margin-bottom: 12%;
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
  background-color: var(--white-default);

  display: flex;
  align-items: center;
`;

export const CautionText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  color: var(--red-caution);
  font-size: var(--font-small);
  font-weight: var(--weight-regular);
`;

export const LoginBtn = styled.div`
  width: 80%;
  height: 52px;
  margin: auto;

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  color: var(--blue-normal);

  border-radius: 30px;
  background-color: var(--blue-light);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpBtn = styled.div`
  width: 80%;
  height: 52px;
  margin: auto;
  margin-top: 12px;

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  color: var(--white-default);

  border-radius: 30px;
  border: 3px solid var(--white-default);

  display: flex;
  align-items: center;
  justify-content: center;
`;