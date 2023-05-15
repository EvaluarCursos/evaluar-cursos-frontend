import "../components/Card.css";

export const Card = ({
  title,
  subtitle,
  text,
  buttonText,
  disableButton,
  onButtonClick,
}) => {
  return (
    <div className="card">
      <div className="card-info">
        <h3>{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
        <p>
          <b>{text}</b>
        </p>
      </div>
      <button
        className="card-button"
        disabled={disableButton}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
