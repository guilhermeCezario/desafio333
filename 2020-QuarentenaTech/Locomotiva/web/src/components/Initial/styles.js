import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

export const ContainerInitial = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  scroll-snap-type: x mandatory;
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 23px;
  text-align: center;
  width: 530px;
`;

export const TextGreen = styled.span`
  color: #00FF6B;
  font-weight: bold;
`;

export const Image = styled.img`
  
`;

export const Icon = styled(FaChevronDown)`
  color: #F8546B;
  font-size: 70px;
  position: absolute;
  bottom: 1vh;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;
`;