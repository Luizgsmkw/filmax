import styled from 'styled-components';

export const MainStyle = styled.section`
  background-color: hsl(219, 30%, 18%);
  min-height: 99vh;
`;
export const DivBusca = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 600px;
  padding-left: 30px;

  @media(max-width: 750px){
    flex-direction: column;
    margin: auto;
    justify-content: center;
    width: 300px;
  }
`;

export const TextoBusca = styled.p`
  font-size: 20px;
  color: hsl(0, 100%, 63%);
`;

export const InputBusca = styled.input`
  padding-left: 10px;
  height: 40px;
  width: 300px;
  border-radius: 20px;
`;

export const ContainerStyle = styled.section`
  background-color: hsl(219, 30%, 18%);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 550px;
`;

export const ImgStyle = styled.img`
  width: 300px;
  height: 400px;
`;

export const UlStyle = styled.ul`
  list-style: none;
`;

export const LiStyle = styled.li`
  color: white;
  padding-top: 10px;
  display: flex;
  align-items: center;
  &:hover {
    color: hsl(0, 100%, 63%);
  }
`;

export const IconEstrela = styled.img`
  padding-right: 5px;
`;

export const Button = styled.button `
  padding: 0.6rem 2rem;
  border: 2px solid  hsl(0, 100%, 63%);
  color: #ffffff;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: transparent;
  width: 300px;
  cursor: pointer;
  margin-top: 15px;
  &:hover{
    background-color: hsl(0, 100%, 63%);
  }
`