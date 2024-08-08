import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import { fetchData } from "../services/api";

import { useEffect, useState } from "react";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const[selectedPicture, setSelectedPicture] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onPictureClick = (link) => {
    setSelectedPicture(link);  
    setModalIsOpen(true); 
  }

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setError(false);
        setIsLoading(true);
        const response = await fetchData(query, page);
        setResults((prev) => [...prev, ...response.results]);
        setTotal(response.total_pages);
      } catch (error) {
        setResults([]);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (query) => {
    setQuery(query);
    setResults([]);
    setPage(1);
    setError(false);
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} setResults={setResults} />
      <ErrorMessage error={error} />
      <ImageGallery onPictureClick={onPictureClick} pictures={results} />
      <Loader isLoading={isLoading} />
      {total > page && !isLoading && results.length > 0 && (
        <LoadMoreBtn setPage={setPage} />
      )}
      {modalIsOpen && selectedPicture && (
        <ImageModal
          selectedPicture={selectedPicture}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
