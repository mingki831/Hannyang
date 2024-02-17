import styled from 'styled-components';

export const Character = styled.div`
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: #bfffe2;
  border-radius: 100px;
`;

export const GuideBox = styled.div`
  width: 96%;
  height: fit-content;
  margin: auto;
  padding: 40px 28px 20px 28px;

  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(187, 187, 187, 0.50);

  font-size: var(--font-small);
  color: var(--grey-normal);
`;

export const GuideText = styled.div`
  color: var(--blue-normal);
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  margin-bottom: 20px;
`;

export const GuideImg1 = styled.div`
  width: 100%;
  height: 236px;
  margin-bottom: 32px;
  background-color: #bfffe2;
`;

export const GuideImg2 = styled.div`
  width: 100%;
  height: 112px;
  background-color: #bfffe2;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StartBtn = styled.div`
  position: sticky;
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

export const ProgressBar = styled.img`
  width: 220px;
  display: flex;
  margin: auto;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
`;

export const FormIcon = styled.img`
  width: 45px;
  display: flex;
  margin: auto;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const CheckText = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--blue-normal);
  font-size: var(--font-micro);
  font-weight: var(--weight-regular);
  white-space: nowrap;
`;

export const ButtonZone = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;

  display: flex;
  justify-content: space-between;
`;

export const CancelBtn = styled.div`
  width: 47%;
  height: 56px;
  border-radius: 12px;

  color: var(--grey-dark);
  background-color: var(--grey-light);
  font-weight: var(--weight-semi-bold);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextBtn = styled.div`
  width: 47%;
  height: 56px;
  border-radius: 12px;
  
  color: var(--white-default);
  background-color: var(--blue-normal);
  font-weight: var(--weight-semi-bold);

  display: flex;
  align-items: center;
  justify-content: center;
`;