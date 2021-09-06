import React from 'react';
import Head from './Components/Head/Head'
import Main from './Components/Mainpage/main'
import Foot from './Components/Footer/foot'

/***********************************************************/
import './App.css';
import './Components/Head/Head.css'
import './Components/Mainpage/main.css'
import './Components/Footer/foot.css'

export default function App() {
  return (
    <div className="App">
      
      <Head/>

      <Main/>
      
      <Foot/>

    </div>
  
  );
}


