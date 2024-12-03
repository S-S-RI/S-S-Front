import React from 'react';
import './ResultItem.css';
import { Link } from 'react-router-dom';
const ResultItem: React.FC<{ _id: string; name: string; content: string }> = ({
  _id,
  name,
  content,
}) => {
  return (
    <div className="result-item">
      <Link to={`/document/${_id}`} state={{ name, content }}>
        <h2>{name}</h2>
      </Link>
      <p>{content}</p>
    </div>
  );
};

export default ResultItem;
