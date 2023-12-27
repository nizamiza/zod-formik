import { ZodSchema } from "zod";
import { FormikProvider } from "formik";
import { FormProps } from "./types";
import useForm from "./useForm";

function Form<Schema extends ZodSchema>({
  children,
  ...props
}: FormProps<Schema>) {
  const formik = useForm(props);

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
        {typeof children === "function" ? children(formik) : children}
      </form>
    </FormikProvider>
  );
}

export default Form;
