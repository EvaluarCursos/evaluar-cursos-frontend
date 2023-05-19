import { useLocation, useNavigate } from "react-router";
import { Content } from "../components/Content";
import "../components/Inform.css";
import Table from "../components/Table";
import { CONSULT_EVALUATION_ROUTE } from "../middleware/constants";
import { useQuery } from "react-query";
import { getInform } from "../middleware/fetchers";
import { useContext } from "react";
import NotificationContext from "../components/contexts/NotificationContext";
import AuthContext from "../components/contexts/AuthContext";
import Loader from "../components/Loader";

export const Inform = () => {
  const result = useLocation().state;

  const notification = useContext(NotificationContext);
  const auth = useContext(AuthContext);

  const { isLoading, data } = useQuery({
    queryFn: () => getInform({ userId: auth.userId, courseId: result.id }),
    queryKey: "inform" + result.id,
    onError: () => notification.error("No se pudo obtener el informe."),
  });

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    );
  }

  const { professor, subject, semester } = data.headers;

  return (
    <Content>
      <section className="main-report">
        <div className="information">
          <div>
            <h2>Profesor: {professor} </h2>
            <h2>Materia: {subject} </h2>
          </div>
          <div className="semester">
            <h2>Semestre: {semester} </h2>
          </div>
        </div>

        <div className="data">
          <div className="questions">
            <Table data={data} />
            <button onClick={() => navigate(CONSULT_EVALUATION_ROUTE)}>
              Anterior
            </button>
          </div>
        </div>
      </section>
    </Content>
  );
};
