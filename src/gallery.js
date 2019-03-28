import React, { Component } from 'react';
import './gal.css';
import B1 from './b1.jpg';
import B2 from './b2.jpg';
import B3 from './b3.jpg';
import B4 from './b4.jpg';
import B5 from './b5.jpg';
import B6 from './b6.jpg';
import B7 from './b7.jpg';
import B8 from './b8.jpg';

class Gallery extends Component {
  render() {
    return (
       <div id="gallery">
           <br>
           </br>
           <br></br>
           <h1>Gallery</h1>
           <hr></hr>
           <img src={B1} alt="book2" />
           <img src={B2} alt="book2" />
           <img src={B3} alt="book2" />
           <img src={B4} alt="book2" />
           <img src={B5} alt="book2" />
           <img src={B6} alt="book2" />
           <img src={B7} alt="book2" />
           <img src={B8} alt="book2" />         
       </div>

    );
  }
}

export default Gallery;
