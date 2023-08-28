import * as Yup from "yup";
import { local } from "@local";

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, local.tooShort)
    .max(50, local.tooShort)
    .required(local.required),
  password: Yup.string()
    .min(2, local.tooShort)
    .max(50, local.tooShort)
    .required(local.required)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      local.password_validation_error
    )
});
