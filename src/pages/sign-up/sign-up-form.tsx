import { FormikWrapper, InputField } from "@components";
import { RegisterSchema } from "./validation.schema";
import {useDispatch, useSelector} from "react-redux";
import { userRegister } from "@epics";
import { STATE } from "@helpers";
import { useAuth } from "../../context/authProvider";

interface RegisterProps {
  username: string
  name: string
  password: string
  email: string
}
 
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const {login} = useAuth()
  const user = useSelector(state => state.user );


  const handleRegister = async (params: RegisterProps) => {
    try {
      //@ts-ignore
      const response = await dispatch(userRegister(params));
      
      const {user, token} = response.payload;
      login({user, token});
      window.location.href = "/dashboard";
    } catch (error) {
      // Handle error
    }
  }

  return (
    <FormikWrapper
      onSubmit={handleRegister}
      submitButtonLabel="Register"
      formState={user.state}
      validationSchema={RegisterSchema}
      initialValues={{ username: "", name: "", email: "", password: "" }}
    >
      <InputField required name="username" label="Username" />
      <InputField required name="name" label="Name" />
      <InputField required name="email" label="Email" />
      <InputField required name="password" label="Password" type="password" />
    </FormikWrapper>
  );
};
