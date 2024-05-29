import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/popular/Popular'
import { Offers } from '../components/Offers/Offers'
import { NewCollection } from '../components/NewCollection/NewCollection'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
    </div>
  )
}
