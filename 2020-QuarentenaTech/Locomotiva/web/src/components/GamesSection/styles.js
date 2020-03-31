import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GamesContainer = styled.section`
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 40px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 23px;
  text-align: center;
  width: 550px;
`;

export const Image = styled.img`
  
`;

export const Button = styled(Link)`
  border: solid 2px #fff;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
  transition: 0.2s;
  &:hover{
    border: solid 2px #d4d4d4;
    color: #d4d4d4;
  }
`;

export const TextGreen = styled.span`
  color: #00FF6B;
`;