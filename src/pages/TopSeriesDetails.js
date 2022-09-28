import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios";
import * as S from '../styles/detailsStyled'

const TopSeriesDetails = () => {

    const url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=2657ec7c38a63770e036df69416ef60c&language=en-US&page=1'

    const [topSerie, setTopSerie] = useState({})
    const [imagem, setImagem] = useState()

    const {id} = useParams()

    useEffect(() => {
        axios.get(url)
        .then(response => response.data.results[id])
        .then(data => setTopSerie(data))
    }, [])

    useEffect(() => {
        axios.get(url)
        .then(response => response.data.results[id])
        .then(data => data.backdrop_path)
        .then(data => setImagem(`https://image.tmdb.org/t/p/w500${data}`))
    }, [])

  return (
    <S.MainStyle>
        <div>
          <S.ImgDetail src={imagem} alt="" />
        </div>
        <S.DivInfos>
          <S.H1><S.Span>Titulo:</S.Span>{topSerie.name}</S.H1>
          <S.Linguagem> <S.Span>Linguagem:</S.Span> {topSerie.original_language}</S.Linguagem>
          <S.Overview><S.Span>Descrição:</S.Span> {topSerie.overview}</S.Overview>
        </S.DivInfos>
    </S.MainStyle>
  )
}

export default TopSeriesDetails