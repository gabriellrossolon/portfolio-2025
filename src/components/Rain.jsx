import React from 'react';
import styles from './Rain.module.css';  // Importando o CSS Module

const rainItems = [
  "const x = 10;",
  "let y = 'Hello';",
  "function greet() {}",
  "let z = [1, 2, 3];",
  "console.log('Hello World');",
  "var a = true;",
  "document.querySelector();",
  "if (x > 5) { console.log(x); }",
  "for (let i = 0; i < 5; i++) { console.log(i); }",
  "const sum = (a, b) => a + b;",
  "try { something(); } catch (e) { console.error(e); }",
  "window.addEventListener('load', () => {});",
  "localStorage.setItem('key', 'value');",
  "JSON.parse('{ \"name\": \"John\" }');",
  "new Promise((resolve, reject) => {});"
];


const getRandomPosition = () => {
  const top = Math.random() * -100;  // Posiciona aleatoriamente na parte superior
  const left = Math.random() * 100;  // Posiciona aleatoriamente na largura da tela
  return { top, left };
};

const Rain = () => {
  return (
    <div className={styles.rain}>
      {rainItems.map((item, index) => {
        const position = getRandomPosition(); // Gera uma posição aleatória para cada item
        return (
          <div
            key={index}
            className={styles.rainItem}
            style={{
              top: `${position.top}px`, // Aplica a posição top aleatória
              left: `${position.left}vw`, // Aplica a posição left aleatória
              animationDelay: `${Math.random() * 2}s`, // Aleatoriza o delay da animação
            }}
          >
            <p className="select-none">{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Rain);

