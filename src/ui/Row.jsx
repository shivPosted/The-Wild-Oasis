import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.alignment === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.alignment === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.2rem;
    `}
`;

Row.defaultProps = {
  alignment: "horizontal",
};
export default Row;
