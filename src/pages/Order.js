import React, { useState, useEffect } from "react";
import OrderData from '../data/OrderData';
import useScrollToTop from "../components/ScrollToTop";
import RotateRow from "../components/RotateRow";

const groupCompany = (company) => {
    return company.reduce((acc, item) => {
        if (!acc[item.company]) {
            acc[item.company] = [];
        }
        acc[item.company].push(item);
        return acc;
    }, {});
}

export default function Order() {
    const [company, setCompany] = useState({});
    const [transformSizeHennessy, setTransformSizeHennessy] = useState(null);
    const [transformSizeJack, setTransformSizeJack] = useState(null);

    useEffect(() => {
        const loadCompany = async () => {
            const data = await OrderData();
            setCompany(groupCompany(data));
        };
        loadCompany();
    }, []);

    // scrolltotop function automatically scrolls to the top of every component 
    useScrollToTop();

    return (
        <main>
            <div className="main-cont">
                <div className="main-heading">
                    <h1>Order</h1>
                </div>
                <div className="colums-cont">
                    <div className="colums-div">
                        <h1>Hennessy</h1>
                        <div className="colums-row">
                            <div className="colums-row-div"  style={{ transform: `translate(${transformSizeHennessy})` }}>
                                {company['hennessy'] && company['hennessy'].map((item) => (
                                    <div className="row-div" key={item.id}>
                                        <div className="row-img">
                                            <img src={item.imgUrl} alt={item.name} />
                                        </div>
                                        <h3>{item.name}</h3>
                                        <span className="order-snap">Order</span>
                                    </div>
                                ))}
                            </div>
                            <RotateRow setTransformSize={setTransformSizeHennessy} />
                        </div>
                    </div>

                    <div className="colums-div">
                        <h1>Jack Daniels</h1>
                        <div className="colums-row">
                            <div className="colums-row-div"  style={{ transform: `translate(${transformSizeJack})` }}>
                                {company['jack'] && company['jack'].map((item) => (
                                    <div className="row-div" key={item.id}>
                                        <div className="row-img">
                                            <img src={item.imgUrl} alt={item.name} />
                                        </div>
                                        <h3>{item.name}</h3>
                                        <span className="order-snap">Order</span>
                                    </div>
                                ))}
                            </div>
                            <RotateRow setTransformSize={setTransformSizeJack} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
