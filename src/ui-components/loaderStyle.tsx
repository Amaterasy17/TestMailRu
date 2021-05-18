import React from 'react'
import styled from 'styled-components'
import {createUseStyles} from 'react-jss'

export const loader = () => {
    const loaderStyles = createUseStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
        },
        circle: {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            margin: '7px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            '&:before': {
                content: '',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                opacity: '0.7',
                animation: 'scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02)'
            }
        },
    });
}

interface propsStyle {
    time: string,
}

interface propsKeyFrame {
    key: string,
}


export const keyFrame = createUseStyles({
    '@keyframes lds-ring': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        }
    }
});

export const loaderStyles = createUseStyles({
    loaderRing: {
        display: 'inline-block',
        position: 'relative',
        width: '80px',
        height: '80px',
    },
    loaderRingPart: {
        boxSizing: 'border-box',
        display: 'block',
        position: 'absolute',
        width: '64px',
        height: '64px',
        border: '8px solid #46dbd3',
        borderRadius: '50%',
        animation: `lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
        borderColor: '#46dbd3 transparent transparent transparent',
    },
});

export const loaderPart = createUseStyles({
    loaderAnimationRing: {
        animationDelay: (props: propsStyle) => props.time,
    }
});