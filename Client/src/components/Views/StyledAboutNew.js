import styled from 'styled-components';

export const LinkRedesSociales = styled.a`
  color: white;
  transition: 0.4s ease-in-out;
  font-size: 2em;

  &:hover {
    color: red;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
`;

export const Card = styled.div`
  width: 30em;
  height: 35.5em;
  background: #171717;
  transition: 1s ease-in-out;
  clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  font-weight: bold;
  color: white;
  text-align: center;
  display: block;
  font-size: 1.2em;
  padding-top: 2em;
`;

export const Info = styled.span`
  font-weight: 400;
  color: white;
  display: block;
  text-align: center;
  font-size: 1em;
  margin: 1em;
  padding-top: 2em;
`;

export const Image = styled.img`
  width: 12em;
  height: 12em;
  margin-bottom: 0;
  margin-left: 30%;
`;

export const Share = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
`;

export const Button = styled.button`
  padding: 0.8em 1.7em;
  display: block;
  margin: auto;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background: #ffffff;
  color: rgb(0, 0, 0);
  transition: 0.4s ease-in-out;

  &:hover {
    background: red;
    color: white;
    cursor: pointer;
  }
`;