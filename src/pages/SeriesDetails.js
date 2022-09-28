import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios";
import * as S from '../styles/detailsStyled'

const SeriesDetails = () => {

    const {id} = useParams()

    const url = 'https://api.themoviedb.org/3/tv/popular?api_key=2657ec7c38a63770e036df69416ef60c&language=en-US&page=1'
    
    const [serie, setSerie] = useState({})

    const [imagem, setImagem] = useState()

    useEffect(() => {
        axios(url)
        .then(response => response.data.results[id])
        .then(data => setSerie(data))
        .catch((err) => console.log(`Erro na solicitação ${err}`));
    }, [])

    useEffect(() => {
        axios.get(url)
        .then(response => response.data.results[id])
        .then(data => data.backdrop_path)
        .then(data => setImagem(`https://image.tmdb.org/t/p/w500${data}`))
        .catch((err) => console.log(`Erro na solicitação ${err}`));
    }, [])



  return (
    <S.MainStyle>
        <div>
          <S.ImgDetail src={imagem} alt="" />
        </div>
        <S.DivInfos>
          <S.H1><S.Span>Titulo:</S.Span>{serie.name}</S.H1>
          <S.Linguagem> <S.Span>Linguagem:</S.Span> {serie.original_language}</S.Linguagem>
          <S.Overview><S.Span>Descrição:</S.Span> {serie.overview}</S.Overview>
        </S.DivInfos>
    </S.MainStyle>
  )
}

export default SeriesDetails