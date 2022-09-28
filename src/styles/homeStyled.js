import styled from 'styled-components';

export const MainStyle = styled.section`
  background-color: hsl(219, 30%, 18%);
`;

export const DicaStyle = styled.img`
  width: 550px;
  height: 400px;
  object-fit: cover;
  @media(max-width: 560px){
    width: 300px;
    height: 200px;
    margin-top: 130px;
  }
  
`;

export const AnuncioStyleLeft = styled.div`
  display: flex;
  padding: 100px 80px;
  @media(max-width: 950px){
    margin: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const AnuncioStyleRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 80px;
  @media(max-width: 950px){
    flex-direction: column;
    align-items: center;
  }
`;


export const SectionAnuncio = styled.section`
  display: flex;
  align-items: flex-end;
`;

export const DivAnuncioLeft = styled.div`
  background-color: hsl(219, 30%, 18%);
  color: rgb(200, 200, 200);
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -160px;
  padding-top: 20px;
  padding-left: 15px;

  @media(max-width: 950px){
    margin: auto;
  }

  @media(max-width: 560px){
    width: 300px;
    height: 200px;
  }
  
`;

export const DivAnuncioRight = styled.div`
  background-color: hsl(219, 30%, 18%);
  color: rgb(200, 200, 200);
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
  margin-right: -160px;
  position: relative;
  margin-bottom: -20px;
  @media(max-width: 950px){
    margin: auto;
    order: 0;
  }

  @media(max-width: 560px){
    width: 300px;
    height: 200px;
  }
  
`;

export const TextoAnuncio = styled.h2`
  color: rgb(200, 200, 200);
  width: 400px;
  text-align: center;
  line-height: 35px;
  //font-family: 'Alata', sans-serif;
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 15px;
  @media(max-width: 560px){
    width: 300px;
    margin-top: 100px;
  }
`;

export const ParagrafoAnuncio = styled.p`
  width: 440px;
  line-height: 25px;
  @media(max-width: 950px){
    text-align: center;
  }
  @media(max-width: 560px){
    width: 300px;
  }
`;

export const ContainerPosters = styled.section `
    padding: 0px 70px;

`
export const DivPosters = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const PostersImg = styled.img`
  width: 250px;
  height: 450px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  cursor: pointer;
  filter: grayscale(100%);
  &:hover{
    filter: none;
    transition: 0.6s;
  }
`;