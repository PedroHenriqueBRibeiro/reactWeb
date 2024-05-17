import { useState, useEffect } from 'react';
import axios from 'axios';

const Chuck = () => {
  const [troca, setTroca] = useState('');
  const [erro, setErro] = useState(false);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('');
  const [id, setId] = useState('');

  const fetchChuck = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      console.log(response);
      setTroca(response.data.value);
      setErro('');
      setUrl(response.data.url);
      setId(response.data.id);
      
    } catch (err) {
      setErro('Erro: ' + err.message);
    }
    setLoading(false);
    
  };


  useEffect(() => {
    fetchChuck();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Chuck Norris</h1>
      {erro ? <p>{erro}</p> : <p>{troca}</p>}
      <button disabled={loading} onClick={fetchChuck}>{loading ? "Carregando" : "Clique aqui"}</button>
      <h2>Link: {url}</h2>
      <h2>Id: {id}</h2>
    </div>
  );
};

export default Chuck;