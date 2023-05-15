import { Content } from "../components/Content";
import { Card } from "../components/Card";
import "../components/Card.css";
import { useState } from "react";
export const Results = () => {
  const [results, setResults] = useState([
    {
      subjectName: "Cálculo",
      code: "38714",
      faculty: "Facultad de Ingeniería",
    },
    {
      subjectName: "Ecuaciones",
      code: "38754",
      faculty: "Facultad de Ingeniería",
    },
    {
      subjectName: "Inglés",
      code: "38455",
      faculty: "Facultad de Ingeniería",
    },
  ]);
  return (
    <Content>
      <div className="card-container">
        {results.map((result, index) => (
          <Card
            key={index}
            title={result.subjectName}
            subtitle={"COD. " + result.code}
            text={result.faculty}
            buttonText="VER"
          />
        ))}
      </div>
    </Content>
  );
};
