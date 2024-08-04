import s from "./Loader.module.css";

const Loader = ({isLoading}) => {
  return <div>{isLoading && <h1>Loading...</h1>}</div>;
};

export default Loader;
