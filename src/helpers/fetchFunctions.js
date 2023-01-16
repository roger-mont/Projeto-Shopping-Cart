export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (product) => {
  if (!product) {
    throw new Error('Termo de busca não informado')
  }
  try{
    const urlAPI = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(urlAPI);
    const data = await response.json()
    return data.results;
  } catch (error) {
    throw new Error('Termo de busca não informado')
  }
};
