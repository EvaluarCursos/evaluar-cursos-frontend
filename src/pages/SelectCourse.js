import { Content } from "../components/Content";
import "../components/Card.css";
import { useState } from "react";
import { CardCourse } from "../components/CardCourse";

export const SelectCourse = () => {
  const [course, setCourse] = useState([
    {
      subjectName: "Cálculo",
      code: "COD.38714",
      faculty: "Facultad de Ingeniería",
    },
    {
      subjectName: "Ecuaciones",
      code: "COD.38754",
      faculty: "Facultad de Ingeniería",
    },
    {
      subjectName: "Inglés",
      code: "COD.38455",
      faculty: "Facultad de Ingeniería",
    },
  ]);
  return (
    <Content>
      <div className="grid-container">
        {course.map((course, index) => (
            <CardCourse
            key={index}
            subjectName={course.subjectName}
            code={course.code}
            faculty={course.faculty}
            cardClass={`card${index + 1}`}
          />
        ))}
      </div>
    </Content>
  );
};
