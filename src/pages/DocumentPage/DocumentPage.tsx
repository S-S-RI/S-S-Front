import { useParams } from 'react-router-dom';
import './DocumentPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
const DocumentPage = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/document/${id}`)
      .then((response) => {
        console.log(response);
        if (response.status === 404) {
          setError(true);
          setLoading(false);
        }
        setName('D1');
        setContent(
          response.data.content
            .split('. ')
            .map((sentence: string, index: number) => (
              <p key={index}>{sentence.trim().toLowerCase() + '.'}</p>
            ))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching document:', error);
        setError(true);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <Loader />;
  if (error)
    return (
      <div className="error-page">
        <p>The document you requested doesn't exist</p>
      </div>
    );
  return (
    <div className="documentPage">
      <h1>{name}</h1>
      <div>{content}</div>
    </div>
  );
};

export default DocumentPage;
