import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(displayedText => displayedText + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);
    
    return () => {
      clearInterval(intervalId);
    }
  }, [text, delay]);

  return <span className="Typewriter" dangerouslySetInnerHTML={{ __html: displayedText }}></span>
};

export default Typewriter;
