import s from "./ImageCard.module.css";

const ImageCard = ({ picture, onPictureClick }) => {
  return (
    <div>
      <img
        className={s.img}
        src={picture.urls.small}
        alt={picture.alt_description}
        onClick={() => onPictureClick(picture.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
