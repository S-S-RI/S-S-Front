import React from 'react';
import './ResultItem.css';
const ResultItem: React.FC<{ name: string; content: string }> = ({
  name,
  content,
}) => {
  return (
    <div className="result-item">
      <h2>{name}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ResultItem;
