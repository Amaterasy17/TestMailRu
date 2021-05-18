import './loader.css'

export const LoaderNext = () => {
    return (
        // <div className="loader-div">
        //     <div className="loader">Loading...</div>
        // </div>
        <div className="loader-box">
            <div className="loader-ring">
                <div className="loader-ring-part loader-ring_part1"/>
                <div className="loader-ring-part loader-ring_part2"/>
                <div className="loader-ring-part loader-ring_part3"/>
                <div/>
            </div>
        </div>
    );
}