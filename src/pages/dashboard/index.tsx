import { buttonRecipe } from "@styles";
import { useAuth } from "../../context/authProvider";

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <>
      {user.name}'s Dashboard
      <button onClick={handleLogout} className={buttonRecipe()}>
        Logout
      </button>
    </>
  );

