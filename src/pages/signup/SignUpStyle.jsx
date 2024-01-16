import styled from 'styled-components';

export const ContentZone = styled.div`
  position: relative;

  width: 100%;
  height: calc(100vh - 100px);
  top: 100px;

  /* background-color: #369e9e;
  border-radius: 30px; */
`;

export const SignupGuide = styled.div`
  position: relative;
  top: 60px;
  left: 32px;

  color: var(--grey-dark);
  font-size: var(--font-large);
  font-weight: var(--weight-regular);
  padding-top: 50px;
`;

export const InputBox = styled.div`
  position: relative;
  width: calc(100% - 48px);
  height: 52px;
  padding: 16px;
  top: 100px;
  margin-bottom: 30px;
  margin-left: 20px;
  
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-normal);

  border-radius: 12px;
  background-color: var(--grey-blur-light);
`;