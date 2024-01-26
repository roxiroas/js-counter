// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
  <h1>JS Starter</h1>
  <p>Contador: <span id="contador">0</span></p>
  <button id="decrementarBtn">Decrementar</button>
  <button id="incrementarBtn">Incrementar</button>
`;

let contador = 0;

const incrementarContador = () => {
  contador++;
  actualizarInterfaz(contador);
};

const decrementarContador = () => {
  contador--;
  actualizarInterfaz(contador);
};

const actualizarInterfaz = (contador) => {
  document.getElementById('contador').innerText = contador;
  document.getElementById('decrementarBtn').disabled = contador == 0;
};

actualizarInterfaz(contador);

document
  .getElementById('decrementarBtn')
  .addEventListener('click', decrementarContador);

document
  .getElementById('incrementarBtn')
  .addEventListener('click', incrementarContador);
