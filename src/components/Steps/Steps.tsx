import React from 'react';
import './Steps.css';
const Steps: React.FC<{ steps: string[] }> = ({ steps }) => {
  return (
    <section className="steps">
      <h2>Tokenisation</h2>
      <div className="container">
        <h4>{steps[0]}</h4>
      </div>
      <h2>Collocation de mots et stopList</h2>
      <div className="container">
        <h4>{steps[1]}</h4>
      </div>
      <h2>Ponderation</h2>
      <h2>Fichier Inverse</h2>
    </section>
  );
};

export default Steps;
