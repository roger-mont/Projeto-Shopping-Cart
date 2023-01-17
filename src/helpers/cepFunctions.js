export const getAddress = async (cep) => {
  const urlAPI1 = `https://cep.awesomeapi.com.br/json/${cep}`;
  const urlAPI2 = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  try {
    const apiresearcher = [urlAPI1, urlAPI2];
    const x = await Promise.any(apiresearcher);
    const response = await fetch(x);
    const data = await response.json();
    if (data.cep) {
      const { address, district, city, state } = data;
      return (`${address} - ${district} - ${city} - ${state}`);
    }
    throw new Error('CEP não encontrado');
  } catch (e) {
    return 'CEP não encontrado';
  }
};

export const searchCep = async () => {
  const input = document.querySelector('.cep-input').value;
  const cartAdress = document.querySelector('.cart__address');
  cartAdress.innerHTML = await getAddress(input);
};
