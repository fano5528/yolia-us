import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import Offering from '../components/offering.component';
import style from '../scss/offeringspage.module.scss';
import axios from 'axios';

export default function Experiences() {
    const [offerings, setOfferings] = useState([]);
    axios.get('https://yolia.mx/api/getExperiences')
        .then(res => {
            setOfferings(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    return (
        <>
            <Header/>
            <div className={style.offeringsParent}>
                <h1>Explore our growing list of experiences</h1>
                <div className={style.offerings}>
                    {offerings.map((offering) => (
                        <Offering key={offering.uid} img={require("../assets/offerings/experiences/"+offering.uid+"/1.jpg")} title={offering.title} rating={offering.rating} location={offering.location} price={offering.price}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}