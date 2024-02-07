import styled from 'styled-components';
import Ellipse from '../../components/imgs/home/ellipse.png'

export const MainBg = styled.div`
  position: absolute;

  background-image: url(${Ellipse});
  background-position: center;
  background-size: 1500px 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100%;
  min-height: 667px;
  top: 0;
  overflow: hidden;
  object-fit: contain;

  display: flex;
  justify-content: center;
`;

export const ContentZone = styled.div`
  position: relative;
  max-width: 764px;
  width: 100%;
  height: 70%;
  top: 100px;
`;

export const CharacterZone = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: 375px;
  height: 50%;
  min-height: 250px;
  margin: auto;
  justify-content: end;
`;

export const GuideZone = styled.div`
  position: absolute;
  left: 10%;
  margin-top: 100px;

  z-index: 900;
  color: var(--white-default);
`;

export const GuideText = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  line-height: 30px;

  font-size: var(--font-medium);
  font-weight: var(--weight-regular);
`;

export const NickText = styled.div`
  font-size: 30px;
  font-weight: var(--weight-semi-bold);
`;

export const NumberZone = styled.div`
  font-size: var(--font-small);
  font-weight: var(--weight-thin);
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const NumberText = styled.div`
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
`;

export const PointText = styled.div`
  font-size: 28px;
  font-weight: var(--weight-semi-bold);
  color: var(--yellow-money);

  display: flex;
  align-items: center;
`;

export const Logo2 = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 8px;
`;

export const GuideButton = styled.div`
  position: relative;

  width: 163px;
  height: 33px;
  margin-top: 16px;

  border-radius: 16px;
  background: var(--blue-light);

  color: var(--blue-normal);
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  text-align: center;
  padding: 6px;

  cursor: pointer;
`;

export const Character = styled.img`
  position: relative;
  width: fit-content;
  height: 100%;
  margin-right: 8px;
  object-fit: cover;
`;

export const OptionBox = styled.div`
  position: relative;
  width: 100%;
  height: 45%;

  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Option1 = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  left: 15%;
  margin-bottom: 20px;

  border-radius: 20px 0 0 20px;
  background: var(--blue-blur-light);
  box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.70);

  color: var(--blue-normal);
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);

  text-align: center;
  display : flex;
  justify-content : center;
  align-items : center;
`;

export const Option2 = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  right: 15%;

  border-radius: 0 20px 20px 0;
  background: var(--blue-blur-light);
  box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.70);

  color: var(--blue-normal);
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);

  text-align: center;
  display : flex;
  justify-content : center;
  align-items : center;
`;