import { useState } from "react";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import styled from "styled-components";
import Textarea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
function CreateNewCabin() {
  return (
    <Form>
      <StyledFormRow>
        <Label for="name">Cabin Name</Label>
        <Input id="name" type="text" name="name" />
      </StyledFormRow>
      <StyledFormRow>
        <Label for="capacity">Max Capacity</Label>
        <Input id="capacity" type="number" name="capacity" />
      </StyledFormRow>
      <StyledFormRow>
        <Label for="price">Regular Price</Label>
        <Input id="price" type="number" name="price" />
      </StyledFormRow>
      <StyledFormRow>
        <Label for="discount">Discount</Label>
        <Input id="discount" type="text" name="discount" />
      </StyledFormRow>
      <StyledFormRow>
        <Label for="description">Description for Cabin</Label>
        <Textarea id="description" name="description" />
      </StyledFormRow>
      <StyledFormRow>
        <Label for="file-input">Image for Cabin</Label>
        <FileInput id="file-input" name="imageInput" />
      </StyledFormRow>
      <StyledFormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Edit Cabin</Button>
      </StyledFormRow>
    </Form>
  );
}
export default CreateNewCabin;
