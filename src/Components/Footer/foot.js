import React from 'react'
import Home from './home.jpg'
import Log from './logo2.jpg'
import Appstore from './app.jpg'
import google from './google.jpg'


{/*<div>

                        
                        {/*
                    </div>*/}

export default function foot() {
    return (
        <div className="Foot">

            <div className="foot-container">

                <div>

                    <div style={{display:"flex"}}>
                        <img className="foot-logo1" src={Home} alt="" />
                        <img className="foot-logo2" src={Log} alt="" />
                    </div>


                    <div className="t-container">

                        <p className="foot1">123 Main Ave. Palo Alto CA, 94020</p>
                        <p className="foot2">If you feel like your home is pretty well </p>
                        <p className="foot3">decorated already...</p>
                        <p className="foot4">unsubscribe here.</p>

                    </div>

                </div>



                <div style={{ display: "flex", flexDirection: "column" }}>

                    <img className="app" src={Appstore} alt="" />

                    <img className="google" src={google} alt="" />

                </div>


            </div>


        </div>
    )
}


