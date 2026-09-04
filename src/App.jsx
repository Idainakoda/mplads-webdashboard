import { HashRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import MinistryDashboard from "./pages/MinistryDashboard";
import StateDashboard from "./pages/StateDashboard";
import DistrictDashboard from "./pages/DistrictDashboard";
import MPDashboard from "./pages/MPDashboard";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login" element={<Login />} />
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
      </Routes>
    </HashRouter>
  );
}

export default App;
