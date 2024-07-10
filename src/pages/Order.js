import React, { useState, useEffect } from "react";
import OrderData from '../data/OrderData';

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
    const [company, setcompany] = useState({});

    useEffect(() => {
        const loadCompany = async () => {
            const data = await OrderData();
            setcompany(groupCompany(data));
        };
        loadCompany();
    }, []);

    useEffect(() => {}, [company]);

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
                    </div>

                    <div className="colums-div">
                        <h1>Jack Daniels</h1>
                        <div className="colums-row">
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
                    </div>
                </div>
            </div>
        </main>
    );
}
