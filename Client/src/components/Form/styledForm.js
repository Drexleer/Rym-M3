import styled from 'styled-components';
import imagen from "../img/Login.jpg"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajustar la altura del contenedor principal */
  background-image: url(${imagen});
`;

export const Formstyles = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2em;
  padding-right: 2em;
  padding-bottom: 0.4em;
  background-color: #171717;
  border-radius: 25px;
  transition: .4s ease-in-out;
  width: 250px; /* Ajustar el ancho del formulario */
  height: 350px;

  &:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }
`;

export const Heading = styled.h1`
  text-align: center;
  margin: 2em;
  color: rgb(255, 255, 255);
  font-size: 1.2em;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
`;

export const InputIcon = styled.svg`
    background-image: url('https://us.123rf.com/450wm/yupiramos/yupiramos1611/yupiramos161101476/66406514-arroba-s%C3%ADmbolo-icono-aislado-ilustraci%C3%B3n-vectorial-dise%C3%B1o.jpg');
  height: 1.3em;
  width: 1.3em;
  fill: white;
`;

export const InputField = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #d3d3d3;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5em;
  margin-bottom: 1em;
`;

export const Button = styled.button`
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  background-color: #252525;
  color: white;

  &:hover {
    background-color: black;
  }
`;

export const Advertencia = styled.p`
color: white;
`;
