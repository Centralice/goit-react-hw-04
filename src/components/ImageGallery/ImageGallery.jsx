import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = () => {
  return (
    <div>
      <div>
        <ImageCard />
      </div>
      <div>
        <ImageCard />
      </div>
      <div>
        <ImageCard />
      </div>
    </div>
  );
};

export default ImageGallery;
