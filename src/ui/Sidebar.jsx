import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 4.8rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / 3;
`;

function Sidebar() {
  return (
    <StyledSideBar>
      <MainNav />
    </StyledSideBar>
  );
}
export default Sidebar;
