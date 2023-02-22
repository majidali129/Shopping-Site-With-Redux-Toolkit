import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch} from 'react-redux';


// import Cart from './components/Cart/Cart';
import Cart from "../components/Cart/Cart"
import Header from '../components/Header/Header';
import AvailableItems from '../components/Items/AvailableItems/AvailableItems';
import Notification from '../UI/Notification';
// import { uiActions } from '../Store/ui-slice';
import { cartActionCreator } from '../Store/cart-slice';

let isInitial = true;

const ComponentWrapper = () => {
  
  const cart = useSelector(state=>state.cart);
  const notification = useSelector(state=>state.ui.notification)
  const dispatch = useDispatch()
  // const [isInitial , setIsInitial] = useState(true)

  useEffect(()=>{
    if (isInitial) {
      isInitial = false;
      return
    }
    
    dispatch(cartActionCreator(cart))
  } , [cart,dispatch]);

  return (
    <Fragment>
            {notification &&  <Notification title={notification.title} message={notification.message} status={notification.status}/>}
            <Header/>
            <Cart/>
            <AvailableItems/>
    </Fragment>
  )
}

export default ComponentWrapper