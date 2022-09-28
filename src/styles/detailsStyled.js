import styled from 'styled-components';

export const MainStyle = styled.section`
  background-color: hsl(219, 30%, 18%);
  min-height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 900px) {
    flex-direction: column;
    padding-top: 50px;
  }
`;

export const ImgDetail = styled.img `
  height: 400px;
  width: 300px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const DivInfos = styled.div `
  display: flex;
  flex-direction: column;
  height: 380px;
  justify-content: flex-start;
  color: white;
  margin-left: 30px;
`

export const H1 = styled.h1 `
  margin-bottom: 30px;

`

export const Linguagem = styled.p `
  margin-bottom: 30px;
`

export const Overview = styled.p `
  width: 500px;
  text-align: justify;

  @media(max-width: 560px) {
    width: 300px;
  }

`

export const Span = styled.span `
  color: hsl(0, 100%, 63%);
  font-size: 16px;
  font-weight: 600px;
  margin-right: 5px;
`