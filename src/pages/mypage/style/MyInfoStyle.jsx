import styled from 'styled-components';

export const MainZone = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  padding: 40px 0px 0px 70px;
`;

export const MainText = styled.div`
  width: fit-content;
  display: flex;
  align-items: flex-end;

  color: var(--grey-dark);
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
`;

export const NickText = styled.div`
  color: var(--yellow-money);
  font-size: var(--font-large);
  font-weight: var(--weight-semi-bold);
`;

export const HistoryZone = styled.div`
  width: 100%;
  height: fit-content;
  padding: 12px;
`;

export const SelectZone = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Select = styled.div`
  width: 48%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => (props.focused === 'true' ? 'var(--yellow-money)' : '')};
  color: ${(props) => (props.focused === 'true' ? 'var(--grey-dark)' : 'var(--grey-normal)')};
  font-weight: var(--weight-semi-bold);
  font-size: var(--font-small);

  border-radius: 8px;
  border: ${(props) => (props.focused === 'true' ? '' : '1px solid var(--grey-light)')};
`;

export const DateText = styled.div`
  color: var(--grey-normal);
  font-size: var(--font-small);
  margin: 4px 0 4px 0;
`;

export const HistoryBox = styled.div`
  width: 100%;
  height: 48px;
  margin: 12px 0 12px 0;
  padding: 0 16px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(187, 187, 187, 0.50);
`;

export const HisCateText = styled.div`
  color: var(--grey-dark);
  font-size: var(--font-small);
  display: flex;
  align-items: center;
`;

export const HistoryText = styled.div`
  color: var(--grey-light);
  font-size: var(--font-micro);
  margin-left: 12px;
`;

export const LimitText = styled.div`
  color: var(--red-caution);
  font-size: var(--font-small);
`;

export const PlusPoint = styled.div`
  color: var(--grey-dark);
  font-weight: var(--weight-semi-bold);
  font-size: var(--font-medium);
`;

export const MinusPoint = styled.div`
  color: var(--yellow-money);
  font-weight: var(--weight-semi-bold);
  font-size: var(--font-medium);
`;