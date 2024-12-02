import { Routes, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage/SearchPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/search" element={<SearchResultPage />} />
    </Routes>
  );
}

export default App;
