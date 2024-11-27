import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 1.2rem;
  background-color: yellow;
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
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => console.log("check in")}>Check In</Button>
        <Button onClick={() => console.log("check out")}>Check Out</Button>
        <Input type="text" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}
export default App;
