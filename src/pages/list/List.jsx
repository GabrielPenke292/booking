import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'

export const List = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label htmlFor="destination">Destination</label>
              <input type="text" placeholder='Where are you going?' />
            </div>
            <div className="listItem">
              <label htmlFor="date">Check-in Date</label>
              <input type="date" />
            </div>
            <div className="listItem"></div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}
