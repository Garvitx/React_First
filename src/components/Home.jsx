import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import styles from './Home.css'; // Import the CSS module
import ThreeDSphere from './Sphere';
import TextShpere from './TextSphere';

const Home = () => {
  return (
    <div className={styles.centeredContent}>
      <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient">
            <stop color="#000" />
          </linearGradient>
          <pattern
            id="wave"
            x="0"
            y="-0.2"
            width="100%"
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            <path
              id="wavePath"
              d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
              mask="url(#mask)"
              fill="url(#gradient)"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="1.5s"
                type="translate"
                from="0,0"
                to="40,0"
                repeatCount="indefinite"
              />
            </path>
          </pattern>
        </defs>
        <text textAnchor="middle" x="0" y="15" fontSize="8" fill="#f5f5f5" fillOpacity="0.7">
          GAZZETTE
        </text>
        <text textAnchor="middle" x="50" y="15" fontSize="8" fill="url(#wave)" fillOpacity="1">
          GAZZETTE
        </text>
      </svg>
      <div className='buttonContainer'>
        <Link to="/" className='button'>Home</Link>
        <Link to="/about" className='button'>About</Link>
        <Link to="/resources" className='button'>Resources</Link>
      </div>
      <TextShpere></TextShpere>
      
    </div>
  );
};

export default Home;
