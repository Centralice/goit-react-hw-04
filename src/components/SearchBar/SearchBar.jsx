import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button onClick={onSubmit} type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
