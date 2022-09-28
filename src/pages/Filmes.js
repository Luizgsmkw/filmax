import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import * as S from '../styles/filmesStyled'
import axios from "axios";
import iconEstrela from "../img/hollywood-star.png";
const Filmes = () => {

  const [filmes, setFilmes] = useState([])
  const [filtroFilmes, setFiltroFilmes] = useState([])
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b8f6888c6b8e7888209c5a339b094ce0&language=en-US&page=1'

  useEffect(() => {
    axios.get(url)
    .then(response => response.data.results.map((item) => {
      return {
        ...item,
        imagem: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      };
    }))
    .then(data => {
      setFilmes(data)
      setFiltroFilmes(data)
    })
    .catch((err) => console.log(`Erro na solicitação ${err}`));
  }, [])

  const handleChange = (event) => {
    const ListaFiltrada = filmes.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      } else {
        return "";
      }
    });
    setFiltroFilmes(ListaFiltrada)
  };

  console.log(filmes)

  return (
    <>
    <S.MainStyle>
      <S.DivBusca>
        <S.TextoBusca>Busque por lançamento: </S.TextoBusca>
        <S.InputBusca
          type="text"
          onChange={handleChange}
          placeholder="Digite aqui..."
        />
      </S.DivBusca>
      <S.ContainerStyle>
         {filtroFilmes.map((item, index) => {
          return (
            <S.CardStyle key={index.id}>
              <S.ImgStyle src={item.imagem} alt="posters" />
              <S.UlStyle>
                <S.LiStyle>{item.title}</S.LiStyle>
                <S.LiStyle>
                  <S.IconEstrela src={iconEstrela} alt="Icon deEstrela" />
                  {item.vote_average}
                </S.LiStyle>
              </S.UlStyle>
                <Link to={`/filmes/${index}`}><S.Button >Saiba mais...</S.Button></Link>
            </S.CardStyle>
          );
        })} 
      </S.ContainerStyle>
    </S.MainStyle>
    </>
  )
}

export default Filmes