import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../scss/offering.module.scss';
import mananitas from '../assets/mananitas.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faWifi, faUtensils, faWaterLadder, faSeedling } from '@fortawesome/free-solid-svg-icons';

export default function Offering(props) {
    return (
        <>
            <div className={style.offering}>
                <Link className={style.offeringImg} style={ {backgroundImage: "url('"+props.img} }></Link>
                <div className={style.offeringText}>
                    <div className={style.firstLine}>
                        <h3><Link>{props.title}</Link></h3>
                        <h6><FontAwesomeIcon icon={faStar}/>{props.rating}</h6>
                    </div>
                    <h5><FontAwesomeIcon icon={faLocationDot}/>{props.location}</h5>
                    <div className={style.icons}>
                        <FontAwesomeIcon icon={faWifi}/>
                        <FontAwesomeIcon icon={faUtensils}/>
                        <FontAwesomeIcon icon={faWaterLadder}/>
                        <FontAwesomeIcon icon={faSeedling}/>
                    </div>
                    <div className={style.line}></div>
                    {props.priceExact ? <h3 className={style.price}>${props.price} per night</h3> : <h3 className={style.price}>Price range: {props.price}</h3>}
                </div>
            </div>
        </>
    )
}