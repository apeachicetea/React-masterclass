import styled from "styled-components";


function App() {
  
  const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
  `;

  const H1 = styled.div`
    color: ${props => props.theme.textColor}
  `;

  return (
    <Container>
      <H1>Hello</H1>
    </Container>
  );
}

export default App;
