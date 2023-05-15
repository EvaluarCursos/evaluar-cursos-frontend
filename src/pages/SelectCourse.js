import { Content } from "../components/Content";
import "../components/Card.css";
import { Card } from "../components/Card";
import { useLocation, useNavigate } from "react-router";
import { FORM_ROUTE } from "../middleware/constants";

export const SelectCourse = () => {
  const courses = useLocation().state;
  const navigate = useNavigate();

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
