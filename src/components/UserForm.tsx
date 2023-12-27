import { Form, FormValues, FormSubmit, SubmitHandler } from "./Form";
import { z } from "zod";
import { useState } from "react";

const userFormValidationSchema = z.object({
  firstName: z.string({
    required_error: "First name is required",
  }),
  lastName: z.string({
    required_error: "Last name is required",
  }),
});

type UserFormValidationSchemaType = typeof userFormValidationSchema;

function UserForm() {
  const [outputValues, setOutputValues] =
    useState<FormValues<UserFormValidationSchemaType>>();

  const handleSubmit: SubmitHandler<UserFormValidationSchemaType> = (
    values,
    { resetForm }
  ) => {
    setOutputValues(values);
    resetForm();
  };

  return (
    <section>
      <Form
        validationSchema={userFormValidationSchema}
        onSubmit={handleSubmit}
        initialValues={{
          firstName: "",
          lastName: "",
        }}
      >
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          autoComplete="given-name"
          type="text"
          required
        />
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          name="lastName"
          autoComplete="family-name"
          type="text"
          required
        />
        <FormSubmit />
      </Form>
      {outputValues && (
        <output>
          <h3>You've submitted the following data:</h3>
          <ul>
            {Object.entries(outputValues).map(([key, value]) => (
              <li key={key}>
                <b>{key}:</b> {value}
              </li>
            ))}
          </ul>
        </output>
      )}
    </section>
  );
}

export default UserForm;
