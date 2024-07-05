import React from "react";
import { useState, useEffect } from "react";

const brandArr = async () =>  {
        return[
            {
                'id': 1,
                'brand': 'Hennesy',
                'backUrl': 'https://www.hennessy.com/sites/hennessy/files/styles/landscape_2880x1540/public/2022-03/exclusivites_1_vf_landscape.jpg?itok=LfTZ5Fuf',
                'description': "The Hennessy cognac distillery was founded by Irish Jacobite military officer Richard Hennessy in 1765, who had served in the army of Louis XV. He retired to the Cognac region, and began distilling and exporting brandies, first to Britain and his native Ireland, closely followed by the United States.[8] In 1813 Richard Hennessy's son James Hennessy gave the company its trading name, Jas Hennessy & Co."
            },
            {
                'id': 2,
                'brand': "Jack Daniel's",
                'backUrl': 'https://robbreport.com/wp-content/uploads/2022/11/Jack_Daniels_Single_Malt.jpg?w=1000',
                'description': "The Hennessy cognac distillery was founded by Irish Jacobite military officer Richard Hennessy in 1765, who had served in the army of Louis XV. He retired to the Cognac region, and began distilling and exporting brandies, first to Britain and his native Ireland, closely followed by the United States.[8] In 1813 Richard Hennessy's son James Hennessy gave the company its trading name, Jas Hennessy & Co."
            },
            {
                'id': 3,
                'brand': 'Hennesy',
                'backUrl': 'https://www.hennessy.com/sites/hennessy/files/styles/landscape_2880x1540/public/2022-03/exclusivites_1_vf_landscape.jpg?itok=LfTZ5Fuf',
                'description': "The Hennessy cognac distillery was founded by Irish Jacobite military officer Richard Hennessy in 1765, who had served in the army of Louis XV. He retired to the Cognac region, and began distilling and exporting brandies, first to Britain and his native Ireland, closely followed by the United States.[8] In 1813 Richard Hennessy's son James Hennessy gave the company its trading name, Jas Hennessy & Co."
            }

        ];
    }
    
    const groupByBrand = (brands) => {
        return brands.reduce((acc, item) => {
            if (!acc[item.brandName]) {
                acc[item.brandName] = [];
            }
            acc[item.brandName].push(item);
            return acc;
        }, {});
    };
    

export default function Home(){
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const loadBrands = async () => {
            const data = await brandArr();
            setBrands(groupByBrand(data));
        };
        loadBrands();
    }, []);

 
        return(
            <main>
                <div className="main-cont">
                    <div className="main-heading">
                        <h1>Home of Drinks.</h1>
                    </div>
                    {Object.keys(brands).map((brand) => (
                        brands[brand].map((item) => (
                    <div className="main-div" style={{backgroundImage:  "url(" + item.backUrl + ")"}}>
                        {/* <img className="main-div-img" src="https://cdn11.bigcommerce.com/s-4nzgid62dq/products/585/images/8685/PDP-BRAND-Hennessy-V.S.-1440x1440__44677.1711502042.386.513.png?c=2" /> */}
                        <button className="main-div-but">
                            watch brand
                        </button>
                        <div className="main-div-text">
                            <h1>{item.brand}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    ))
                    ))}
                </div>
            </main>
        );
    }
