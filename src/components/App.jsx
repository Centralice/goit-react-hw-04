import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <ErrorMessage />
      <ImageGallery />
      <ImageModal />
      <Loader />
      <LoadMoreBtn />
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
