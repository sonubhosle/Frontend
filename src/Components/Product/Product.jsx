import React from 'react'
import Card from './Card'
import './Style.css'
const Product = ({product}) => {

  return (
    <div className="products">
      {
        product.map((item,index) =><Card data={item} index={index} /> )
      }
    </div>
  )
}

export default Product