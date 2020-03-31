import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa'

export const ContainerBackground = styled.footer`
  background-color: rgba(0, 0, 0, 0.1);
`;
export const ContainerFooter = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: white;
  font-weight: bold;
`;

export const Icon = styled(FaHeart)`
  color: #F8546B;
  font-size: 13px;
`;

export const TextGreen = styled.a`
  color: #00FF6B;
`;
