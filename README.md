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

```javascript
import {Formik, Form} from "formik";
import {toFormikValidationScheme} from "zod-formik-adapter";
import {schema} from "./schema";

<Formik
  validationSchema={toFormikValidationScheme(schema)}
  initialValues={{name: "", email: "", password: ""}}
  onSubmit={(values) => {
    console.log(values);
  }}
>
  <Form>
    <input type="text" name="name"/>
    <input type="email" name="email"/>
    <input type="password" name="password"/>
    <button type="submit">Submit</button>
  </Form>
</Formik>;
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
