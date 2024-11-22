import './TopBar.css';
import logo from '../../assets/logo.webp';
import { Pen } from 'lucide-react';
const TopBar = () => {
  const stopWords = [
    'a',
    'an',
    'and',
    'are',
    'as',
    'at',
    'be',
    'by',
    'for',
    'from',
    'has',
    'he',
    'in',
    'is',
    'it',
    'its',
    'of',
    'on',
    'that',
    'the',
    'to',
    'was',
    'were',
    'will',
    'with',
  ];
  return (
    <div className="topbar-section">
      <img src={logo} alt="S&S Logo" title="S&S Logo" />
      <div className="options">
        <span className="add-doc-btn" title="Modify Stoplist">
          <Pen /> <p>StopList</p>{' '}
          <ul className="stoplist-words">
            {stopWords.map((word, index) => (
              <li key={index} className="stoplist-item">
                {word}
                {index < stopWords.length - 1 && (
                  <span className="separator"> | </span>
                )}
              </li>
            ))}
          </ul>
        </span>
        <span className="add-doc-btn" title="Modify Docs">
          <Pen /> <p>Modify Documents</p>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
