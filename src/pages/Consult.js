import { Content } from "../components/Content";
import React, { useContext, useState } from "react";
import Select, { SelectOption } from "../components/Select";
import { useNavigate } from "react-router";
import {
  CONSULT_RESULTS_ROUTE,
  FACULTIES,
  SEMESTERS,
} from "../middleware/constants";
import { useMutation } from "react-query";
import { search } from "../middleware/fetchers";
import NotificationContext from "../components/contexts/NotificationContext";
import AuthContext from "../components/contexts/AuthContext";

export const Consult = () => {
  const [semester, setSemester] = useState("");
  const [faculty, setFaculty] = useState("");

  const navigate = useNavigate();

  const notification = useContext(NotificationContext);
  const auth = useContext(AuthContext);

  const { mutate, isLoading } = useMutation({
    mutationFn: search,
    onSuccess: (data) => navigate(CONSULT_RESULTS_ROUTE, { state: data }),
    onError: () =>
      notification.error("Ocurrió un error al buscar las evaluaciones"),
  });

  return (
    <Content>
      <div className="container">
        <p className="title">Consulta de Evaluaciones</p>
        <div className="container2">
          <h3 style={{ marginRight: "24px" }}>Semestre</h3>
          <Select
            defaultText="Seleccione..."
            setter={setSemester}
            style={{ width: "170px" }}
          >
            {SEMESTERS.map((item) => (
              <SelectOption text={item} value={item} key={item} />
            ))}
          </Select>
        </div>
        <div className="container2">
          <h3 style={{ marginRight: "24px" }}>Facultad</h3>
          <Select
            defaultText="Seleccione..."
            setter={setFaculty}
            style={{ width: "170px" }}
          >
            {FACULTIES.map((item) => (
              <SelectOption text={item} value={item} key={item} />
            ))}
          </Select>
        </div>
        <button
          onClick={() => mutate({ userId: auth.userId, semester, faculty })}
          disabled={!(semester && faculty) || isLoading}
        >
          {isLoading ? "Buscando" : "Buscar"}
        </button>
      </div>
    </Content>
  );
};
