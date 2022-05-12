import React from 'react'
import "./Style/Main-Texts.css"


function MainTexts() {
    return (
        <div>
            <div className="main-text">
                <div class="textfield">
                    <div className="textfield-field">
                        <h2 className="main-text2s">Whar are</h2>
                        <h2 className="main-text3s">we capable of</h2>
                        <p className="main-paragraphs">We create brand experiences which are memorable and distinct.Our experienced
                            team create and develop brands with personality and resonance
                        </p>
                        <h6 className="main-text4s">Our process</h6>
                    </div>
                </div>
                <div className="main-list">
                    <div className="main-list-brandmarketing">
                        <div className="main-list-brand"> 
                        <h2>BRAND</h2>
                        <ul className="main-list-ul">
                            <li  className="main-list-item">Brand Strategy</li>
                            <li className="main-list-item">Logo & Name</li>
                            <li className="main-list-item">Identity & Collateral </li>
                        </ul>
                        </div>
                        <div className="main-list-marketing">
                        <h2>MARKETING</h2>
                        <ul className="main-list-ul">
                            <li  className="main-list-item">Digital</li>
                            <li className="main-list-item">Market Research</li>
                        </ul>
                        </div>
                    </div>
                    <div className="main-list-development">
                    <h2>DEVELOPMENT</h2>
                        <ul className="main-list-ul">
                            <li  className="main-list-item">Brand Strategy</li>
                            <li className="main-list-item">Logo & Name</li>
                            <li className="main-list-item">Identity & Collateral </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTexts
