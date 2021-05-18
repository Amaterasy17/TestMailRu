import React, {HTMLProps} from 'react'
import PropTypes from 'prop-types'
import {Loader} from "../Loader/Loader";
import {createUseStyles} from "react-jss";
import {FigureContainer, Image, ImageContainer} from "../../ui-components/figure";
import {Figcaption} from "../../ui-components/figcaption";
import {Icon} from "../Icon/Icon";

// const image = createUseStyles({
//     image: {
//         background: 'url('/')',
//     }
// })


export interface FigureProps {
    children?: JSX.Element|JSX.Element[]|string|any,
    src: string,
    arWidth?: number,
    arHeight?: number,
}

export const Figure = ({children, src, arWidth = 16, arHeight = 9}: FigureProps) => {
    const onLoading = (ev: React.SyntheticEvent<HTMLImageElement>) => {
        console.log('onSuccess');
        setLoading(false);
    };

    const onError = (ev: React.SyntheticEvent<HTMLImageElement>) => {
        console.log('onError');
        setLoading(false);
        setError(true);
    };


    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    // const imageStyle = image();


    return (
        <>
            <FigureContainer>
                <ImageContainer>
                    {loading && <Loader/>}
                    <Image isNone={loading || error} src={src} alt={'Загрузка'} onLoad={onLoading} onError={onError}/>
                    {error && <Icon/>}
                </ImageContainer>
                <Figcaption>
                    {children}
                </Figcaption>
            </FigureContainer>
        </>
    );
}


