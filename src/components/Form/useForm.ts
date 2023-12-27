import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ZodSchema } from "zod";
import { FormProps } from "./types";

function useForm<Schema extends ZodSchema>(
  props: Omit<FormProps<Schema>, "children">
) {
  return useFormik({
    ...props,
    validationSchema: toFormikValidationSchema(props.validationSchema),
  });
}

export default useForm;
