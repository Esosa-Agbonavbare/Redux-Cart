import { uiActions } from "./UI-slice";
import { database } from "../firebase";
import { ref, set, get } from "firebase/database";
import { cartActions } from "./Cart-slice";

export const fetchCardData = () => {
    return async (dispatch) => {
        const fetchRequest = async () => {
            const cartRef = ref(database, 'cart');
            await get(cartRef);
        }
        
        try {
            const cardData = await fetchRequest();
            dispatch(cartActions.replaceCart({
                items: cardData.items || [],
                totalQuantity: cardData.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }));
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        );

        const sendRequest = async () => {
            const cartRef = ref(database, 'cart');
            await set(cartRef, {
                items: cart.items,
                totalQuantity: cart.totalQuantity
            });
        }

        try {
            await sendRequest();
    
            dispatch(uiActions.showNotification({
              status: 'success',
              title: 'Success!',
              message: 'Sent cart data successfully!'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }));
        }
    }
}