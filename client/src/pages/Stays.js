import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import Offering from '../components/offering.component';
import mananitas from '../assets/mananitas.jpg';
import style from '../scss/offeringspage.module.scss';
import axios from 'axios';

export default function Stays() {
    const [offerings, setOfferings] = useState([]);

    useEffect(() => {
        axios.get('https://yolia.mx/api/getStays')
            .then(res => {
                setOfferings(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <Header/>
            <div className={style.offeringsParent}>
                <h1>Explore our growing list of stay options</h1>
                <div className={style.offerings}>
                    {offerings.map((offering) => (
                        <Offering key={offering.uid} img={require("../assets/offerings/"+offering.uid+"/1.jpg")} title={offering.title} rating={offering.rating} location={offering.location} price={offering.price}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}