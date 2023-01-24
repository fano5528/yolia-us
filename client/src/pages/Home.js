import React, { useState, useEffect } from 'react';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { Link } from 'react-router-dom';
import Offering from '../components/offering.component';
import Helmet from 'react-helmet';
import style from '../scss/home.module.scss';
import homeBanner from '../assets/home-banner.jpg';
import mananitas from '../assets/mananitas.jpg';
import mision from '../assets/mision.jpg';
import tabachines from '../assets/tabachines.jpg';
import huayacan from '../assets/huayacan.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faShieldHeart, faUmbrella, faPersonSwimming, faBellConcierge, faKey, faUser, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Yolía | Home</title>
            </Helmet>
            <Header />
            <div className={style.banner}>
                <div className={style.bannertext}>
                    <h5><FontAwesomeIcon icon={faLocationPin} />About Yolía</h5>
                    <h1>Book a beautiful and relaxing vacation in Cuernavaca, Mexico</h1>
                    <p>Visit Mexico’s “City of Eternal Spring” with an experience tailored to your needs.</p>
                </div>
                <div className={style.macscreen}>
                    <img src={homeBanner}/>
                </div>
            </div>
            <div className={style.beneficios}>
                <h1>Find your <strong>peace of mind</strong> while traveling to Cuernavaca</h1>
                <p>Make your trip go by as smoothly as possible. We’ll take care of all the details, so that you can relax and enjoy everything the city has to offer.</p>
                <div className={style.beneficiosgrid}>
                    <div className={style.beneficio} id={style.beneficio1}>
                        <FontAwesomeIcon icon={faShieldHeart}/>
                        <h3>Safety first!</h3>
                        <p>Let experienced professionals take care of your well-being while in Cuernavaca. We’ll help you get around safely, and seamlessly.</p>
                    </div>
                    <div className={style.beneficioline}></div>
                    <div className={style.beneficio} id={style.beneficio2}>
                        <FontAwesomeIcon icon={faUmbrella}/>
                        <h3>Comprehensive insurance</h3>
                        <p>Get our simple travel insurance solution, and find 24/7 coverage during your trip. That way, you’ll be able to enjoy your vacation worry-free.</p>
                    </div>
                    <div className={style.beneficioline}></div>
                    <div className={style.beneficio}  id={style.beneficio3}>
                        <FontAwesomeIcon icon={faPersonSwimming}/>
                        <h3>Striking experiences</h3>
                        <p>With 20+ experience offerings, we’ll make sure you have a good time. Do anything from volunteering to going out for a round of golf.</p>
                    </div>
                    <div className={style.beneficioline}></div>
                    <div className={style.beneficio} id={style.beneficio4}>
                        <FontAwesomeIcon icon={faBellConcierge}/>
                        <h3>24/7 Chaperone</h3>
                        <p>Need special assitance? Or just a restaurant recommendation? Your assigned chaperone has got you covered.</p>
                    </div>
                </div>
            </div>
            <div className={style.features}>
                <div className={style.feature1}>
                    <div className={style.feature1text}>
                        <h1>All the details of your trip, managed in one place.</h1>
                        <p>We’ll help you book your stay, schedule your activies, and manage any inconvenience that arises. With Yolía, you’ll have any help you need at a palm’s reach, every step of the way.</p>
                    </div>
                    <div className={style.feature1img}>
                    </div>
                </div>
                <div className={style.feature2}>
                    <div className={style.feature2text}>
                        <h1>Escoge entre ofrecer hospedaje o experiencias</h1>
                        <p>Si cuentas con algún lugar de hospedaje, puedes ofrecerlo a cambio de una tarifa. O, puedes ofrecer experiencias únicas a viajeros y generar ingresos de esa forma.</p>
                    </div>
                    <div className={style.feature2img}>
                        <div className={style.whitebox}>
                            <h3 className={style.total}>My Total Expenses in Cuernavaca</h3>
                            <h3 id={style.h41}>Stay price</h3>
                            <h3 id={style.h42}>+Insurance</h3>
                            <h3  id={style.h43}>+Yolía's fee ($10 per day)</h3>
                            <h3 id={style.h44}>+Experiences (if chosen)</h3>
                            <div className={style.sumline}></div>
                            <h3 id={style.h45}>=Clear, predictable pricing</h3>
                        </div>
                        <div className={style.transparentbox}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.offeringsParent}>
                <h1>Most Popular Stays</h1>
                    <p>Explore some of our most recommended offerings, that we're sure you'll love.</p>
                <div className={style.offerings}>
                    <Offering priceExact={true} img={mananitas} title="Las Mañanitas" location="Cuernavaca, Centro" price="299" rating="4.8"/>
                    <Offering priceExact={true} img={mision} title="Misión del Sol" location="Jiutepec" price="299" rating="4.9"/>
                    <Offering priceExact={true} img={tabachines} title="Los Tabachines" location="Los Tabachines" price="299" rating="4.5"/>
                    <Offering priceExact={true} img={huayacan} title="Hotel Huayacán" location="Jiutepec" price="299" rating="4.7"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}