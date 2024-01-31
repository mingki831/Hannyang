import styled from 'styled-components';


export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: rgba(33, 33, 33, 0.3);
  z-index: 900;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 320px;
  height: fit-content;

  background: var(--white-default);
  border-radius: 16px;

  text-align: center;
  font-size: var(--font-small);
`;

export const Modalname = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--grey-normal);
`;

export const Option = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--grey-normal);
  font-weight: var(--weight-semi-bold);
  border-top: 1px solid var(--grey-blur-light);
`;

export const Cancel = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--red-caution);
  border-top: 1px solid var(--grey-blur-light);
`;