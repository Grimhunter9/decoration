import React from 'react'
import Sec1 from './sec1.jpg'
import Sec2 from './sec2.jpg'

export default function main() {
    return (
        <div className="middle">


            <div className="Main-container">

                <div className="Main-left">

                    <p className="middle-para1">Keep it simple...</p>
                    <p className="middle-para2">Learn more about our unique approach to personalized home decoration. Find out why we’re different.</p>
                    <button className="bn2"><span className="text4">Learn More</span></button>

                </div>


                <div className="Main-pic">

                    <img className="picture2" src={Sec1} alt="" />

                </div>

            </div>

            <div className="Main-container">


                <div className="Main-pic">

                    <img className="picture3" src={Sec2} alt="" />

                </div>


                <div className="Main-left-down">

                    <p className="middle-para3">Simplify <span>your home</span></p>
                    <p className="middle-para4">Let us show you how to make your home more like home with simple, modern techniques.</p>
                    <button className="bn3"><span className="text5">Join FREE</span></button>

                </div>

            </div>

        </div>
    )
}


