import styled from 'styled-components';


export const FooterStyle = styled.footer`
    background-color: black;
    height: 150px;
    padding: 10px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    @media(max-width: 750px){
    height: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  }
`
export const Logo = styled.img `
    width: 85px;
    height: 75px;

`

export const UlStyle = styled.ul `
        display: flex;
        list-style: none;
        justify-content: space-between;
        width: 300px;
        color: white;
        padding-left: 5px;
    `

export const LiStyle = styled.li `
color: white;
&:hover{
    color: hsl(0, 100%, 63%);
}
`

export const ParagrafoStyle = styled.p `
color: white;
font-style: italic;
&:hover{
    color: hsl(0, 100%, 63%);
}
`

export const DivRedes = styled.div`
   width: 150px;
   display: flex;
   justify-content: space-evenly;
`

export const DivFooter = styled.div`
   width: 180px;
   padding-top: 30px;
   height: 110px;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`