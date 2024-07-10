import React, { useEffect, useState } from "react";
import brandArr from '../data/HomeData';
import OrderData from '../data/OrderData';
import AnimatedText from "../components/AnimatedText";



export default function Brands() {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const fetchBrands = async () => {
            const data = await brandArr();
            setBrands(data);
        }

        fetchBrands();
    }, []);

    return (
        <main>
            <div className="main-cont">
                <div className="main-heading">
                    <h1>Brand name</h1>
                </div>

                <div className="brand-div">
                    <div className="brand-text">
                        <h1 className="brand-h1"><AnimatedText text="Brand Name"/></h1>
                        <article className="brand-desc"><AnimatedText text="lorem ipsum ejv basd jobvk asnvvu iaewr ivunae rvvb aewiru vbaew ivba epivbae ripvb aerp ivba epiuvba sdpiuvbaps idbvpaisdub pifvu basdpiufb aspiuvba wepivb apeiwu iae fpiqub ewaripu qwep q e hgqewu hgqeriu hgiqeur " /> </article>
                    </div>   
                </div>
                <div className="brand-div">
                    <div className="brand-text">
                        <h1 className="brand-h1"><AnimatedText text="Brand Name"/></h1>
                        <article className="brand-desc"><AnimatedText text="lorem ipsum ejv basd jobvk asnvvu iaewr ivunae rvvb aewiru vbaew ivba epivbae ripvb aerp ivba epiuvba sdpiuvbaps idbvpaisdub pifvu basdpiufb aspiuvba wepivb apeiwu iae fpiqub ewaripu qwep q e hgqewu hgqeriu hgiqeur " /> </article>
                    </div>   
                </div>
                <div className="brand-div">
                    <div className="brand-text">
                        <h1 className="brand-h1"><AnimatedText text="Brand Name"/></h1>
                        <article className="brand-desc"><AnimatedText text="lorem ipsum ejv basd jobvk asnvvu iaewr ivunae rvvb aewiru vbaew ivba epivbae ripvb aerp ivba epiuvba sdpiuvbaps idbvpaisdub pifvu basdpiufb aspiuvba wepivb apeiwu iae fpiqub ewaripu qwep q e hgqewu hgqeriu hgiqeur " /> </article>
                    </div>   
                </div>
            </div>
        </main>
    )
}

