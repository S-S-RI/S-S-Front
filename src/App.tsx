import { Routes, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage/SearchPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';
import DocumentPage from './pages/DocumentPage/DocumentPage';
import Error404 from './pages/Error404/Error404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/document/:id" element={<DocumentPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
