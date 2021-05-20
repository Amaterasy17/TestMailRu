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
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1f2128;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: calc(${(props: StyledImage) => props.arHeight/props.arWidth} * 100%);
`;



export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  position: absolute;
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