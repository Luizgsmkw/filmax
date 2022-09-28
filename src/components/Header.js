
import * as S from '../styles/headerStyled'

import logo from '../img/logo.png';
import menuHamburguer from '../img/icon-hamburger.svg'
import menuHamburguerFechado from '../img/claro.png'


const Header = () => {



    let ativarMenu = true;
    const img1 =  menuHamburguerFechado
    const img2 = menuHamburguer

  return (
    <S.HeaderStyle>
                <p><S.LinkHeader to='/'><S.Logo src={logo} alt="Logo da filmax" /></S.LinkHeader></p>
                <nav className='' id='navBar'>
                    <S.UlStyle>
                        <li><S.LinkHeader to='/filmes'>Lançamentos Filmes</S.LinkHeader></li>
                        <li><S.LinkHeader to='/series'>Lançamentos Séries</S.LinkHeader></li>
                        <li><S.LinkHeader to='/topfilmes'>Top Filmes</S.LinkHeader></li>
                        <li><S.LinkHeader to='/topseries'>Top Séries</S.LinkHeader></li>
                    </S.UlStyle>
                </nav>
                <S.MenuHamburguer id='menuHamburguer' onClick={() => {
                    const navBar = document.getElementById('navBar');
                    const menuHamburguer = document.getElementById('menuHamburguer')
                    if(ativarMenu === true){
                        navBar.classList.add('ativar');
                        menuHamburguer.setAttribute('src', `${img1}`)
                    } else {
                        navBar.classList.remove('ativar')
                        menuHamburguer.setAttribute('src', `${img2}`)
                    }
                    ativarMenu = !ativarMenu
                }} src={menuHamburguer} alt="Menu Hamburguer" />
    </S.HeaderStyle>
  )
}

export default Header