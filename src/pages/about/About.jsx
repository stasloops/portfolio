import React from 'react'
import './About.css'

const About = () => {
    return (
        <article className="about">
            <h3 className="about-title">
                About
            </h3>
            <code className="about-code">
                <div className="about-code__center">
                <span className="blue">function </span><span className="pink">myParametrs</span>()<span> &#123;</span> <br/>
                <span className="blue about-one">const </span><span className="pink">BYSTAS</span> = [<br/>
                    <span className="about-two">&#123;</span><br/>
                        <span className="about-three">name: </span><span className="k">'Stas',</span><br/>
                        <span className="about-three">year: </span><span className="k">'16',</span><br/>
                        <span className="about-three">live: </span><span className="k">'in dream or dream'</span><br/>
                    <span className="about-two">&#125;</span><br/>
                    <span className="about-one">]</span> <br/>
                    <br/>
                    <span className="blue about-one">const </span><span className="pink">myBasicSkills</span> = [<br/>
                    <div className="about-two">
                        <span className="k">'HTML', </span>
                        <span className="k">'CSS', </span>
                        <span className="k">'JS', </span>
                        <span className="k">'React', </span>
                        <span className="k">'Redux/Redux-Toolkit' </span>
                    </div>
                <span className="about-one">]</span> <br/>
                <span>&#125;</span>
                </div>
            </code>
        </article>
    )
}

export default About
