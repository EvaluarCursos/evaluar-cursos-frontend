import "./StepProgressBar.css";
import Icon from "./icons/Icon";

const Dot = ({ active }) => {
  return (
    <Icon
      className="step_progress_bar_dot"
      icon="circleFilled"
      size={active ? 24 : 12}
    />
  );
};

export const StepProgressBar = ({ currentStep, steps, style, className }) => {
  return (
    <div
      className={`step_progress_bar${className ? " " + className : ""}`}
      style={style}
    >
      <div className="background_line_placeholder">
        <div
          className="background_line"
          style={{ width: (100 * currentStep) / (steps - 1) + "%" }}
        />
      </div>
      {[...Array(steps)].map((e, i) => (
        <Dot key={i} active={currentStep === i} />
      ))}
    </div>
  );
};
