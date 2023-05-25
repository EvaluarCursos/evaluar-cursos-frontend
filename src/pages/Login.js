import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { Content } from "../components/Content";
import * as fetchers from "../middleware/fetchers";
import {
  CONSULT_EVALUATION_ROUTE,
  COURSE_SELECT_ROUTE,
} from "../middleware/constants";
import AuthContext from "../components/contexts/AuthContext";
import NotificationContext from "../components/contexts/NotificationContext";
import { UnauthorizedError } from "../middleware/http-errors";

export const Login = () => {
  function loginSuccess(data) {
    auth.setData({
      email: email,
      ...data,
    });
    notifications.success("Sesión iniciada");
    if (data.role === "student") {
      navigate(COURSE_SELECT_ROUTE, { state: data.courses });
    } else {
      navigate(CONSULT_EVALUATION_ROUTE);
    }
  }

  function loginError(error) {
    if (error instanceof UnauthorizedError) {
      notifications.error("Usuario o contraseña incorrectos");
    } else {
      notifications.error("Error al iniciar sesión");
    }
  }

  const loginMutation = useMutation({
    mutationFn: fetchers.login,
    onSuccess: loginSuccess,
    onError: loginError,
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const notifications = useContext(NotificationContext);

  return (
    <Content>
      <div className="container" style={{ width: "250px" }}>
        <p className="title">Iniciar Sesión</p>
        <input
          placeholder="Correo"
          style={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          type="password"
          style={{ width: "100%" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          disabled={loginMutation.isLoading || !email || !password}
          onClick={() =>
            loginMutation.mutate({
              email: email,
              password: password,
            })
          }
        >
          Entrar
        </button>
      </div>
    </Content>
  );
};
