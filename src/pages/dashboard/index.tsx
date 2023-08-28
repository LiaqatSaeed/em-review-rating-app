import { useAuth } from "../../context/authProvider";

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return <>{user.name}'s Dashboard</>;
};
