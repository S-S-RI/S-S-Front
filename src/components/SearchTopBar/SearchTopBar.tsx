import React, { useState } from 'react';
import { SearchIcon, X } from 'lucide-react';
import logo from '../../assets/logo.webp';
import './SearchTopBar.css';
const SearchTopBar: React.FC<{ phrase: string | null }> = ({ phrase }) => {
  const [searchValue, setSearchValue] = useState(phrase);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <nav>
      <img
        src={logo}
        alt="S&S Logo"
        width="50px"
        height="50px"
        title="S&S Logo"
      />
      <div className="search-part">
        <SearchIcon color="#5F5F5F" size={16} style={{ cursor: 'pointer' }} />
        <input
          title="write something you want to know more about!"
          type="text"
          placeholder="Effectuez une recherche sur S&Search ou inserez une URL"
          value={searchValue || ''}
          onChange={handleInputChange}
        />

        <X
          color="#5F5F5F"
          size={16}
          onClick={() => {
            setSearchValue('');
          }}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </nav>
  );
};

export default SearchTopBar;
