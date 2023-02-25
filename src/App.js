import React, { Fragment, useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux';


// import Cart from "../components/Cart/Cart"
import Cart from "./components/Cart/Cart"
import Header from './components/Header/Header';
import AvailableItems from './components/Items/AvailableItems/AvailableItems';
import Notification from './UI/Notification';
import  {sendCartData , fetchCartData}  from './Store/cart-actions';


let isInitial = true;


function App() {

  const cart = useSelector(state=>state.cart);
  const notification = useSelector(state=>state.ui.notification)
  const dispatch = useDispatch();

 
  useEffect(()=>{
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(()=>{
    if (isInitial) {
      isInitial = false;
      return
    };

    if(cart.changed){
      dispatch(sendCartData(cart))
    }

  } , [cart , dispatch]);



  return (
      <Fragment>
            {notification &&  <Notification title={notification.title} message={notification.message} status={notification.status}/>}
            <Header/>
            <Cart/>
            <AvailableItems/>
    </Fragment>
  );
}

export default App;
