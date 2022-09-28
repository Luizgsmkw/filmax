import React, {useEffect, useState} from 'react'
import axios from "axios";
import iconEstrela from "../img/hollywood-star.png";
import {Link} from 'react-router-dom';
import * as S from '../styles/topseriesStyled'

const TopSeries = () => {

  const url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=2657ec7c38a63770e036df69416ef60c&language=en-US&page=1'

  const [topSeries, setTopSeries] = useState([])
  const [filtroTopSeries, setFiltroTopSeries] = useState([])
  
  useEffect(() => {
    axios.get(url)
    .then(response => response.data.results.map((item) => {
      return{
        ...item,
        imagem: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      }
    }))
    .then(data => {
     setTopSeries(data)
     setFiltroTopSeries(data)
    })
    .catch((err) => console.log(`Erro na solicitação ${err}`));
  }, [])

  const handleChange = (event) => {
    const ListaFiltrada = topSeries.filter((item) => {
      if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      } else {
        return "";
      }
    });
      setFiltroTopSeries(ListaFiltrada)
      console.log(filtroTopSeries)
  };


  return (
    <S.MainStyle>
      <S.DivBusca>
        <S.TextoBusca>Busque por favorito: </S.TextoBusca>
       <S.InputBusca onChange={handleChange} />
      </S.DivBusca>
      <S.ContainerStyle>
        {filtroTopSeries.map((item, index) => {
          return (
            <S.CardStyle key={index}>
              <S.ImgStyle src={item.imagem} alt="posters" />
              <S.UlStyle>
                <S.LiStyle>{item.name}</S.LiStyle>
                <S.LiStyle>
                  <S.IconEstrela src={iconEstrela} alt="Icon deEstrela" />
                  {item.vote_average}
                </S.LiStyle>
              </S.UlStyle>
              <Link to={`/topseries/${index}`}><S.Button>Saiba mais...</S.Button></Link>
            </S.CardStyle>
          );
        })}
      </S.ContainerStyle>
    </S.MainStyle>
  );
}

export default TopSeries