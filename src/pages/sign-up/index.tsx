import { Link } from "@components";
import { RegisterForm } from "./sign-up-form";
import { alreadyHaveAccountStyle, signUpFormStyle, titleStyle } from "./sign-up-form.css";
import { local } from "@local";

export const SignUp: React.FC = () => {
  return (
    <div className={signUpFormStyle}>
      <div className={titleStyle}>Sign Up</div>
      <RegisterForm />
      <span>
        <Link className={alreadyHaveAccountStyle} to="/sign-in">{local.alreadyHaveAccount}</Link>
      </span>
    </div>
  );
};
