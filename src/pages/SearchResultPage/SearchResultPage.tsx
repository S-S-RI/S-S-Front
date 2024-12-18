import { useSearchParams } from 'react-router-dom';
import SearchTopBar from '../../components/SearchTopBar/SearchTopBar';
import './SearchResultPage.css';
import ResultsList from '../../components/ResultsList/ResultsList';
import Steps from '../../components/Steps/Steps';
import { useEffect, useState } from 'react';
import { ResultItemType } from '../../types/types';
const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<ResultItemType[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const phrase: string = searchParams.get('phrase') ?? '';

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchSearchResults = async (phrase: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phrase: phrase.trim() }),
      });

      const data = await response.json();
      console.log('Backend response:', data);

      const extractedResults = data.rankedDocuments.map(
        (doc: {
          document: { _id: string; name: string; content: string };
        }) => ({
          _id: doc.document._id,
          name: doc.document.name,
          content: doc.document.content,
        })
      );

      setResults(extractedResults);
      setSteps(data.steps);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (phrase != null) {
      fetchSearchResults(phrase);
    }
  }, []);

  if (isLoading)
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="search-result-page">
      <SearchTopBar phrase={phrase} fetchSearchResults={fetchSearchResults} />
      <main>
        <ResultsList list={results} />
        <Steps steps={steps} />
      </main>
    </div>
  );
};

export default SearchResultPage;
