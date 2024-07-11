import React, { useEffect, useState } from "react";
import brandArr from '../data/HomeData';
import OrderData from '../data/OrderData';
import AnimatedText from "../components/AnimatedText";
import useScrollToTop from "../components/ScrollToTop";


export default function Brands() {

    useScrollToTop();

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
                        <h1 className="brand-h1"><AnimatedText text="Brand Name" /></h1>
                        <article className="brand-desc"><AnimatedText text="lorem ipsum ejv basd jobvk asnvvu iaewr ivunae rvvb aewiru vbaew ivba epivbae ripvb aerp ivba epiuvba sdpiuvbaps idbvpaisdub pifvu basdpiufb aspiuvba wepivb apeiwu iae fpiqub ewaripu qwep q e hgqewu hgqeriu hgiqeur " /> </article>
                    </div>
                </div>

                <div className="brand-cont">
                    <div className="brand-div-2">
                        <style>
                            {`
                            .brand-div-2::before {
                                background-image: url(https://www.hennessy.com/sites/hennessy/files/styles/landscape_2880x1540/public/2022-12/hennessy-article-things-you-didnt-know-about-hennessy-vignette-landscape-2880x1540-1.jpg?itok=yA18rrw9);
                            }
                        `}
                        </style>
                    </div>
                    <div className="brand-text-2">
                        <h1 className="brand-h1"><AnimatedText text="About" /></h1>
                        <article className="brand-desc"><AnimatedText text="lorem ipsum ejv baew ivba epivbae ripvb aerp ivba epiuvba sdpiuvbaps idbvpaisdub pifvu basdpiufb aspiuvba wepivb apeiwu iae fpiqub ewaripu qwep q e hgqewu hgqeriu hgiqeur " /> </article>
                    </div>
                </div>



                <div className="brand-div-3">
                    <style>
                        {`
                            .brand-div-3::before {
                                background-image: url(https://www.hennessy.com/sites/hennessy/files/styles/landscape_1920x1080/public/2020-02/01_HEADER_2880x1540.jpg?itok=T7_599q3);
                            }
                        `}
                    </style>
                    <div className="brand-text-3">
                        <h1 className="brand-h1"><AnimatedText text="Brand Name" /></h1>
                        <article className="brand-desc"><AnimatedText text="lorem ipsum ejv basd jobvk asnvvu iaewr ivunae rvvb aewiru vbaew ivba epivbae ripvb aerp ivba epiuvba sdpiuvbaps idbvpaisdub pifvu basdpiufb aspiuvba wepivb apeiwu iae fpiqub ewaripu qwep q e hgqewu hgqeriu hgiqeur " /> </article>
                    </div>
                </div>


            </div>

            <style>
                {`
                            .brand-div::before {
                                background-image: url(https://www.hennessy.com/sites/hennessy/files/styles/landscape_2880x1540/public/2022-03/charente_1_vf_landscape_bg.jpg?itok=S6ML_AqY);
                            }
                            .brand-div-2::before {
                                background-image: url(https://www.hennessy.com/sites/hennessy/files/styles/landscape_2880x1540/public/2022-12/hennessy-article-things-you-didnt-know-about-hennessy-vignette-landscape-2880x1540-1.jpg?itok=yA18rrw9);
                            }
                            .brand-div-3::before {
                                background-image: url(https://www.hennessy.com/sites/hennessy/files/styles/landscape_1920x1080/public/2020-02/01_HEADER_2880x1540.jpg?itok=T7_599q3);
                            }
                        `}
            </style>

        </main>
    )
}

