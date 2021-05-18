import React from 'react'
import PropTypes from 'prop-types'
import {Loader} from "../Loader/Loader";
import {createUseStyles} from "react-jss";

const image = createUseStyles({
    image: {
        visibility: 'hidden',
    }
})


export interface FigureProps {
    src: string,
    arWidth?: number,
    arHeight?: number,
}

export const Figure = ({src, arWidth = 16, arHeight = 9}: FigureProps) => {
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
            <div>
                {loading && <Loader/>}
                <img src={src} alt={'упс'} onLoad={Loading}/>
            </div>
        </>
    );
}


