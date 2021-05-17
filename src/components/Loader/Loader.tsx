import {loaderStyles} from "../../ui-components/loaderStyle";


export const Loader = () => {
    const loader = loaderStyles();
    return (
        <div className={loader.container}>
            <div className={loader.circle} />
            <div className={loader.circle} />
            <div className={loader.circle} />
            <div className={loader.circle} />
            <div className={loader.circle} />
        </div>
    );
}