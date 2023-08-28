import { FormikWrapper, InputField } from "@components";
import { LoginSchema } from "./validation.schema";
import {useDispatch, useSelector} from "react-redux";
import { userLogin } from "@epics";
import { useAuth } from "../..//context/authProvider";

interface LoginFormProps {
  username: string
  password: string
}

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {login} = useAuth()
  const user = useSelector(state => state.user );


  const handleLogin = async (params: LoginFormProps) => {
    try {
     //@ts-ignore
      const response  = await dispatch(userLogin(params))
      const {user, token} = response.payload;
      login({user, token});
      window.location.href = "/dashboard";
    } catch (error) {
      // Handle error
    }
  }

  return (
    <FormikWrapper
      onSubmit={handleLogin}
      formState={user.state}
      submitButtonLabel="Log in"
      validationSchema={LoginSchema}
      initialValues={{ username: "", password: "" }}
    >
      <InputField required name="username" label="Username" />
      <InputField name="password" label="Password" type="password" />

     
    </FormikWrapper>
  );
};
