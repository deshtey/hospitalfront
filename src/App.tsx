import SignIn from "./pages/Signin";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NewPatient from "./pages/NewPatient";
import PatientList from "./pages/PatientList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/signin" element={<SignIn />} />
        <Route element={<Layout />}>
          <Route index element={<NewPatient />} />
          <Route path="allsms" element={<PatientList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
