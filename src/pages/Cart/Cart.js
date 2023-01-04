import React from 'react'
// import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../reducers/cartReducer'

import CartProductCard from '../../components/CartProductCard/CartProductCard'
import Footer from '../../components/shared/Footer/Footer'
import Header from '../../components/shared/Header/Header'

const Cart = () => {
  // const [items, setItems] = useState([])
  
  // useEffect(() => {
  //   let cartitems = localStorage.getItem("cartItems")
  //   if (cartitems) {
  //     cartitems = JSON.parse(cartitems)
  //     setItems(cartitems)
  //   }
  // },[])

  const items = useSelector(cartSelector)
  console.log(items)

  return (
    <div>
      <Header />
      {items.map((i, index)=> {
        return (
          <CartProductCard items={i} key={index} />
        )
      })}
      <Footer />
    </div>
  )
}

export default Cart