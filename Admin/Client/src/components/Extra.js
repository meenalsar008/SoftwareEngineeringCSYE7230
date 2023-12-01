import React from 'react'
import cardimg1 from '../images/cardimg1.jpg'
import cardimg2 from '../images/cardimg2.jpg'
import cardimg3 from '../images/cardimg3.jpg'
import cardimg4 from '../images/cardimg4.jpg'
import bot from '../images/chatbot.png'

const Extras = () => {
  return (
    <div className='extras'>
    <div className="container">
    <h1 className='title'>Discounts and Offers</h1>
    <div className="cards">
    <div className="Card card4">
        <div className="header">
            <p className="pre">Get a</p>
            <h1 className="main">15% off</h1>
            <p className="text">Discount available on all pickup orders</p>
        </div>
        <div className="imgbg">
            <img src={cardimg1} alt="cardimg1" />
        </div>
    </div>
    <div className="Card card1">
        <div className="header">
            <p className="pre">Get a</p>
            <h1 className="main">25$ off</h1>
            <p className="text">on your first online purchase.</p>
        </div>
        <div className="imgbg">
            <img src={cardimg2} alt="cardimg1" />
        </div>
    </div>
    <div className="Card card2">
        <div className="header">
            <p className="pre">Get an</p>
            <h1 className="main">35$ extra</h1>
            <p className="text">on purchases worth 50$ or more</p>
        </div>
        <div className="imgbg">
            <img src={cardimg3} alt="cardimg1" />
        </div>
    </div>
    <div className="Card card3">
        <div className="header">
            <p className="pre">Get a</p>
            <h1 className="main">15% off</h1>
            <p className="text">Discount available on all pickup orders</p>
        </div>
        <div className="imgbg">
            <img src={cardimg4} alt="cardimg1" />
        </div>
    </div>
    </div>
    <div className="assistant">
    <div className="content">
        <h1>We are here to assist you. <br /> Meet RLNR.</h1>
        <p>Meet our very own chatbot. Feel free to hop on and ask any question. Zoro would be more than happy to assist you. </p>
        <button>Learn More</button>
    </div>
        <img src={bot} alt="bot" />
    </div>
    
    </div>
    </div>
  )
}

export default Extras