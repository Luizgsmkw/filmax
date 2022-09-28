import React from 'react'
import * as S from '../styles/homeStyled'
import {Link} from 'react-router-dom';
import posterEvilDead from "../img/Evil-dead.webp";
import postermadMax from "../img/madMax.png";
import posterSopranos from "../img/posterSopranos.jpg";
import posterAtlanta from "../img/posterAtlanta.jpg";
import posterStarWars from "../img/posterStarWars.jpg";
import posterYuYuHakusho from "../img/posterYuYuHakusho.jpg";
import posterSenhorDosAneis from "../img/posterSenhorDosAneis.jpg";
import posterFleabag from "../img/posterFleabag.jpg";
import familiaAssistindoImg from "../img/familia.jpg";
import pessoaAssistindoFilmeIMg from "../img/people-3281583_640.jpg"
const Home = () => {
    const mulherPipoca = "https://www.reviewgeek.com/p/uploads/2020/04/6b99c880.png?width=1200";
    return (
        <S.MainStyle>
          <section>
              <S.AnuncioStyleLeft>
                <S.DicaStyle src={mulherPipoca} alt="" />
                <S.SectionAnuncio>
                  <S.DivAnuncioLeft>
                    <S.TextoAnuncio>
                    PREPARE A PIPOCA!
                    </S.TextoAnuncio>
                    <S.ParagrafoAnuncio>
                      Com o FilMax você vai estar por dentro dos principais
                      lançamentos do universo cinematográfico e televisivo. Além de
                      ter acesso aos filmes e séries mais bem avaliados pelos nossos
                      especialistas
                    </S.ParagrafoAnuncio>
                  </S.DivAnuncioLeft>
                </S.SectionAnuncio>
              </S.AnuncioStyleLeft>
              <S.AnuncioStyleRight>
                <S.SectionAnuncio>
                  <S.DivAnuncioRight>
                    <S.TextoAnuncio>
                    JUNTE SUA GALERA!
                    </S.TextoAnuncio>
                    <S.ParagrafoAnuncio>
                      Nada melhor que juntar a família e amigos sexta a noite com filmes e séries. O FilMax te proporciona listinhas de filmes/séries para animar sua sexta! 
                    </S.ParagrafoAnuncio>
                  </S.DivAnuncioRight>
                </S.SectionAnuncio>
                <S.DicaStyle src={familiaAssistindoImg} alt="" />
              </S.AnuncioStyleRight>
              <S.AnuncioStyleLeft>
                <S.DicaStyle src={pessoaAssistindoFilmeIMg} alt="" />
                <S.SectionAnuncio>
                  <S.DivAnuncioLeft>
                    <S.TextoAnuncio>
                    NÃO PERCA MAIS TEMPO PROCURANDO FILMES!
                    </S.TextoAnuncio>
                    <S.ParagrafoAnuncio>
                      Com o FilMax você não perde horas procurando filmes e séries para assistir! Nosso catálogo Top Filmes é ideal para quem quer consumir o melhor do universo audiovisual.
                    </S.ParagrafoAnuncio>
                  </S.DivAnuncioLeft>
                </S.SectionAnuncio>
              </S.AnuncioStyleLeft>
          </section>
          <S.ContainerPosters>
            <S.TextoAnuncio>O MELHOR DO AUDIOVIDUAL</S.TextoAnuncio>
            <S.DivPosters>
              <Link to='/topfilmes'>
                  <S.PostersImg src={posterEvilDead} alt="Poster do filme Evil-Dead" />
              </Link>
              <Link to='/filmes'>
                  <S.PostersImg src={postermadMax} alt="Poster do filme MadMax" />
              </Link>
              <Link to='/topseries'>
                  <S.PostersImg src={posterSopranos} alt="Poster da série Sopranos" />
              </Link>
              <Link to='/series'>
                  <S.PostersImg src={posterAtlanta} alt="Poster da série  Atlanta" />
              </Link>
              <Link to='/topfilmes'>
                  <S.PostersImg src={posterStarWars} alt="Poster do filme Star Wars" />
              </Link>
              <Link to='/topseries'>
                  <S.PostersImg
                    src={posterYuYuHakusho}
                    alt="Poster do anime Yu Yu Hakusho"
                  />
              </Link>
              <Link to='/topfilmes'>
                  <S.PostersImg
                    src={posterSenhorDosAneis}
                    alt="Poster do filme Senhor dos Anéis"
                  />
              </Link>
              <Link to='/series'>
                  <S.PostersImg src={posterFleabag} alt="Poster da série Fleabag" />
              </Link>
            </S.DivPosters>
          </S.ContainerPosters>
        </S.MainStyle>
      );
}

export default Home