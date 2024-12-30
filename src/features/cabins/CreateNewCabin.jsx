import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Textarea from "../../ui/TextArea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";

function CreateNewCabin() {
  const { handleSubmit, register, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => createCabin(newCabin),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });

      toast.success("Cabin added successfully");
      reset(); //NOTE: reset function of the form hook
    },

    onError: (err) => toast.error(err.message),
  });

  function onValid(data) {
    //NOTE: onValid get access to data which is automatically passed by handleSubmit function of useForm hook
    mutate({ ...data, image: data.image[0] }); //NOTE: for image we only want path but in uploading it we are getting array like Filelist so we have to modify it
  }

  function onInValid(error) {
    console.log(error);
  }

  return (
    <Form onSubmit={handleSubmit(onValid, onInValid)}>
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          id="name"
          type="text"
          name="name"
          {...register("name", {
            required: "Please provide a name for the cabin",
          })}
        />
      </FormRow>
      <FormRow
        label="Max Capacity for Cabin"
        error={errors?.maxCapacity?.message}
      >
        <Input
          id="capacity"
          type="number"
          name="maxCapacity"
          {...register("maxCapacity", {
            required: "Please select max capacity for the cabin",
            min: {
              value: 1,
              message: "The minimum value should be 1",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Regular Price for Cabin"
        error={errors?.regularPrice?.message}
      >
        <Input
          id="price"
          type="number"
          name="regularPrice"
          {...register("regularPrice", {
            required: "Please fill out the regular price for the cabin",
            min: {
              value: 1,
              message: "The minimum value should be 1",
            },
          })}
        />
      </FormRow>
      <FormRow label="discount" error={errors?.discount?.message}>
        <Input
          id="discount"
          type="number"
          name="discount"
          defaultValue={0}
          {...register("discount", {
            required: "Please provide a discount value if available",
            validate: (value) => {
              //NOTE:: It will return true or udefined if the validation succeeds or false or a string if validation fails
              return (
                Number(value) <= getValues().regularPrice ||
                "The value should be less than regular price"
              );
            },
          })}
        />
      </FormRow>
      <FormRow label="description" error={errors?.description?.message}>
        <Textarea
          id="description"
          name="description"
          {...register("description", {
            required: "Please enter a small description for the cabin",
          })}
        />
      </FormRow>
      <FormRow label="Choose Image for Cabin" error={errors?.image?.message}>
        <FileInput
          id="file-input"
          accept="image/*"
          name="image"
          {...register("image", {
            required: "Please Select an Image for Cabin",
          })}
        />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add Cabin</Button>
      </FormRow>
    </Form>
  );
}
export default CreateNewCabin;
