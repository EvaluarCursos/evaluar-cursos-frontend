import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Consult } from "./pages/Consult";
import { Form } from "./pages/Form";
import { Inform } from "./pages/Inform";
import { Login } from "./pages/Login";
import { Results } from "./pages/Results";
import { SelectCourse } from "./pages/SelectCourse";
import { Navbar } from "./components/Navbar";
import {
  CONSULT_EVALUATION_ROUTE,
  CONSULT_RESULTS_ROUTE,
  COURSE_SELECT_ROUTE,
  FORM_ROUTE,
  INFORM_ROUTE,
  LOGIN_ROUTE,
} from "./middleware/constants";
import AuthContext from "./components/contexts/AuthContext";
import { useState } from "react";

function App() {
  const queryClient = new QueryClient();

  const [authUser, setAuthUser] = useState({
    userId: null,
    role: null,
    email: null,
  });

  return (
    <AuthContext.Provider value={{ ...authUser, setData: setAuthUser }}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>Inicio</div>} />
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={COURSE_SELECT_ROUTE} element={<SelectCourse />} />
            <Route path={FORM_ROUTE} element={<Form />} />
            <Route path={CONSULT_EVALUATION_ROUTE} element={<Consult />} />
            <Route path={CONSULT_RESULTS_ROUTE} element={<Results />} />
            <Route path={INFORM_ROUTE} element={<Inform />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

export default App;
