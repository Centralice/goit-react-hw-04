import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ pictures}) => {
  return (
    <ul className={s.gallery}>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <ImageCard picture={picture} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
