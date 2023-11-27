import React from 'react'

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="h-container">
                <img src="./logo.jpg" alt="logo" width={100}/>

                <div className="h-menuu">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us </a>
                    <a href="">Get started</a>
                    <button className="button">
                        <a href="">Login</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Header
