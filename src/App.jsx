import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1.2rem;
  background-color: yellow;
`;

const Button = styled.button`
  outline: none;
  border: 1px solid gray;
  font-size: 1.2rem;
  padding: 1rem 1.6rem;
  background-color: purple;
  color: white;
  border-radius: 7px;
  cursor: pointer;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid gray;
  padding: 1rem 2rem;
  border-radius: 7px;
  font-size: 2.4rem;
`;

//NOTE: using StyledApp to apply styles to main element of App component
const StyledApp = styled.main`
  padding: 2rem 4rem;
  max-width: 60%;
  margin: 0 auto;
  background-color: orange;
`;
function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => console.log("check in")}>Check In</Button>
      <Button onClick={() => console.log("check out")}>Check Out</Button>
      <Input type="text" />
    </StyledApp>
  );
}
export default App;
