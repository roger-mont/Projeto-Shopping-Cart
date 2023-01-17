import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const x = async () => {
  const productArea = document.querySelector('.products');
  productArea.innerHTML += '<span class="loading">carregando...</span>';
  try {
    const pc = await fetchProductsList('computador');
    const loading = document.querySelector('.loading');
    productArea.removeChild(loading);
    pc.forEach((e) => {
      productArea.appendChild(createProductElement(e));
    });
  } catch {
    productArea.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    productArea.classList.add('error');
    productArea.classList.remove('products');
  }
};

window.onload = x();
