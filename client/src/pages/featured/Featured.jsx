import React from 'react'
import './featured.css'

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItems">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/694950327.webp?k=f2289c369c9576a7bfb0c9c742763de0faeecbcb9721eec07095164818e98eb9&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>San Francisco</h1>
                <h2>123 properties</h2>
            </div>
        </div>

        <div className="featuredItems">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/420368081.webp?k=632de04664cfe01e42f3bcf98e44399e3bed7c082443db21087d62b0d01c7310&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>Los Angeles</h1>
                <h2>123 properties</h2>
            </div>
        </div>

        <div className="featuredItems">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="featuredImage" />
            <div className="featuredTitles">
                <h1>New York</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}
