import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from "axios";
import * as S from '../styles/detailsStyled'

const FilmesDetails = () => {
    
    const {id} = useParams()
    
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=b8f6888c6b8e7888209c5a339b094ce0&language=en-US&page=1`

    const [filme, setFilme] = useState({})
    const [imagem, setImagem] = useState({})
    
    useEffect(() => {
        axios.get(url)
        .then(response => response.data.results[id])
        .then(data => setFilme(data))
        .catch((err) => console.log(`Erro na solicitação ${err}`));
      }, [])

      useEffect(() => {
        axios.get(url)
        .then(response => response.data.results[id])
        .then(data => data.backdrop_path)
        .then(data => setImagem(`https://image.tmdb.org/t/p/w500${data}`))
      }, [])

      console.log(filme)
      

  return (
    <S.MainStyle>
        <div>
            <S.ImgDetail src={imagem} alt="" />
        </div>
        <S.DivInfos>
            <S.H1><S.Span>Titulo:</S.Span> {filme.title}</S.H1>
            <S.Linguagem> <S.Span>Linguagem:</S.Span> {filme.original_language}</S.Linguagem>
            <S.Overview><S.Span>Descrição:</S.Span> {filme.overview}</S.Overview>
        </S.DivInfos>
    </S.MainStyle>
  )
}

export default FilmesDetails