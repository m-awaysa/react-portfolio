import React, { Component } from 'react';
import style from'./Header.module.css'
class Header extends Component {
    render() {
        return (
            <header className={`${style.paddingCustom} bg-success text-white text-center`}>
                <div className="container d-flex align-items-center flex-column">
                    <img className={`${style.widthCustom}  mt-5`} src="Images/avataaars.svg" alt="..." />
                    <h1 className="mb-0">START BOOTSTRAP</h1>
                    <p className="fw-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
        );
    }
}

export default Header;
