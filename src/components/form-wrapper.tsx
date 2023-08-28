import React from "react";
import { Formik, Form } from "formik";
import { formStyle, buttonGroupStyle, buttonRecipe } from "@styles";
import { STATE } from "@helpers";

interface FormikWrapperProps {
  onSubmit(values: any): void | Promise<any>;
  initialValues: any;
  children: React.ReactNode;
  submitButtonLabel?: string;
  validationSchema: any;
  formState?: string;
}

export const FormikWrapper: React.FC<FormikWrapperProps> = ({
  onSubmit,
  initialValues,
  children,
  submitButtonLabel = "Submit",
  validationSchema,
  formState,
}: FormikWrapperProps) => {
  const onCancel = () => [(window.location.href = "/")];

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={formStyle}>
        {children}
        <div className={buttonGroupStyle}>
          <button
            className={buttonRecipe({
              type: "default",
            })}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={buttonRecipe({
              type: "success",
              state: formState,
            })}
            type="submit"
          >
            {submitButtonLabel}
          </button>
        </div>
      </Form>
    </Formik>
  );
};
