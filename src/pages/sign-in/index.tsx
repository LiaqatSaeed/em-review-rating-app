import { Link } from "@components";
import { LoginForm } from "./sign-in-form";
import { local } from "@local";
import { createAccountLinkStyle, signInFormStyle, titleStyle } from "./sign-in-form.css";

export const SignIn: React.FC = () => {
  return (
    <div className={signInFormStyle}>
      <div className={titleStyle}>Login</div>
      <LoginForm />
      <span>
        <Link className={createAccountLinkStyle} to="/sign-up">{local.notRegistered}</Link>
      </span>
    </div>
  );
};
