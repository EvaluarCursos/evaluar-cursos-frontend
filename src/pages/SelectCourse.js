import { Content } from "../components/Content";
import "../components/Card.css";
import { Card } from "../components/Card";
import { Navigate, useNavigate } from "react-router";
import { FORM_ROUTE, LOGIN_ROUTE } from "../middleware/constants";
import { useContext } from "react";
import AuthContext from "../components/contexts/AuthContext";

export const SelectCourse = () => {
  const courses = useContext(AuthContext).courses;
  const navigate = useNavigate();

  if (courses == null) {
    return <Navigate to={LOGIN_ROUTE} />;
  }

  return (
    <Content>
      <div className="card-container">
        {courses.map((course) => (
          <Card
            key={course.id}
            title={course.name}
            subtitle={"COD " + course.code}
            text={"Profesor: " + course.teacher}
            buttonText={course.evaluated ? "EVALUADO" : "EVALUAR"}
            disableButton={course.evaluated}
            onButtonClick={() =>
              navigate(FORM_ROUTE, { state: { id: course.id } })
            }
          />
        ))}
      </div>
    </Content>
  );
};
