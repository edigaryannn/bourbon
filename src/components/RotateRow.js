import React, {useState} from "react";

export default function RotateRow({ setTransformSize }) {

    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (position, index) => {
        setTransformSize(position);
        setActiveIndex(index);
    };

    return (
        <>
            <div className="cont">
                <div className={`cont-row ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick('0', 0)}></div>
                <div className={`cont-row ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick('-360px', 1)}></div>
                <div className={`cont-row ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick('-750px', 2)}></div>
            </div>

            <style type="text/css">
                {`
                .cont {
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    transition: align-items 0.4s ease-in-out; 
                    margin-bottom: 20px;
                }
                .cont-row {
                    height: 5px;
                    width: 100px;
                    background-color: #333;
                    transition: all ease-in-out .4s;
                    margin: 0 10px;
                    box-shadow: #333 0 0 10px;
                }
                .active {
                    background-color: #ffffff;
                }
                `}
            </style>
        </>
    );
}
