import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Logo = styled.img `
    width: 85px;
    height: 75px;
`

export const HeaderStyle = styled.section `
        background-color: hsl(216, 53%, 9%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px;
    
    @media(max-width: 730px){
        nav{
            display: none;
        }
        .ativar{
            display: initial;
        }
        ul{
            flex-direction: column;
            align-items: center;
            background-color: white;
            width: 200px;
            position: absolute;
            top: 80px;
            right: 30px;
            height: 300px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            background-color: hsl(215, 51%, 25%);
            border-radius: 10px;
        }
       }
`

export const MenuHamburguer = styled.img `
    display: none;
    
    filter: invert(42%) sepia(87%) saturate(3315%) hue-rotate(338deg) brightness(103%) contrast(105%);
    
    @media(max-width: 730px){
            display: initial;
       }
`

export const UlStyle = styled.ul `
        display: flex;
        list-style: none;
        justify-content: space-around;
        width: 600px;
    `

export const LinkHeader = styled(Link) `
    color: hsl(0, 100%, 63%);
    text-decoration: none;
    cursor: pointer;
`