import React from 'react'


import ItemList from '../ItemList/ItemList'
import classes from './AvailableItems.module.css'


const shoppingItems = [
  {itemName : "Laptop" , itemPrice : 300 , id : "I1"},
  {itemName : "Cell Phone" , itemPrice : 150 , id : "I2"},
  {itemName : "Farari" , itemPrice : 500 , id : "I3"},
]

const AvailableItems = () => {

  return (
    <div className={classes.availableItems}>
    <div className={classes.items_wrapper}>
      {
        shoppingItems.map((item)=>{
          return (
            <ItemList key={item.id} name={item.itemName} price={item.itemPrice} id={item.id}/>
          )
        })
      }
        {/* <ItemList/>
        <ItemList/> */}
    </div>
    </div>
  )
}

export default AvailableItems