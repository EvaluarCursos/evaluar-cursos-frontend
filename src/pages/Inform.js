import { useNavigate } from "react-router";
import { Content } from "../components/Content";
import "../components/Inform.css";
import Table from "../components/Table";
import { CONSULT_EVALUATION_ROUTE } from "../middleware/constants";

const DATOS_DB = {
  headers: {
    professor: "Wilmer Alberto Gil ",
    subject: "Analisis y diseño de sistemas1",
    semester: "2023-1",
  },
  seccion1: {
    q1: {
      question:
        "¿Cómo califica la importancia del curso dentro del plan de estudios?",
      average: 4,
      desv_est: 5,
      coef_var: 9,
      answers: 9,
    },
    total: {
      t_average: 7,
      t_desv_est: 7,
      t_coef_var: 27,
      t_answers: 9,
    },
  },
  seccion2: {
    q2: {
      question:
        "¿Cómo considera que es la relación de la materia con sus prerrequisitos?",
      average: 4,
      desv_est: 5,
      coef_var: 9,
      answers: 9,
    },
    total: {
      t_average: 7,
      t_desv_est: 7,
      t_coef_var: 27,
      t_answers: 17,
    },
  },
  seccion3: {
    q3: {
      question:
        "¿Cómo evalúa la materia en cuánto a la actualidad y vigencia de sus temas?",
      average: 4,
      desv_est: 5,
      coef_var: 9,
      answers: 9,
    },
    total: {
      t_average: 7,
      t_desv_est: 7,
      t_coef_var: 27,
      t_answers: 17,
    },
  },
  seccion4: {
    q4: {
      question:
        "¿Cómo evalúa la elaboración de evaluaciones y exámenes del profesor?",
      average: 4,
      desv_est: 5,
      coef_var: 9,
      answers: 9,
    },
    q5: {
      question:
        "¿Cómo considera la objetividad del profesor a la hora de calificar?",
      average: 4,
      desv_est: 5,
      coef_var: 9,
      answers: 9,
    },
    total: {
      t_average: 7,
      t_desv_est: 7,
      t_coef_var: 27,
      t_answers: 18,
    },
  },
  seccion5: {
    q7: {
      question:
        "¿Cómo considera que es el respeto y ecuanimidad con los estudiantes?",
      average: 4,
      desv_est: 5,
      coef_var: 9,
      answers: 9,
    },
    q6: {
      question:
        "¿Cómo califica la disposición del profesor a atender dudas fuera del horario regular?",
      average: 4,
      desv_est: 5,
      coef_var: 9,
      answers: 9,
    },
    total: {
      t_average: 7,
      t_desv_est: 7,
      t_coef_var: 27,
      t_answers: 17,
    },
  },
  seccion6: {
    q8: {
      question:
        "¿Cómo califica el dominio sobre los temas explicados por parte del profesor?",
      average: 4,
      desv_est: 5,
      coef_var: 9,
      answers: 9,
    },
    q9: {
      question: "¿Como califica la seguridad de exposición del profesor?",
      average: 4,
      desv_est: 5,
      coef_var: 9,
      answers: 9,
    },
    q10: {
      question:
        "¿Cómo evalúa las respuestas a las preguntas e inquietudes de los estudiantes?",
      average: 20,
      desv_est: 10,
      coef_var: 12,
      answers: 15,
    },
    total: {
      t_average: 7,
      t_desv_est: 7,
      t_coef_var: 27,
      t_answers: 17,
    },
  },
};

export const Inform = () => {
  const { professor, subject, semester } = DATOS_DB.headers;

  const navigate = useNavigate();

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
            <Table data={DATOS_DB} />
            <button onClick={() => navigate(CONSULT_EVALUATION_ROUTE)}>
              Anterior
            </button>
          </div>
        </div>
      </section>
    </Content>
  );
};
