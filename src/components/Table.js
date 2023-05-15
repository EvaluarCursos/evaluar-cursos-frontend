import React from "react";

const Table = ({ data }) => {
  const SECTION_HEADERS = [
    "Importancia en el plan de estudios",
    "Relación con los prerrequisitos",
    "Actualidad",
    "Manejo de evaluaciones",
    "Relación con los estudiantes",
    "Conocimientos",
  ];

  const QUESTIONS_LIST = [
    "¿Cómo califica la importancia del curso dentro del plan de estudios?",
    "¿Cómo considera que es la relación de la materia con sus prerrequisitos?",
    "¿Cómo evalúa la materia en cuánto a la actualidad y vigencia de sus temas?",
    "¿Cómo evalúa la elaboración de evaluaciones y exámenes del profesor?",
    "¿Cómo considera la objetividad del profesor a la hora de calificar?",
    "¿Cómo califica la disposición del profesor a atender dudas fuera del horario regular?",
    "¿Cómo considera que es el respeto y ecuanimidad con los estudiantes?",
    "¿Cómo califica el dominio sobre los temas explicados por parte del profesor?",
    "¿Como califica la seguridad de exposición del profesor?",
    "¿Cómo evalúa las respuestas a las preguntas e inquietudes de los estudiantes?",
  ];

  const items = Object.keys(data).filter((key) => key.startsWith("seccion"));

  return (
    <>
      {items.map((itemKey, index) => {
        const item = data[itemKey];

        const questions = Object.keys(item)
          .filter((key) => key.startsWith("q"))
          .map((questionKey, questionIndex) => {
            const question = item[questionKey];
            return (
              <tr key={questionKey}>
                <td>{QUESTIONS_LIST[questionIndex]}</td>
                <td>{question.average}</td>
                <td>{question.desv_est}</td>
                <td>{question.coef_var}</td>
                <td>{question.answers}</td>
              </tr>
            );
          });

        const total = item.total;

        return (
          <div key={itemKey}>
            <table>
              <thead>
                <tr>
                  <td>
                    <h3> {SECTION_HEADERS[index]} </h3>
                  </td>
                  <td>MEDIA</td>
                  <td>DESV. EST</td>
                  <td>COEF. VARIA</td>
                  <td>RESPUESTAS VALIDAS</td>
                </tr>
              </thead>
              <tbody>{questions}</tbody>
              <tfoot>
                <tr>
                  <td className="total-table">TOTAL</td>
                  <td>{total.t_average}</td>
                  <td>{total.t_desv_est}</td>
                  <td>{total.t_coef_var}</td>
                  <td>{total.t_answers}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      })}
    </>
  );
};

export default Table;
