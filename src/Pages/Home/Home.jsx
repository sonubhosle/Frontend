import React from 'react'
import Banner from '../../Components/Carousel/Banner'
import Products from '../../Components/Product/Product'
import { mens_kurta } from '../../Components/Data/Mens_Kurta'
import { lengha_page1 } from '../../Components/Data/LenghaCholi'

const Home = () => {

  return (
    <div>
      <Banner/>
      <Products product={mens_kurta} />
      <Products product={mens_kurta} />
    </div>
  )
}

export default Home