import styled, { keyframes } from 'styled-components'

export const Button = styled.button`
  margin-left: 10px;
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset, rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px, rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px, rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  

  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset, rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px, rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px, rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`

const gradientAnimation = keyframes`
  0% {
    opacity: 0.3;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0.3;
  }
`;

export const MyCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 400px;
  perspective: 1000px;
`;

export const CardTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
`;

export const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;

  ${MyCard}:hover & {
    transform: rotateY(180deg);
  }
`;

export const Side = styled.div`
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  color: white;
  box-shadow: 0 0 0.3em rgba(255, 255, 255, 0.5);
  font-weight: 500;

  &::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 110%;
    height: 110%;
    position: absolute;
    z-index: -1;
    border-radius: 1em;
    filter: blur(20px);
    animation: ${gradientAnimation} 5s linear infinite;
  }
`;

export const FrontSide = styled(Side)`
background: #c94b4b;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4b134f, #c94b4b);
background: linear-gradient(to right, #4b134f, #c94b4b);
`;

export const BackSide = styled(Side)`
  background: #ECE9E6;
  background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);
  background: linear-gradient(to right, #FFFFFF, #ECE9E6); 
  transform: rotateY(180deg);
  color: #000000;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`