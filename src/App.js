import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 1000px;
  height: 1000px;
  justify-content: center;
  align-items: center;
`;

//styled-componets와 상관없고 그냥 CSS문법이다.
const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 50px;
    &:active {
      opacity: 0;
    }
`;


const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1.5s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  //Box span{}과 같다.
  ${Emoji} { 
    //span:hover{}와 같다.
    &:hover {
      font-size: 98px
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😃</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
