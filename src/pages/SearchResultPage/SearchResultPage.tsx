import { useSearchParams } from 'react-router-dom';
import SearchTopBar from '../../components/SearchTopBar/SearchTopBar';
import './SearchResultPage.css';
const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const phrase = searchParams.get('phrase');
  return (
    <div>
      <SearchTopBar phrase={phrase} />
    </div>
  );
};

export default SearchResultPage;
