import React from 'react';
import './drawer.css';

import  Cards from "../../Cards.js";
import Slider from "../../slide_show/Slider.js";
//  
class Drawer extends React.Component{

    render(){
        return (
            <>
            <input type="checkbox" id="check"/>
            <label for="check">
              <svg viewBox="0 0 30 30" width="30" height="30">
                <path id="one" d="M4 10h22M4" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                <path id="two" d="M4 20h22M4" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
              </svg> Click me
            </label>
            <aside>
              <div class="top">
                <h2>Title</h2>
                <ul>
                  <li>Nav text</li>
                  <li>Nav text</li>
                  <li>Nav text</li>
                  <li>Nav text</li>
                  <li>Nav text</li>
                </ul>
              </div>
              <div class="bottom">
                <p>&copy; 2019 by Andrej Sharapov</p>
              </div>
            </aside>
            <article>
              <div class="wrapper">
                {/* <div class="content">
               
             <Cards/>
                </div> */}
                <Cards/>
                <div class="footer">
                  <p>Follow me <a href="https://twitter.com/andrejsharapov" target="_blank" title="">in Twitter</a></p>
                </div>
              </div>
            </article>
       </> );
    }
}


export default Drawer;