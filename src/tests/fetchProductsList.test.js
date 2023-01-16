import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(fetchProductsList).toBeInstanceOf(Function)
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await expect(fetchProductsList()).rejects.toThrowError();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await expect(fetchProductsList('computador')).resolves.toEqual(computadorSearch)
  });

  // it('...', () => {
  // });
});
