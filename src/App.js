import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { useRef, useState } from "react";
import Notification from "./components/Notification";
import NotificationContext from "./components/contexts/NotificationContext";

function App() {
  function notifySuccess(message) {
    successNotification.current.show(message);
  }

  function notifyError(message) {
    errorNotification.current.show(message);
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60,
      },
    },
  });

  const [authUser, setAuthUser] = useState({
    userId: null,
    role: null,
    email: null,
  });

  const successNotification = useRef();
  const errorNotification = useRef();

  return (
    <AuthContext.Provider value={{ ...authUser, setData: setAuthUser }}>
      <NotificationContext.Provider
        value={{ success: notifySuccess, error: notifyError }}
      >
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to={LOGIN_ROUTE} />} />
              <Route path={LOGIN_ROUTE} element={<Login />} />
              <Route path={COURSE_SELECT_ROUTE} element={<SelectCourse />} />
              <Route path={FORM_ROUTE} element={<Form />} />
              <Route path={CONSULT_EVALUATION_ROUTE} element={<Consult />} />
              <Route path={CONSULT_RESULTS_ROUTE} element={<Results />} />
              <Route path={INFORM_ROUTE} element={<Inform />} />
            </Routes>
          </BrowserRouter>
          <Notification ref={errorNotification} type="error" />
          <Notification ref={successNotification} type="success" />
        </QueryClientProvider>
      </NotificationContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
