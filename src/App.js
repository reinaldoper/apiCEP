import './App.css';
import { useState } from 'react';
import myCep from './services/fetchApi';

function App() {
  const [cep, setCep] = useState('');
  const [fetch, setFetch] = useState({});

  const handChange = ({ target }) => {
    const result = target.value;
    setCep(result);
  };

  const handClick = async () => {
    const result = cep;
    if (result.length < 8) {
      alert('CEP incorreto!');
    }
    const r = await myCep(result);
    if (r.erro) {
      alert('CEP incorreto!');
    }
    setFetch(r);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Aplicação de localizar CEP</h2>
        <div className='div-center'>
          <input type='text' placeholder='Seu CEP aqui!' onChange={ handChange }/>
          <button type='button' onClick={ handClick }>LER CEP</button>
        </div>
        <ol>
            <li><h4>cep: { fetch.cep }</h4></li>
            <li><h4>logradouro: { fetch.logradouro }</h4></li>
            <li><h4>bairro: { fetch.bairro }</h4></li>
            <li><h4>localidade: { fetch.localidade }</h4></li>
            <li><h4>{ fetch.complemento }</h4></li>
            <li><h4>UF: { fetch.uf }</h4></li>
            <li><h4>DDD: { fetch.ddd }</h4></li>
            <li><h4>{ fetch.siafi }</h4></li>
        </ol>
      </header>
    </div>
  );
}

export default App;
