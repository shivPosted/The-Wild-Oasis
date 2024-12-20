import { useState } from "react";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import styled from "styled-components";
import Textarea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";

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
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormRow>
        <Label htmlFor="name">Cabin Name</Label>
        <Input id="name" type="text" name="name" {...register("name")} />
      </StyledFormRow>
      <StyledFormRow>
        <Label htmlFor="capacity">Max Capacity</Label>
        <Input
          id="capacity"
          type="number"
          name="capacity"
          {...register("capacity")}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Label htmlFor="price">Regular Price</Label>
        <Input id="price" type="number" name="price" {...register("price")} />
      </StyledFormRow>
      <StyledFormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          id="discount"
          type="text"
          name="discount"
          {...register("discount")}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Label htmlFor="description">Description for Cabin</Label>
        <Textarea
          id="description"
          name="description"
          {...register("description")}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Label htmlFor="file-input">Image for Cabin</Label>
        <FileInput
          id="file-input"
          name="imageInput"
          {...register("fileInput")}
        />
      </StyledFormRow>
      <StyledFormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Add Cabin</Button>
      </StyledFormRow>
    </Form>
  );
}
export default CreateNewCabin;
