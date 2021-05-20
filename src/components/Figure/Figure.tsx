import React, {HTMLProps, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Loader} from "@components/Loader/Loader";
import {createUseStyles} from "react-jss";
import {FigureContainer, Image, ImageContainer} from "../../ui-components/figure";
import {Figcaption} from "../../ui-components/figcaption";
import {Icon} from "@components/Icon/Icon";
import styled from "styled-components";




export interface FigureProps {
    children?: JSX.Element|JSX.Element[]|string|any,
    src: string,
    arWidth?: number,
    arHeight?: number,
}

export const Figure = ({children, src, arWidth = 9, arHeight = 16}: FigureProps) => {
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


    useEffect(()=> {
        console.log('a[a[[a[a[')
        console.log(FigureContainer.width);
    }, [])

    // const imageStyle = image();


    return (
        <>
            <FigureContainer id='container'>
                <ImageContainer arHeight={arHeight} arWidth={arWidth}>
                    {loading && <Loader/>}
                    <Image isNone={loading || error} src={src} alt={'Загрузка'} onLoad={onLoading} onError={onError}/>
                    {error && <Icon/>}
                </ImageContainer>

            </FigureContainer>
            <Figcaption>
                {children}
            </Figcaption>
        </>
    );
}


