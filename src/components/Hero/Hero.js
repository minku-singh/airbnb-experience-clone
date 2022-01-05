import React from 'react';
import './Hero.css';
import grid from "./../../assets/images/photo-grid.png";

export default function Hero() {
    return (
        <section className = "hero">
            <img id='hero--image' src={grid} alt="grid" />
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one of a kind hosts, all without leaving home</p> 
            </div>
        </section>
    )
}
