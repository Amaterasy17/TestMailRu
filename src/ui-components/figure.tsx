import React from 'react'
import styled, {css} from 'styled-components'

type StyledImgProps = {
    isNone: boolean,
}

type StyledImage = {
    arWidth: number,
    arHeight: number,
}

export const FigureContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
  align-items: center;
  justify-content: center;
  //width: 10vw;
  //height: 20vw;
  //min-width: 90px;
  //min-height: 160px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  //height: 215px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1f2128;
  align-items: center;
  
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
  }

  width: 100%;
  height: 100%;
  //width: 100%;
  //height: 215px;
  padding-top: calc(${(props: StyledImage) => props.arHeight/props.arWidth} * 100%);
`;



export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;


  position: absolute; /* абсолютное положение элемент */

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  

  ${({isNone}: StyledImgProps) =>
          isNone &&
          css`
            display: none;
          `
  }
`;