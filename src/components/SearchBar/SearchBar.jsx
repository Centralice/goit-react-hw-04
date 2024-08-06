import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery, setResults }) => {
  const notify = () => toast("I'm not a psychic you know...");

  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, actions) => {
    if (values.query) {
      setQuery(values.query);
      actions.resetForm();
    } else {
      notify();
      setResults([]);
    }
  };

  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            className={s.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button className={s.btn} type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
