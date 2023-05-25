import { Content } from "../components/Content";
import { Card } from "../components/Card";
import "../components/Card.css";
import { Navigate, useLocation, useNavigate } from "react-router";
import { INFORM_ROUTE, LOGIN_ROUTE } from "../middleware/constants";

export const Results = () => {
  const results = useLocation().state;

  const navigate = useNavigate();

  if (results == null) {
    return <Navigate to={LOGIN_ROUTE} />;
  }

  return (
    <Content>
      <div className="card-container">
        {results.map((result) => (
          <Card
            key={result.id}
            title={result.name}
            subtitle={"COD. " + result.code}
            text={result.faculty}
            buttonText="VER"
            onButtonClick={() => navigate(INFORM_ROUTE, { state: result })}
          />
        ))}
      </div>
    </Content>
  );
};
