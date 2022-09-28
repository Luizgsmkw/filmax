import React, {useEffect, useState} from 'react'
import axios from "axios";
import iconEstrela from "../img/hollywood-star.png";
import {Link} from 'react-router-dom';
import * as S from '../styles/topfilmesStyled'

const TopFilmes = () => {

  const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2657ec7c38a63770e036df69416ef60c&language=en-US&page=1'

  const [topFilmes, setTopFilmes] = useState([])
  const [filtroTopFilmes, setFiltroTopFilmes] = useState([])

  useEffect(() => {
    axios.get(url)
    .then(response => response.data.results.map((item) => {
      return {
        ...item,
        imagem: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      };
    }))
    .then(data => {
      setTopFilmes(data)
      setFiltroTopFilmes(data)
    })
    .catch((err) => console.log(`Erro na solicitação ${err}`));
    
  }, [])

  const handleChange = (event) => {
    const ListaFiltrada = topFilmes.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      } else {
        return "";
      }
    });
    setFiltroTopFilmes(ListaFiltrada)
    console.log(filtroTopFilmes);
  };


  return (
    <S.MainStyle>
        <S.DivBusca>
          <S.TextoBusca>Busque por favorito: </S.TextoBusca>
          <S.InputBusca
            type="text"
            onChange={handleChange}
            placeholder="Digite aqui..."
          />
        </S.DivBusca>
        <S.ContainerStyle>
          {filtroTopFilmes.map((item, index) => {
            return (
              <S.CardStyle key={index}>
                <S.ImgStyle src={item.imagem} alt="posters" />
                <S.UlStyle>
                  <S.LiStyle>{item.title}</S.LiStyle>
                  <S.LiStyle>
                    <S.IconEstrela src={iconEstrela} alt="Icon deEstrela" />
                    {item.vote_average}
                  </S.LiStyle>
                </S.UlStyle>
                <Link to={`/topfilmes/${index}`}><S.Button>Saiba mais...</S.Button></Link>
              </S.CardStyle>
            );
          })}
        </S.ContainerStyle>
      </S.MainStyle>
  );
}

export default TopFilmes