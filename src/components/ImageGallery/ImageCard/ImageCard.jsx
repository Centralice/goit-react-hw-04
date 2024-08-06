import s from "./ImageCard.module.css";

const ImageCard = ({ picture}) => {
  return (
    <div>
      <img className={s.img} src={picture.urls.small} alt={picture.alt_description} />
    </div>
  );
};

export default ImageCard;
