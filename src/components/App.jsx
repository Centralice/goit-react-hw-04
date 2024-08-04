import axios from "axios";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";

import { useEffect, useState } from "react";

const App = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos?client_id=SGR-b_RMZ6ScDLeVlF4_miV43r2BL_2fZC8eKwByhiA&query=nature"
        );
        setResults(response.data.results);
      } catch (error) {
        console.log("error");
      }
    };
    getData();
  }, []);

  return (
    <div>
      {/* <ErrorMessage /> */}
      <ImageGallery pictures={results} />
      {/* <ImageModal />
      <Loader />
      <LoadMoreBtn />
      <SearchBar onSubmit={handleSubmit} /> */}
    </div>
  );
};

export default App;

// useEffect(() => {
//   axios
//     .get(
//       "https://api.unsplash.com/search/photos?client_id=SGR-b_RMZ6ScDLeVlF4_miV43r2BL_2fZC8eKwByhiA&query=nature"
//     )
//     .then((res) => setResults(res.data.results))
//     .catch();
// }, []);
