import React, {HTMLProps} from 'react'
import PropTypes from 'prop-types'
import {Loader} from "../Loader/Loader";
import {createUseStyles} from "react-jss";
import {FigureContainer, Image, ImageContainer} from "../../ui-components/figure";

const image = createUseStyles({
    image: {
        visibility: 'hidden',
    }
})


export interface FigureProps {
    children?: JSX.Element|JSX.Element[]|string|any,
    src: string,
    arWidth?: number,
    arHeight?: number,
}

export const Figure = ({children, src, arWidth = 16, arHeight = 9}: FigureProps) => {
    const Loading = () => {
        setLoading(false);
    }
    const [loading, setLoading] = React.useState(true);
    const [visible, setVisible] = React.useState(false);

    const imageStyle = image();

    React.useEffect(() => {


    }, [loading]);

    return (
        <>
            <FigureContainer>
                <ImageContainer>
                    {loading && <Loader/>}
                    <Image src={src} alt={'упс'} onLoad={Loading}/>
                </ImageContainer>
                <figcaption>
                    {children}
                </figcaption>
            </FigureContainer>
        </>
    );
}


