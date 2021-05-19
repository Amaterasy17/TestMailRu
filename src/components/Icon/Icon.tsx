import styled from "styled-components";

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
`;

export const G = styled.g`
  fill: white;
`;

export const Icon = () => {
    return (
        <IconDiv>
            <svg height="512" viewBox="0 0 512 512" color="white" width="512" xmlns="http://www.w3.org/2000/svg">
                <G>
                    <path
                        d="m476 48h-440a28.032 28.032 0 0 0 -28 28v360a28.032 28.032 0 0 0 28 28h440a28.032 28.032 0 0 0 28-28v-360a28.032 28.032 0 0 0 -28-28zm-440 16h440a12.013 12.013 0 0 1 12 12v20h-464v-20a12.013 12.013 0 0 1 12-12zm440 384h-440a12.013 12.013 0 0 1 -12-12v-324h464v324a12.013 12.013 0 0 1 -12 12z"/>
                    <path d="m40 88h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16z"/>
                    <path d="m72 88h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16z"/>
                    <path d="m104 88h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16z"/>
                    <path
                        d="m136 200a80 80 0 1 0 80 80 80.091 80.091 0 0 0 -80-80zm0 144a64 64 0 1 1 64-64 64.072 64.072 0 0 1 -64 64z"/>
                    <path
                        d="m165.657 250.343a8 8 0 0 0 -11.314 0l-18.343 18.343-18.343-18.343a8 8 0 0 0 -11.314 11.314l18.343 18.343-18.343 18.343a8 8 0 0 0 11.314 11.314l18.343-18.343 18.343 18.343a8 8 0 1 0 11.314-11.314l-18.343-18.343 18.343-18.343a8 8 0 0 0 0-11.314z"/>
                    <path d="m448 232h-192a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16z"/>
                    <path d="m256 272h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16z"/>
                    <path d="m448 280h-192a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16z"/>
                    <path d="m352 304h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16z"/>
                    <path d="m384 304h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z"/>
                    <path d="m448 256h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16z"/>
                </G>
            </svg>
        </IconDiv>
    );
}