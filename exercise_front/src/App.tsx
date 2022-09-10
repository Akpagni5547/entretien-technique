import React from 'react';
import Header from "./components/Header"
import ReceipeCard from './components/card/ReceipeCard'
import CardModal from './components/modal/CardModal';

// Images
import image1 from './assets/image1.jpeg';
import image2 from './assets/image2.jpeg';
import image3 from './assets/image3.jpeg';

// Styles
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <div id="modal">
          <CardModal/>
        </div>
        <div className='content'>
          <ReceipeCard img={image1} />
          <ReceipeCard img={image2}/>
          <ReceipeCard img={image3}/>
        </div>
      </main>
    </div>
  );
}

export default App;
