import styled, { css } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

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
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">The Wild Oasis</Heading>
        <Heading as="h3">The Wild Oasis</Heading>
        <Button onClick={() => console.log("check in")}>Check In</Button>
        <Button onClick={() => console.log("check out")}>Check Out</Button>
        <Input type="text" placeholder="Number of Guests" />
      </StyledApp>
    </>
  );
}
export default App;
