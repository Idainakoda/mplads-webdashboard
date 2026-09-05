import { HashRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import MinistryDashboard from "./pages/MinistryDashboard";
import StateDashboard from "./pages/StateDashboard";
import DistrictDashboard from "./pages/DistrictDashboard";
import MPDashboard from "./pages/MPDashboard";
import ScrollToTop from "./components/ScrollToTop";
import Registration from "./pages/Registration";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <PageTransition />

      <Routes>
        <Route
          path="/"
          element={<RoleSelection />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/dashboard/ministry"
          element={<MinistryDashboard />}
        />
        <Route
          path="/dashboard/state"
          element={<StateDashboard />}
        />
        <Route
          path="/dashboard/district"
          element={<DistrictDashboard />}
        />
        <Route
          path="/dashboard/mp"
          element={<MPDashboard />}
        />
        <Route
          path="/register"
          element={<Registration />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
