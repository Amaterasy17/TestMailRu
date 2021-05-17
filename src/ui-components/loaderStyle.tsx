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

export const loaderStyles = createUseStyles({
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
        backgroundColor: 'red',
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