import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return (
    error && (
      <div>
        <h1>Something went wrong...</h1>
      </div>
    )
  );
};

export default ErrorMessage;
