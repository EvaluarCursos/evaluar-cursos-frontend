import { Content } from "../components/Content";
import "../components/Card.css";
export const CardCourse = ({ subjectName, code, faculty, cardClass}) => {
  return (
      <div className={`super-containerCourse ${cardClass}`}>
        <div className="small-container">
          <h2> {subjectName}</h2>
          <p className="codigo"> {code}</p>
          <h3> {faculty}</h3>
        </div>
        <div>
          <button className="button-containerCourse">EVALUAR</button>
        </div>
      </div>
  );
};
