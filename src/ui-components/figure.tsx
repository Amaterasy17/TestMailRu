import React from 'react'
import styled, {css} from 'styled-components'

type StyledImgProps = {
    isNone: boolean,
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
  width: 120px;
  height: 215px;
  background: white;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1f2128;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: block;

  ${({isNone}: StyledImgProps) =>
          isNone &&
          css`
            display: none;
          `
  }
`;