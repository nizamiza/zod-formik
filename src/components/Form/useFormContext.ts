import { useFormikContext } from "formik";
import { ZodSchema } from "zod";
import { FormValues } from "./types.ts";

function useFormContext<Schema extends ZodSchema>() {
  return useFormikContext<FormValues<Schema>>();
}

export default useFormContext;
