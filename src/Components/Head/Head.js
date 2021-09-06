import React, {useState} from 'react'
import Logo from './logo.jpg'
import Bar from './bar.jpg'
import Pic from './pic.jpg'
import Close from './Close.jpg'


export default function Head() {

    const [slide, setslide] = useState(false)
    const open=()=>setslide(!slide)



    return (
        <div className="all-container">

            <div className="nav-container">
                <img className="log" src={Logo} alt="" />
                <img onClick={open} className="bar" src={Bar} alt="" />
            </div>

            <div style={{transform: slide ?"translateX(0px)":""}} className="side">
                <img onClick={open} className="close" src={Close} alt=""/>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Mission</li>
                    <li>Our Services</li>
                    <li>Contact</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                   
                </ul>
            </div>

           

            <div  className="Text-container">


                <div className="Text-left">

                    <p className="main">Let’s Redecorate!</p>
                    <p className="main2">Welcome to Simply Home. We can’t wait to get started showing you how to make the most of your living spaces for whatever budget works best for you. </p>
                    <button className="bn">Get Started</button>

                </div>


                <div className="Text-right">

                    <img className="picture" src={Pic} alt="" />

                </div>

            </div>


        </div>
    )
}


