import React, { useState } from 'react'
import './hotel.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { MailList } from '../../components/mailList/MailList'
import { Footer } from '../../components/footer/Footer'

export const Hotel = () => {
  const [slideNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161333398.jpg?k=a13b4d7507a231b4d86b3ea2d94b3e00f44afe7826c956faac2633f6369451af&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161246383.jpg?k=f4bdbb7607d356c91bef1e3b092a795227286efbf94d0c990cea670a3273e76e&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161020212.jpg?k=d452b2d096838fca62fe21139ad91537aeb8d095fc88cde8b39ed4a10c82cc7b&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161246388.jpg?k=c4ea9bd4c2a896d99c83a6cf77842134c39d1c275fa9c0ff178c5358be0185e9&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161246382.jpg?k=3155ae56bdd1c9755a57619be09aad8df09fe6be1fb9e81fdc1ff5d5955a28ed&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/161331065.jpg?k=71aabf796ad703b9d8d34a510e3cd64809fc5b928705b720ed23d32603710c23&o=",
    },
  ];

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSliderNumber(newSlideNumber);
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('r')} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St, 125 New York</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo, index)=>(
              <div className="hotelImageWrapper" key={index}>
                <img src={photo.src} onClick={()=> handleOpen(index)} alt="" className="hotelImage" />
              </div>
            ))}
          </div> {/* hotelImages */}
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located in the real heart of Krakow, this property has an excellent location score 9.8!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score 9.8!
              </span>
              <h2>
                <b>$112</b> (1 night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>{/* hotelDetails */}
        </div> {/* hotelWrapper */}
        <MailList />
        <Footer />  
      </div> {/* hotelContainer */}
    </div> 
  )
}
