import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupAnimation } from './animation.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="trigger" type="button">Click</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <div id="element" class="card one" />
  </div>
`;

setupAnimation(document.querySelector('#trigger'));
