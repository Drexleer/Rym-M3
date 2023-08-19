import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  padding-top: 1em;
`

export const Input = styled.input`
  max-width: 190px;
  height: 100%;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  background-color: #DFDFDF;
  caret-color: #f7f7f8;
  color: #FFFFFF;
  padding: 7px 10px;
  border: 2px solid transparent;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-right: 1px;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid #8A0000;
  }

  &:focus {
    border: 2px solid #8A0000;
    background-color: #0E100E;
  }
`

export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #DFDFDF;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 100%;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #8A0000;
  }
`