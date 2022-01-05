import React from 'react';
import star from './../../assets/images/star.png';
import './Card.css';

function Card(props){
    let {coverImg, stats, location, title, price, openSpots} = props.item; 

    let badgeText;
    if(openSpots === 0){
        badgeText = "SOLD OUT";
    } else if(location === "Online"){
        badgeText = "ONLINE";
    }

    return(
        <div className = "card">
            {badgeText && <div className = "card--badge">{badgeText}</div>}
            <img src={coverImg} alt="katie" id='card--image'/>
            <div className="card--rating">
                <img src={star} alt="star" id='card--star' />
                <span>{stats.rating}</span>
                <span className = "gray">({stats.reviewCount})</span>
                <span className = "gray">{location}</span>
            </div>
            <p>{title}</p>
            <p><strong>From ${price} </strong>/ person</p>
        </div>
    )
}

export default Card;