import './Steps.css';
const Steps = () => {
  return (
    <section className="steps">
      <h2>Tokenisation</h2>
      <div className="container">
        <h4>phrase=['une','phrase','de','test']</h4>
      </div>
      <h2>Collocation de mots</h2>
      <div className="container">
        <h4>phrase=['une phrase','de','test']</h4>
      </div>
      <h2>Filtrage des stop-words</h2>
      <div className="container">
        <h4>phrase=['une phrase','test']</h4>
      </div>
      <h2>Ponderation</h2>
      <h2>Fichier Inverse</h2>
    </section>
  );
};

export default Steps;
