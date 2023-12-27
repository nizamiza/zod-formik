import { ButtonHTMLAttributes } from "react";
import useFormContext from "./useFormContext.ts";

export type FormSubmitProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
>;

function FormSubmit({ children = "Submit", ...props }: FormSubmitProps) {
  const { submitForm } = useFormContext();

  return (
    <button type="submit" onClick={submitForm} {...props}>
      {children}
    </button>
  );
}

export default FormSubmit;
