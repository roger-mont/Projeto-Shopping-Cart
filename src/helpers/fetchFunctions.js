export const fetchProduct = async (productID) => {
  if (!productID) {
    throw new Error('ID não informado');
  }
  try {
    const urlAPIId = `https://api.mercadolibre.com/items/${productID}`;
    const h = await fetch(urlAPIId);
    const id = await h.json();
    return id;
  } catch (error) {
    throw new Error('ID não informado');
  }
};

export const fetchProductsList = async (product) => {
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const urlAPI = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Termo de busca não informado');
  }
};
