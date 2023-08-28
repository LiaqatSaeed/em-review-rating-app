import { errorStyle, formGroupStyle, inputStyle, labelRecipe } from "@styles";
import { Field, ErrorMessage, FieldConfig } from "formik";

interface InputFieldProps extends FieldConfig {
  label: string;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  required,
  name,
  ...restProps
}: InputFieldProps) => {
  return (
    <div className={formGroupStyle}>
      <label
        className={labelRecipe({
          required: required,
        })}
        htmlFor={name}
      >
        {label}
      </label>
      <Field className={inputStyle} name={name} {...restProps} />
      <span className={errorStyle}>
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};
