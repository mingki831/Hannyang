import styled from 'styled-components';

export const MainZone = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  padding: 52px;
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