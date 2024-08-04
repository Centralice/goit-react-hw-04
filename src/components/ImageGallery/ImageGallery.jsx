import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ pictures }) => {
  return (
    <div>
      <ul>
        {pictures.map((picture) => (
          <li key={picture.id}>
            <img src={picture.urls.small} alt={picture.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
