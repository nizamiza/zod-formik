# Sample Setup for ZOD + Formik

Follow these steps to use ZOD and Formik in your project.

## Installation

Before starting, make sure to install the necessary dependencies:

```
npm install
```

## Usage

### Zod

Zod is a schema declaration and validation library. It's used to ensure data is
of the correct type and structure before it's processed.

```javascript
import {z} from "zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(10),
});
```

### Formik

Formik is an open source form library for React and React Native. It aims to
simplify the building and validation of forms.

```tsx
import {Form, FormValues, FormSubmit, SubmitHandler} from "./Form";
import {z} from "zod";
import {useState} from "react";

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
    {resetForm}
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
        <FormSubmit/>
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
```

This is a basic example of how to use Zod and Formik in your project. Remember
to replace the `initialValues` and `validationSchema` as per your requirements.

## Example

This project is an example on how to setup Formik with ZOD an achieve full type
safety. Follow the files in the repository to learn more.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

## Resources

* [Formik](https://formik.org/)
* [Zod](https://github.com/colinhacks/zod)

## License

[MIT](https://choosealicense.com/licenses/mit/)
