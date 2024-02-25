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
  width: 200px;
  display: flex;
  margin: auto;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 30px;
`;

export const FormIcon = styled.img`
  width: 45px;
  display: flex;
  margin: auto;
  align-items: center;
  margin-top: 25%;
  margin-bottom: 8%;
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

export const RelaButtonZone = styled.div`
  position: relative;
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

export const DateInput = styled.input`
  width: 150px;
  height: 52px;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: var(--font-small);
  font-weight: var(--weight-regular);
  color: var(--grey-dark);

  border-radius: 12px;
  background-color: var(--grey-blur-light);
`;

export const LooksLikeInput = styled.div`
  width: 90px;
  height: 52px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  color: var(--grey-dark);

  border-radius: 12px;
  background-color: var(--grey-blur-light);
`;

export const DropDown = styled.div`
  width: 90px;
`;

export const Ul = styled.div`
  position: absolute;
  width: 90px;
  height: 130px;

  overflow: scroll;
  margin-top: 4px;

  background-color: var(--grey-blur-light);
  color: var(--grey-normal);
  font-weight: var(--weight-regular);
  font-size: var(--font-small);
  border-radius: 12px;

  cursor: pointer;
`;

export const Li = styled.div`
  height: 48px;
  padding: 20px;

  display: flex;
  justify-content: center;
`;

export const OptionName = styled.div`
  color: var(--blue-normal);
  font-size: 18px;
  font-weight: var(--weight-bold);

  margin-bottom: 12px;
`;

export const FormBox = styled.div`
  width: 95%;
  height: fit-content;
  margin: auto;
  padding: 24px 18px;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: var(--blue-normal);
  font-weight: var(--weight-semi-bold);

  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(187, 187, 187, 0.50);
`;

export const FormTitle = styled.div`
  color: var(--blue-normal);
  font-weight: var(--weight-semi-bold);
`;

export const FormDetail = styled.div`
  margin-top: 4px;
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
`;

export const FormDetailRed = styled.div`
  margin-top: 4px;
  font-weight: var(--weight-regular);
  font-size: var(--font-micro);
  color: var(--red-caution);
`;

export const CalculationBtn = styled.div`
  width: 95%;
  height: fit-content;
  padding: 20px;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  background-color: var(--blue-blur-light);
  color: var(--blue-normal);
`;

export const PriceText = styled.div`
  font-size: var(--font-large);
  font-weight: var(--weight-bold);
  white-space: nowrap;
`;

export const FlexBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const FinalPrice = styled.div`
  width: fit-content;
  height: 88px;
  padding: 16px;

  text-align: center;

  border-radius: 12px;
  background-color: var(--blue-blur-light);
  color: var(--blue-normal);
`;

export const AccountZone = styled.div`
  width: 60%;
  height: 88px;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  background-color: var(--blue-light);
  color: var(--blue-normal);
`;

export const AccountText = styled.div`
  font-weight: var(--weight-semi-bold);
  font-size: var(--font-small);
  text-align: center;
  white-space: nowrap;
`;

export const CopyIcon = styled.img`
  position: relative;
  width: 70px;
  object-fit: contain;
`;

export const AccountFormBox = styled.div`
  width: 96%;
  height: fit-content;
  margin: auto;
  padding: 28px;
  margin-top: 28px;

  align-items: center;
  justify-content: space-between;

  color: var(--blue-normal);
  font-weight: var(--weight-semi-bold);

  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(187, 187, 187, 0.50);
`;