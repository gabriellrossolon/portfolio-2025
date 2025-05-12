import React from 'react';
import styles from './AnimatedText.module.css';  // Importando o CSS Module

const AnimatedText = ({ text }) => {
  return (
    <div>
      <h1 className={`text-4xl md:text-6xl font-semibold ${styles['animate-text']}`}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
