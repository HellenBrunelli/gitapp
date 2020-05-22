import React, { useState } from 'react';
import axios from 'axios';

import * as S from './styled';
//serve para direcionar a página
import { useHistory } from 'react-router-dom';


export default function Home(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ error, setError ] = useState(false)

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = []
        repositories.map(repository => {
          return (
            repositoriesName.push(repository.name)
          )
        });
        //armazenando o array com os nomes dos repositorios em formato string
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setError(false)
        //quando salvarmos os dados no localstorage, chame a página repositories
        history.push('/repositories');
      })
      .catch(error => {
        setError(true)
      })
  }
  
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input type="text" value={usuario} placeholder="Digite username github" onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Buscar</S.Button>
      </S.Content>
      { error ? <S.ErrorMsg>Verifique o texto digitado, tente novamente</S.ErrorMsg> : ' ' }
    </S.HomeContainer>
  );
}