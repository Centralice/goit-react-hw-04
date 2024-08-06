import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import { fetchData } from "../services/api";

import { useEffect, useState } from "react";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("dog");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const response = await fetchData(query, page);
        setResults(prev => [...prev, ...response.results]);
      } catch (error) {
        setResults([]);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  return (
    <div>
      {/* <ImageModal /> */}
      <SearchBar setQuery={setQuery} />
      <Loader isLoading={isLoading} />
      <ErrorMessage error={error} />
      <ImageGallery pictures={results} />
      <LoadMoreBtn setPage={setPage} />
    </div>
  );
};

export default App;
