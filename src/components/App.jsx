import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import { fetchData } from "../services/api";

import { useEffect, useState } from "react";

import Modal from "react-modal";

const App = () => {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

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
      <SearchBar
        setQuery={handleSetQuery}
        setResults={setResults}
      />
      <ErrorMessage error={error} />
      <ImageGallery pictures={results} />
      <Loader isLoading={isLoading} />
      {total > page && !isLoading && results.length > 0 && <LoadMoreBtn setPage={setPage} />}
    </div>
  );
};

export default App;
