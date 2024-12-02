import { SearchIcon } from 'lucide-react';
import './Search.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const [searchValue, SetSearchValue] = useState('');
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSearchValue(e.target.value);
  };
  const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter') {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    navigate(`/search?phrase=${searchValue}`);
  };
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
        <SearchIcon color="#5F5F5F" onClick={handleSubmit} />
        <input
          title="write something you want to know more about!"
          type="text"
          placeholder="Effectuez une recherche sur S&Search ou inserez une URL"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyEvent}
        />
      </div>
    </div>
  );
};

export default Search;
