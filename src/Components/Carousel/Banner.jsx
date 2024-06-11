import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './Style.css'

const banner_images = [
  {
    'id':1,
    "image":"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7230486b354e4d7.jpg?q=20"
  },
  {
    'id':2,
    "image":"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b0068061bb325edc.jpeg?q=20"
  },
  {
    'id':3,
    "image":"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0e4fae4d5fcab33b.jpg?q=20"
  },
  {
    'id':4,
    "image":"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20"
  },
  {
    'id':5,
    "image":"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20"
  },
]
const Banner = () => {
  return (
    <Carousel className='carousel' indicators={false}>
     {
      banner_images.map((img,index) => <img src={img.image} alt='Banner_image' />)
     }
    </Carousel>
  )
}

export default Banner