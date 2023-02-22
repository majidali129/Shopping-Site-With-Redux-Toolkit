import React, { Fragment } from 'react'


// import Cart from './components/Cart/Cart';
import Cart from "../components/Cart/Cart"
import Header from '../components/Header/Header';
import AvailableItems from '../components/Items/AvailableItems/AvailableItems';


const ComponentWrapper = () => {
  return (
    <Fragment>
            <Header/>
            <Cart/>
            <AvailableItems/>
    </Fragment>
  )
}

export default ComponentWrapper