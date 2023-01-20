import { saveCartID } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

// Funcao para capturar o ID do produto selecionado
const pegaId = () => {
  const addCartButtons = document.querySelectorAll('.product__add');
  addCartButtons.forEach((buttom) => {
    buttom.addEventListener('click', async () => {
      const idProduct = buttom.parentNode.firstChild.innerText;
      saveCartID(idProduct);
      const produto = await fetchProduct(idProduct);
      const cartProduct = createCartProductElement(produto);
      const cartProducts = document.querySelector('.cart__products');
      cartProducts.appendChild(cartProduct);
    });
  });
};

const loadFunction = async () => {
  const productArea = document.querySelector('.products');
  productArea.innerHTML += '<span class="loading">carregando...</span>';
  try {
    const pc = await fetchProductsList('computador');
    const loading = document.querySelector('.loading');
    productArea.removeChild(loading);
    pc.forEach((e) => {
      productArea.appendChild(createProductElement(e));
    });
    pegaId();
  } catch {
    productArea.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    productArea.classList.add('error');
    productArea.classList.remove('products');
  }
};

window.onload = loadFunction();
