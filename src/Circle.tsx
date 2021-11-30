import styled from "styled-components";

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor }: CircleProps){
  console.log(bgColor);
  return (
    <Container bgColor={bgColor} />
  );
}

export default Circle;