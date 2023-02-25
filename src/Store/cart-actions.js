import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";


export const fetchCartData = ()=>{
    return async (dispatch)=>{

        const fetchData = async ()=>{
            const response = await fetch("https://firstreactapplication-477cd-default-rtdb.firebaseio.com/cart.json");
            console.log(response.status)
            if(!response.ok){
                throw new Error("Failed to fetch data!")
            }
            const data = await response.json()

            return data;
        };

        try{
            const cartData = await fetchData();
            // console.log(cartData)
            dispatch(cartActions.replaceCart({
                items : cartData.items || [],
                totalQuantity : cartData.totalQuantity
            }
                // cartData
            )
            );
        }catch(error){
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error",
                  message: "Something went wrong to fetch data!",
                })
              );
        }


    }
}

export const sendCartData = (cart) => {
    
    return async (dispatch) => {
  
      dispatch(
        uiActions.showNotification({
          status: "sending",
          title: "Sending...",
          message: "Data is being ready to sent!",
        })
      );
  
      const sendRequest = async () => {
        // console.log(cart)
        const response = await fetch(
          "https://firstreactapplication-477cd-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({
                items : cart.items,
                totalQuantity : cart.totalQuantity
            }),
          }
        );
  
        if (!response.ok) {
          throw new Error("Sending cart data failed!");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Data has been set successfully.",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Sending cart data has been failed",
          })
        );
      }
    };
  };