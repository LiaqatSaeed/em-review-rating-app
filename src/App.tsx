import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { containerStyle } from "./styles";
import { IRoutesProps, PROTECTED_ROUTES, PUBLIC_ROUTES } from "@helpers";
import { Menu } from "@components";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider, useAuth } from "./context/AuthProvider";

export const AppRoutes = () => {
  const { user } = useAuth();
  const ROUTES = user ? PROTECTED_ROUTES : PUBLIC_ROUTES;
  return (
    <>
      <Menu routes={ROUTES} />
      <div className={containerStyle}>
        <Routes>
          {ROUTES.map(({ url, FunComponent }: IRoutesProps) => (
            <Route path={url} element={<FunComponent />} />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </Provider>
  );
}
