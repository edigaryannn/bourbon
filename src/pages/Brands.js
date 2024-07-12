import React, { useEffect, useState } from "react";
import brandArr from '../data/HomeData';
import AnimatedText from "../components/AnimatedText";
import useScrollToTop from "../components/ScrollToTop";


export default function Brands() {

    //scrollchanging function is added for smoother scrolling above website
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const scrollChanging = () => {
            setScrollPosition(window.scrollY);
        };

        document.addEventListener('scroll', scrollChanging);

        return () => {
            document.removeEventListener('scroll', scrollChanging);
        };
    }, []);

    console.log(scrollPosition);

    //scrolltotop function automaticaly scrolls to top of every component 
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
        
            <main><div className="c-SmoothScroll">
                <div className="main-cont">
                    <div className="main-heading">
                        <h1>Brand name</h1>
                    </div>

                    <div className="brand-div div-element"  style={{transform: `translateY(-${scrollPosition}px)`}}>
                        <div className="brand-text">
                            <h1 className="brand-h1"><AnimatedText text="HENNESSY" /></h1>
                            <article className="brand-desc"><AnimatedText text="The Hennessy cognac distillery was founded by Irish Jacobite military officer Richard Hennessy in 1765, who had served in the army of Louis XV. He retired to the Cognac region, and began distilling and exporting brandies, first to Britain and his native Ireland, closely followed by the United States. In 1813 Richard Hennessy's son James Hennessy gave the company its trading name, Jas Hennessy & Co. He was also responsible for choosing Jean Fillioux as the house's Master Blender. A member of the Fillioux family has occupied the role ever since, a business relationship that has lasted eight generations and more than 250 years." /> </article>
                        </div>
                    </div>

                    <div className="brand-cont smooth-scroll-element"  style={{transform: `translateY(-${scrollPosition}px)`}}>
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
                            <h1 className="brand-h1"><AnimatedText text="HENNESSY LEGACY" /></h1>
                            <article className="brand-desc"><AnimatedText text="Could Richard Hennessy and his eldest son James possibly have imagined at the end of the eighteenth century that, one day, their cognac would have travelled the world over, ignoring borders and challenging traditions?" /> </article>
                        </div>
                    </div>



                    <div className="brand-div-3 smooth-scroll-element"  style={{transform: `translateY(-${scrollPosition}px)`}}>
                        <style>
                            {`
                                .brand-div-3::before {
                                    background-image: url(https://www.hennessy.com/sites/hennessy/files/styles/landscape_1920x1080/public/2020-02/01_HEADER_2880x1540.jpg?itok=T7_599q3);
                                }
                            `}
                        </style>
                        <div className="brand-text-3">
                            <h1 className="brand-h1"><AnimatedText text="OUR CRAFTSMEN" /></h1>
                            <article className="brand-desc"><AnimatedText text="Hennessy is a story of artisans. From the vineyards to the bottle finishes, all the craftsmen cultivate a deep sense of pride in what they do. Their passion is humbling. And their mastery of their craft is absolute, for each and every one. We strive to preserve these savoir-faire within the Maison and encourage transmission." /> </article>
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

           </div>  </main>
       
    )
}

