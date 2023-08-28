import * as Yup from "yup";
import {local} from "@local"


export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, local.tooShort)
    .max(50, local.tooShort)
    .required(local.required),
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
    ),
  email: Yup.string().email(local.notValid).required(local.required),
});
