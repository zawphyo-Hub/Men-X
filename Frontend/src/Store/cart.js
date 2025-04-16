import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    products: [] 

};
const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            
    
            const{productId, quantity, size} = action.payload;
            const checkProductAdded = (state.items).findIndex(i => i.productId === productId && i.size === size); // Find the added Product with the same productID
            if(checkProductAdded >= 0){
                state.items[checkProductAdded].quantity += quantity; //Added quantiy + quantity if productId exist

            }else{
                state.items.push({productId, quantity, size});

            }
            localStorage.setItem("carts", JSON.stringify(state. items));
        
        },
        changeQuantity(state, action){
            const{productId, quantity} = action.payload;
            const checkProductAdded = (state.items).findIndex(i => i.productId === productId); // Find the added Product with the same productID
            if(quantity > 0){
                state.items[checkProductAdded].quantity = quantity; //Added quantiy + quantity if productId exist

            }else{
                state.items = (state.items).filter(item => item.productId !== productId);

            }
            localStorage.setItem("carts", JSON.stringify(state.items)); 

        },
        removeItem(state, action){
            state.items = (state.items).filter(item => item.productId !== action.payload);
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        clearCart(state) {
            state.items = [];
            localStorage.setItem("carts", JSON.stringify(state.items));
        
        }

    }

})
export const {addToCart, changeQuantity, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;




