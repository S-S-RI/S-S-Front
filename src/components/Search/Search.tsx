import { SearchIcon } from 'lucide-react';
import './Search.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
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

  const fetchSearchResults = async (phrase: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phrase: phrase.trim() }),
      });
  
      const data = await response.json();
      console.log('Backend response:', data);
      setIsLoading(false);
  
      navigate(`/search?phrase=${phrase}`, { state: { searchResults: data } });
    } catch (error) {
      console.error('Error fetching search results:', error);
      setIsLoading(false);
    }
  };
  
  const handleSubmit = () => {
    if (searchValue.trim()) {
      saveSearch(searchValue);
      fetchSearchResults(searchValue);
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    navigate(`/search?phrase=${suggestion}`);
  };

  useEffect(() => {
    const savedSearches = localStorage.getItem('searches');
    if (savedSearches) {
      setSuggestions(JSON.parse(savedSearches));
    }
  }, []);

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
        <SearchIcon
          color="#5F5F5F"
          onClick={handleSubmit}
          style={{ cursor: 'pointer' }}
        />
        <input
          title="write something you want to know more about!"
          type="text"
          placeholder="Effectuez une recherche sur S&Search ou inserez une URL"
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyEvent}
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
      
        {isLoading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Search;
