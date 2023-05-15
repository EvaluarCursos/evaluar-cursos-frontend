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

export const Login = () => {
  function handleLoginSuccess(data) {
    auth.setData({
      email: emailRef.current.value,
      role: data.role,
      userId: data.userId,
    });
    if (data.role === "student") {
      navigate(COURSE_SELECT_ROUTE, { state: data.courses });
    } else {
      navigate(CONSULT_EVALUATION_ROUTE);
    }
  }

  const loginMutation = useMutation({
    mutationFn: fetchers.login,
    onSuccess: handleLoginSuccess,
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

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
