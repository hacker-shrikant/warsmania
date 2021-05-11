import React from 'react';

import './index.css';

class Cards extends React.Component {
    render() {
        return(
<div className="wrapper">

<h2><strong>All Games<span> <div className="wrapper">



<div className="cards">

    <figure className="card">

        <img src="https://static.toiimg.com/thumb/msid-70388666,imgsize-1251481,width-400,resizemode-4/70388666.jpg" />

        <figcaption><h2>

           

        </h2></figcaption>

    </figure>

    <figure className="card">

        <img src="https://m.media-amazon.com/images/I/51JuVVFpg0L.jpg" />

        <figcaption  className="fig" >Stick Fight</figcaption>

    </figure>

    <figure className="card">

        <img src="https://m.media-amazon.com/images/I/41stgBBfkhL.jpg" />

        <figcaption>Minion Masters</figcaption>

    </figure>

    <figure className="card">

        <img src="https://m.media-amazon.com/images/I/51K7tmRdaXL.jpg" />

        <figcaption>KoseBoz!</figcaption>

    </figure>

</div>

<h2><strong>What's new?</strong></h2>

<div className="news">

    <figure className="article">

        <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news1.jpg" />

        <figcaption>

            <h3>New Item</h3>

            <p>

                In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.

            </p>

        </figcaption>

    </figure>

    <figure className="article">

        <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png" />

        <figcaption>

            <h3>Update</h3>

            <p>

                Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.

            </p>

        </figcaption>

    </figure>

</div>

    </div></span></strong></h2>
</div>
        );
    }
  }

export default Cards;