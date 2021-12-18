import React, { useState } from 'react'
import './Header.css'
import { Link } from "react-scroll";

const Header = () => {
    const [state, setState] = useState(false)
    const headerButton = () =>{
        setState(!state)
    }
    const headerButtonFalse = () => {
        setState(false)
    }
    return (
    <header className="header">
        <div className="header-inner">
           <Link className="header-logo"
            to="section1"
            smooth={true}
            offset={0}
            duration={300}
           >
                BY
                <span className="pink">
                    STAS...
                </span>
            </Link>
            <span onClick={headerButton} className="header-menu">
                <span className="header-menu__item header-menu__item-one"></span>
                <span className="header-menu__item header-menu__item-two"></span>
                <span className="header-menu__item header-menu__item-three"></span>
            </span>
            <nav className="header-nav">
                <ul className={state === true ? "header-nav__items-active" : "header-nav__items"}>
                    <li  className="header-nav__item">
                        <Link
                         onClick={headerButtonFalse}
                         className="header-item__link"
                         activeClass="active"
                         to="section1"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={500}
                         >
                            Start
                        </Link>
                    </li>
                    <li className="header-nav__item">
                        <Link
                         onClick={headerButtonFalse}
                         className="header-item__link"
                         activeClass="active"
                         to="section2"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={500}
                         >
                            Work
                        </Link>
                    </li>
                    <li className="header-nav__item">
                        <Link
                         onClick={headerButtonFalse}
                         className="header-item__link"
                         activeClass="active"
                         to="section3"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={500}
                         >
                            About
                        </Link>
                    </li>
                    <li className="header-nav__item">
                        <Link
                         onClick={headerButtonFalse}
                         className="header-item__link"
                         activeClass="active"
                         to="section4"
                         spy={true}
                         smooth={true}
                         offset={0}
                         duration={500}
                         >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header
