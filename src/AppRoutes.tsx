import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalStates";
import Profile from "./pages/Profile";

const AppRoutes = () => {
  const { user } = useContext(GlobalContext);

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<ProtectedRoutes isAllowed={user} />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
