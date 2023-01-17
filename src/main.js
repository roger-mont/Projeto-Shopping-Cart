import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const x = async () => {
  const productArea = document.querySelector('.products');
  productArea.innerHTML += '<span class="loading">carregando...</span>';
  const pc = await fetchProductsList('computador');
  const loading = document.querySelector('.loading');
  productArea.removeChild(loading);
  pc.forEach((e) => {
    productArea.appendChild(createProductElement(e));
  });
};

window.onload = x();
