import React from 'react';
import './ResultsList.css';
import { ResultItemType } from '../../types/types';
import ResultItem from '../ResultItem/ResultItem';
const ResultsList: React.FC<{ list: ResultItemType[] }> = ({ list }) => {
  return (
    <section className="result-list">
      <h3>Found {list.length} results from more than 400 documents</h3>
      {list.map((item) => (
        <ResultItem
          key={item._id}
          _id={item._id}
          name={item.name}
          content={item.content}
        />
      ))}
    </section>
  );
};

export default ResultsList;
