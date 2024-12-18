import React, { useEffect, useState } from 'react';
import { SearchIcon, X } from 'lucide-react';
import logo from '../../assets/logo.webp';
import './SearchTopBar.css';
const SearchTopBar: React.FC<{
  phrase: string;
  fetchSearchResults: (phrase: string) => Promise<void>;
}> = ({ phrase, fetchSearchResults }) => {
  const [searchValue, setSearchValue] = useState<string>(phrase);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const saveSearch = (search: string) => {
    const updatedSearches = Array.from(new Set([search, ...suggestions])).slice(
      0,
      10
    );
    localStorage.setItem('searches', JSON.stringify(updatedSearches));
    setSuggestions(updatedSearches);
  };

  const handleSubmit = () => {
    if (searchValue.trim()) {
      saveSearch(searchValue);
      fetchSearchResults(searchValue);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
  };

  useEffect(() => {
    const savedSearches = localStorage.getItem('searches');
    if (savedSearches) {
      setSuggestions(JSON.parse(savedSearches));
    }
  }, []);

  return (
    <nav>
      <img
        src={logo}
        alt="S&S Logo"
        width="50px"
        height="50px"
        title="S&S Logo"
      />
      <div
        className="search-part"
        style={{
          borderBottomLeftRadius:
            searchValue &&
            suggestions.some((suggestion) =>
              suggestion.toLowerCase().includes(searchValue.toLowerCase())
            )
              ? 0
              : '15px',
          borderBottomRightRadius:
            searchValue &&
            suggestions.some((suggestion) =>
              suggestion.toLowerCase().includes(searchValue.toLowerCase())
            )
              ? 0
              : '15px',
          boxShadow:
            searchValue &&
            suggestions.some((suggestion) =>
              suggestion.toLowerCase().includes(searchValue.toLowerCase())
            )
              ? '0 0px 0px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.1)'
              : '0 3px 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        <SearchIcon color="#5F5F5F" size={16} style={{ cursor: 'pointer' }} />
        <input
          title="write something you want to know more about!"
          type="text"
          placeholder="Effectuez une recherche sur S&Search ou inserez une URL"
          value={searchValue || ''}
          onChange={handleInputChange}
          onKeyDown={handleKeyEvent}
        />

        <X
          color="#5F5F5F"
          size={16}
          onClick={() => {
            setSearchValue('');
          }}
          style={{ cursor: 'pointer' }}
        />
        {searchValue &&
          suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(searchValue.toLowerCase())
          ).length > 0 && (
            <ul className="suggestions-list">
              {suggestions
                .filter((suggestion) =>
                  suggestion.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((suggestion, index) => (
                  <li
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
            </ul>
          )}
      </div>
    </nav>
  );
};

export default SearchTopBar;
