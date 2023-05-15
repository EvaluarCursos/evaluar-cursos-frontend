import { useState } from "react";
import { Content } from "../components/Content";
import { AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router";
import { useMutation } from "react-query";
import { sendForm } from "../middleware/fetchers";
import { StepProgressBar } from "../components/StepProgressBar";
import AnswerOverview from "../components/AnswerOverview";
import { QUESTIONS } from "../middleware/constants";
import Icon from "../components/icons/Icon";

const FormPage = ({ aspect, question, children, onReturn, onNext }) => {
  return (
    <div className="form" style={{ position: "relative", top: "20px" }}>
      <p className="form_aspect">{aspect}</p>
      <p className="form_question">{question}</p>
      {children}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="form" onClick={onReturn}>
          <Icon icon="arrowBack" style={{ marginRight: "6px" }} />
          Volver
        </button>
        <button className="form" onClick={onNext}>
          Siguiente
          <Icon icon="arrowForward" style={{ marginLeft: "6px" }} />
        </button>
      </div>
    </div>
  );
};

const FeedbackQuestion = ({ onEvaluation }) => {
  const [feedbackText, setFeedbackText] = useState("");

  return (
    <Content>
      <FormPage
        aspect="Retroalimentación"
        question="¿Por último, que comentarios y/o retroalimentación tienes con respecto
          a este curso o profesor?"
        onReturn={() => onEvaluation("feedback", -1)}
        onNext={() => onEvaluation("feedback", feedbackText)}
      >
        <textarea
          value={feedbackText}
          rows={5}
          onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="Escribe una retroalimentación"
        />
      </FormPage>
    </Content>
  );
};

const Question = ({ id, aspect, question, onEvaluation, currentValue }) => {
  return (
    <Content>
      <FormPage
        aspect={aspect}
        question={question}
        onReturn={() => onEvaluation(id, -1)}
        onNext={() => onEvaluation(id, 0)}
      >
        <div className="form_buttons">
          <button
            className={`form${currentValue === 1 ? " selected" : ""}`}
            onClick={() => onEvaluation(id, 1)}
          >
            Muy malo
          </button>
          <button
            className={`form${currentValue === 2 ? " selected" : ""}`}
            onClick={() => onEvaluation(id, 2)}
          >
            Malo
          </button>
          <button
            className={`form${currentValue === 3 ? " selected" : ""}`}
            onClick={() => onEvaluation(id, 3)}
          >
            Regular
          </button>
          <button
            className={`form${currentValue === 4 ? " selected" : ""}`}
            onClick={() => onEvaluation(id, 4)}
          >
            Bueno
          </button>
          <button
            className={`form${currentValue === 5 ? " selected" : ""}`}
            onClick={() => onEvaluation(id, 5)}
          >
            Excelente
          </button>
        </div>
      </FormPage>
    </Content>
  );
};

export const Form = () => {
  function goToQuestion(questionId) {
    setCQ(questionId);
  }

  function handleEvaluation(questionID, value) {
    // -1: back, 0: skip

    let dir = 1;

    if (value === -1) {
      dir = -1;
    }

    if (value !== 0 && value !== -1) {
      setData({
        ...data,
        [questionID]: value,
      });
    }

    const next_id_idx = Object.keys(QUESTIONS).indexOf(questionID) + dir;
    if (next_id_idx >= 0) {
      const next_id = Object.keys(QUESTIONS)[next_id_idx];
      setCQ(next_id);
    } else {
      navigate(-1);
    }
  }

  function handleSendForm() {
    sendFormMutation.mutate({
      formData: data,
      id,
    });
  }

  const [data, setData] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null,
    feedback: null,
  });

  const [CQ, setCQ] = useState("q1");

  const navigate = useNavigate();
  const id = useLocation().state.id;

  const sendFormMutation = useMutation({
    mutationFn: sendForm,
  });

  return (
    <>
      <Content>
        <div className="form">
          <StepProgressBar
            currentStep={
              CQ
                ? Object.keys(QUESTIONS).indexOf(CQ)
                : Object.keys(QUESTIONS).length
            }
            steps={Object.keys(QUESTIONS).length + 1}
          />
        </div>
      </Content>
      <AnimatePresence mode="wait">
        {CQ ? (
          CQ === "feedback" ? (
            <FeedbackQuestion onEvaluation={handleEvaluation} />
          ) : (
            <Question
              id={CQ}
              key={CQ}
              aspect={QUESTIONS[CQ].aspect}
              question={QUESTIONS[CQ].question}
              onEvaluation={handleEvaluation}
              currentValue={data[CQ]}
            />
          )
        ) : (
          <AnswerOverview answers={data} onEditAnswer={goToQuestion} />
        )}
      </AnimatePresence>
    </>
  );
};
