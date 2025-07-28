import React from 'react'
import './searchItem.css'

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/104908406.webp?k=be0f4a09ad7612402f9b2c335b0afedadc9bd22843722fc70a3b7fa89371fbb1&o=" alt="" className="searchItemImage" />
      <div className="searchItemDesc">
        <h1 className="searchItemTitle">Tower Street Apartments</h1>
        <span className="searchItemDistance">500m from center</span>
        <span className="searchItemTaxiOp">Free airport taxi</span>
        <span className="searchItemSubtitle">Studio Apartment with Air conditioning</span>
        <span className="searchItemFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
        <span className="searchItemCancelOp">Free cancellation</span>
        <span className="searchItemCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>

      </div>{/* searchItemDesc */}
      <div className="searchItemDetails">
        <div className="searchItemRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchItemDetailTexts">
           <span className="searchItemPrice">$ 123</span>
           <span className="searchItemTaxOp">Includes taxes and fees</span>
           <button className="searchItemCheckButton">See availability</button>
        </div>
      </div>{/* searchItemDetails */}

    </div>
  )
}
