import React from 'react'
import './home.css'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { Featured } from '../featured/Featured'
import { PropertyList } from '../../components/propertyList/PropertyList'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">Browse by property type</div>
        <PropertyList />
      </div>
    </div>
  )
}
