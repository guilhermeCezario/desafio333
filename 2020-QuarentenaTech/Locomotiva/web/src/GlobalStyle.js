import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');
  *{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Montserrat';
    background: rgb(30,22,78);
    background: linear-gradient(125deg, rgba(30,22,78,1) 0%, rgba(58,51,119,1) 100%);
    background-repeat: no-repeat;
    height: 100%;
    color: white;
  }
  input, button{
    font-family: 'Montserrat';
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #332C6D;
    border-radius: 0px;
  }
 
  ::-webkit-scrollbar-thumb {
    background: #92AEC6; 
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ad78f7; 
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1600px;
`;

export default GlobalStyle;