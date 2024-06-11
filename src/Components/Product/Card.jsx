import React from 'react'

const Card = ({data,index}) => {
  return (
    <div className="card">
      <div className="image">
        <img src={data.imageUrl} alt="" />
      </div>
      <div className="product_details">
        <div className="brand">{data.brand}</div>
        <div className="brand">{data.title}</div>
        <div className="price_box">
        <div className="price">₹{data.discountedPrice}</div>
          <div className="discounted_price">₹{data.price}</div>
          <div className="discounte">{data.discountPersent}% Off</div>

        </div>
        <div className="qty">Qty : {data.quantity}</div>
      </div>
    </div>
  )
}

export default Card