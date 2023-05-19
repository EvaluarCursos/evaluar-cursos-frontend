import React, { useContext, useRef } from "react";
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
      email: emailRef.current.value,
      role: data.role,
      userId: data.userId,
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

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const notifications = useContext(NotificationContext);

  return (
    <Content>
      <div className="container">
        <p className="title">Iniciar Sesión</p>
        <input placeholder="Correo" ref={emailRef} />
        <input ref={passwordRef} placeholder="Contraseña" type="password" />
        <button
          disabled={loginMutation.isLoading}
          onClick={() =>
            loginMutation.mutate({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            })
          }
        >
          Entrar
        </button>
      </div>
    </Content>
  );
};
