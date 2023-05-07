import { Content } from "../components/Content";
import "../components/Inform.css";
import Table from "../components/Table";

const DATOS_DB = {
  headers:  {
    professor: "Wilmer Alberto Gil ",
    subject: "Analisis y diseño de sistemas1",
    semester: "2023-1"
  },
  q1: {
    aspect: "Materia: Importancia en el plan de estudios",
    question:
      "¿Cómo califica la importancia del curso dentro del plan de estudios?",
    half: 4,
    standardDeviation: 5,
    variabilityCoefficient: 9,
    validAnswers: 9  
  },
  q2: {
    aspect: "Materia: Relación con los prerrequisitos",
    question:
      "¿Cómo considera que es la relación de la materia con sus prerrequisitos?",
    half: 4,
    standardDeviation: 5,
    variabilityCoefficient: 9,
    validAnswers: 9  
  },
  q3: {
    aspect: "Materia: Actualidad",
    question:
      "¿Cómo evalúa la materia en cuánto a la actualidad y vigencia de sus temas?",
    half: 4,
    standardDeviation: 5,
    variabilityCoefficient: 9,
    validAnswers: 9  

  },
  q4: {
    aspect: "Profesor: Manejo de evaluaciones",
    question:
      "¿Cómo evalúa la elaboración de evaluaciones y exámenes del profesor?",
    half: 4,
    standardDeviation: 5,
    variabilityCoefficient: 9,
    validAnswers: 9  

  },
  q5: {
    aspect: "Profesor: Manejo de evaluaciones",
    question:
      "¿Cómo considera la objetividad del profesor a la hora de calificar?",
    half: 4,
    standardDeviation: 5,
    variabilityCoefficient: 9,
    validAnswers: 9  

  },
  q6: {
    aspect: "Profesor: Relación con los estudiantes",
    question:
      "¿Cómo califica la disposición del profesor a atender dudas fuera del horario regular?",
    half: 4,
    standardDeviation: 5,
    variabilityCoefficient: 9,
    validAnswers: 9  

  },
  q7: {
    aspect: "Profesor: Relación con los estudiantes",
    question:
      "¿Cómo considera que es el respeto y ecuanimidad con los estudiantes?",
    half: 4,
    standardDeviation: 5,
    variabilityCoefficient: 9,
    validAnswers: 9  

  },
  q8: {
    aspect: "Profesor: Conocimientos",
    question:
      "¿Cómo califica el dominio sobre los temas explicados por parte del profesor?",
    half: 4,
    standardDeviation: 5,
    variabilityCoefficient: 9,
    validAnswers: 9  

  },
  q9: {
    aspect: "Profesor: Conocimientos",
    question: "¿Como califica la seguridad de exposición del profesor?",
    half: 4,
    standardDeviation: 5,
    variabilityCoefficient: 9,
    validAnswers: 9  

  },
  q10: {
    aspect: "Profesor: Conocimientos",
    question:
      "¿Cómo evalúa las respuestas a las preguntas e inquietudes de los estudiantes?",
    half: 20,
    standardDeviation: 10,
    variabilityCoefficient: 12,
    validAnswers: 15  

  },
  total: {
    t_half: 7,
    t_standardDeviation: 7,
    t_variabilityCoefficient: 27,
    t_validAnswers: 17,
  }

}

export const Inform = () => {

  const {professor, subject, semester} = DATOS_DB.headers;
  
  return <Content>
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
        <Table
          data={DATOS_DB}
        />
        </div>
      </div>
    </section>
  </Content>;
};
