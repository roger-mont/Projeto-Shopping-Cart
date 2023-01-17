export const getAddress = async (cep) => {
  const urlAPI1 = `https://cep.awesomeapi.com.br/json/${cep}`;
  const urlAPI2 = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  const apiresearcher = [urlAPI1, urlAPI2];
  const x = await Promise.any(apiresearcher);
  const response = await fetch(x);
  const data = await response.json();
  if (data.type || data.code) {
    console.log('erro');
  } else {
    const { address, district, city, state } = data;
    console.log(`${address} - ${district} - ${city} - ${state}`);
  }
};

getAddress('69079300');
//   const urlAPI1 = `https://cep.awesomeapi.com.br/json/${cep}`;
//   const response1 = await fetch(urlAPI1);
//   const address1 = await response1.json();
//   if (address1.code) {
//     throw new Error('CEP não encontrado')
//   }
//   const { address, district, city, state } = adress;
//   return `${address} - ${district} - ${city} - ${state}`;

// };

export const searchCep = () => {
  // seu código aqui
};
