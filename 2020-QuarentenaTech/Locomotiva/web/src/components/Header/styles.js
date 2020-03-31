import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBackground = styled.header`
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  height: 10vh;
`;

export const LogoContainer = styled.div`
  width: 150px;
`;

export const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 25px;
`;

export const LinkContainer = styled.div`
  font-weight: 500;
  display: flex;
  a + a{
    margin-left: 10px;
  }
`;

export const LinkHeader = styled(Link)`
  display: block;
  margin: auto;
  padding: 1rem 1.25rem;
  font-size: 20px;
  text-decoration: none;
  color: white;
  position: relative;
  &::after {
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    bottom: 10px;
    right: 1.25rem;
    left: 1.25rem;
    background-color: ${props => props.inputColor && "#00FF6B"};
  }
  &:hover{
    &::after {
      content: '';
      display: block;
      height: 2px;
      position: absolute;
      bottom: 10px;
      right: 1.25rem;
      left: 1.25rem;
      background-color: #00FF6B;
      transition: 0.2s;
    }
  }
`;