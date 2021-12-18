import React from 'react'
import './Main.css'

const Main = () => {
    return (
    <section className="main">
        <div className="main-content">
            <a className="main-logo">
                BY
                <span className="pink">
                    STAS...
                </span>
            </a>
            <h1 className="main-title">
                HI I FRONTEND<br/>
                <span className="blue">REACT</span> DEVELOPER
            </h1>
            <p className="main-text">
                I'm writing something on the react
            </p>
            <a target="_blank" href="https://tlgg.ru/@Neichonok">
                <button className="main-button">LETS'GO</button>
            </a>
        </div>
    </section>
    )
}

export default Main
