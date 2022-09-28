import React from 'react'
import * as S from '../styles/footerStyled'
import logo from '../img/logo.png';
import facebook from '../img/icon-facebook.svg';
import instagram from '../img/icon-instagram.svg';
import twitter from '../img/icon-twitter.svg';
const Footer = () => {
  return (
    <S.FooterStyle>
    <div className='div'>
        <S.Logo src={logo} alt="Logo da filmax" />
        <div>
            <S.UlStyle>
                <S.LiStyle>About</S.LiStyle>
                <S.LiStyle>Events</S.LiStyle>
                <S.LiStyle>Products</S.LiStyle>
                <S.LiStyle>Support</S.LiStyle>
            </S.UlStyle>
        </div>
    </div>
    <S.DivFooter>
        <S.DivRedes>
            <img src={facebook} alt="Icon facebook" />
            <img src={instagram} alt="Icon instagram" />
            <img src={twitter} alt="Icon twitter" />
        </S.DivRedes>
        <S.ParagrafoStyle>&copy; 2022 Luiz Martins</S.ParagrafoStyle>
    </S.DivFooter>
</S.FooterStyle>
  )
}

export default Footer