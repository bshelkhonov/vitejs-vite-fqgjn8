import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupAnimation } from './animation.js';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="trigger" type="button">Click</button>
    </div>
    <div id="element" class="card one" />
  </div>
`;

setupAnimation(document.querySelector('#trigger'));
