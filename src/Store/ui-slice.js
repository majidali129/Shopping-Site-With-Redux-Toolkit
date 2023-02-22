import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name : 'ui',
    initialState : {
        cartIsVisible : false,
        notification : null
    },
    reducers : {
        toogle(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state , actions){
            const notificationData = actions.payload;
            state.notification = {
                status : notificationData.status,
                title : notificationData.title,
                message : notificationData.message
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;