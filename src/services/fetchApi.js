const myCep = async (cep) => {
  const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const response = await request.json();
  /* console.log(response); */
  return response;
};

export default myCep;