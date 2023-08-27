import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Menu } from "./components";
import { ROUTES } from "./helpers/routes";
import { containerStyle } from "./styles";

export default function App() {
  return (
   
      <div>
        <Router>
         
            <Menu routes={ROUTES} />
            <div className={containerStyle}>
            <Routes>
              {ROUTES.map(({ url, FunComponent }) => (
                <Route path={url} element={<FunComponent />} />
              ))}
            </Routes>
          </div>
        </Router>
      </div>

  );
}
