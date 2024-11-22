import { SearchIcon } from 'lucide-react';
import './Search.css';
const Search = () => {
  return (
    <div className="search-section">
      <h1>
        <span className="blue">S</span>
        <span className="red">&</span>
        <span className="yellow">S</span>
        <span className="blue">e</span>
        <span className="green">a</span>
        <span className="red">r</span>
        <span className="yellow">c</span>
        <span className="blue">h</span>
      </h1>
      <div className="search-part">
        <SearchIcon color="#5F5F5F" />
        <input
          title="write something you want to know more about!"
          type="text"
          placeholder="Effectuez une recherche sur S&Search ou inserez une URL"
        />
      </div>
    </div>
  );
};

export default Search;
