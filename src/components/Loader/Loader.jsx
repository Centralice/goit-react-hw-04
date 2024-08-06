import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = ({ isLoading }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.loader}>
        {isLoading && (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
    </div>
  );
};

export default Loader;
