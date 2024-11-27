import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border: 1px solid gray;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 1.6rem;
  background-color: var(--color-brand-500);
  box-shadow: var(--shadow-sm);
  color: var(--color-brand-50);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  &:hover {
    background-color: var(--color-brand-700);
  }
`;

export default Button;
