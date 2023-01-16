import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('FetchSImulator é uma função', async () => {
    expect(fetchProduct).toBeInstanceOf(Function)
  });

  it('Se chamado sem parametros, retorna um erro', async () => {
    await expect(fetchProduct()).rejects.toThrowError();
  });

  it('Se chamado com o parametro "MLB1405519561", retorna o valor do arquivo product.js', async () => {
    await expect(fetchProduct('MLB1405519561')).resolves.toEqual(product)
  })
})