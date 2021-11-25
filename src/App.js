import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 1000px;
  height: 1000px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor}
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title> 
    </Wrapper>
  );
}

export default App;
