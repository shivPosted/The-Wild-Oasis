import styled, { css } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

//NOTE: using StyledApp to apply styles to main element of App component
const StyledApp = styled.main`
  padding: 2rem 4rem;
  max-width: 60%;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row alignment="vertical">
          <Row>
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check In and Check Out</Heading>
              <Button onClick={() => console.log("check in")}>
                Check In
              </Button>{" "}
              {/* by default the type is primary and size is small for button */}
              <Button
                size="small"
                variation="secondary"
                onClick={() => console.log("check out")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <form>
            <Heading as="h3">Form</Heading>
            <Input type="text" placeholder="Number of Guests" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}
export default App;
