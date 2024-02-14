import styled from 'styled-components';

export const CateZone = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

export const CateItem = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-bottom: ${(props) => (props.focused === 'focused' ? '3px solid var(--blue-normal)' : '3px solid var(--grey-light)')};
  color: ${(props) => (props.focused === 'focused' ? 'var(--blue-normal)' : 'var(--grey-light)')};
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
`;

export const GifticonZone = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const GifticonBox = styled.div`
  width: 48%;
  height: fit-content;
  margin: 8px 0 8px 0;
  padding: 14px;

  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(187, 187, 187, 0.50);
`;

export const GifticonImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: auto;
  margin-bottom: 8px;

  background-color: lightblue;
`;

export const GiftCateText = styled.div`
  color: var(--grey-dark);
  font-size: var(--font-small);
`;

export const GifticonText = styled.div`
  color: var(--grey-dark);
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  margin: 4px 0 8px 0;
`;

export const ShopPrice = styled.div`
  width: fit-content;
  padding: 4px 10px 4px 10px;

  color: var(--blue-normal);
  font-size: var(--font-small);

  background-color: var(--yellow-money);
  border-radius: 20px;
`;