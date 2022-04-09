import React from 'react'
import './Work.css'

const Work = () => {
    return (
        <section className="work">
            <h3 className="work-title">
                Work
            </h3>
            <div className="work-items">
                <div className="work-item">
                    <img className="work-img" src="img/search-books.png" alt="img"/>
                    <div className="work-blur"></div>
                        <p className="work-item__title">
                            Books-search
                        </p>
                    <a className="work-button__link" target="_blank" href="https://search-books-stasloops.vercel.app/">
                    <button className="work-button">
                        VISIT
                    </button>
                    </a>
                    <a className="work-button__link" target="_blank" href="https://github.com/stasloops/search-books">
                        <button className="work-button__two">
                        CODE
                        </button>
                    </a>
                </div>
                <div className="work-item two">
                    <img className="work-img" src="img/store 1.png" alt="img"/>
                    <div className="work-blur"></div>
                        <p className="work-item__title">
                            Game-store
                        </p>
                    <a className="work-button__link" target="_blank" href="https://store-cart.vercel.app/">
                        <button className="work-button">
                        VISIT
                        </button>
                    </a>
                    <a className="work-button__link" target="_blank" href="https://github.com/stasloops/store-cart">
                        <button className="work-button__two">
                        CODE
                        </button>
                    </a>
                </div>
            </div>
            <div className="work-items__two">
                <div className="work-item three">
                    <img className="work-img" src="img/trello 1.png" alt="img"/>
                    <div className="work-blur"></div>
                        <p className="work-item__title">
                            Trello
                        </p>
                    <a className="work-button__link" target="_blank" href="https://dont-trello-fsoaxv78j-stasloops.vercel.app/">
                        <button className="work-button">
                        VISIT
                        </button>
                    </a>
                    <a className="work-button__link" target="_blank" href="https://github.com/stasloops/dont-trello">
                        <button className="work-button__two">
                        CODE
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Work
