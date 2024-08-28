import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /*This is used to shore the initial cart data*/ 
  items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
  statusTab: false,
};
const cartSlice = createSlice({
  name: "cart" /*This is the name of the state*/,
  initialState,
  reducers: {
    addToCart(state, action) {
      const { prodId, quantity } = action.payload;
      const indexedItem = state.items.findIndex(
        (item) => item.prodId === prodId
      );
      if (indexedItem >= 0) {
        state.items[indexedItem].quantity += quantity;
      } else {
        state.items.push({ prodId, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state.items))
    },
    changeQuantity(state, action) {
      const { prodId, quantity } = action.payload;
      const indexedItem = state.items.findIndex(
        (item) => item.prodId === prodId
      );
      if (quantity > 0) {
        state.items[indexedItem].quantity = quantity;
      } else {
        //delete state.items[indexedItem];
        state.items = state.items.filter((item) => item.prodId !== prodId);
      }
      localStorage.setItem("carts", JSON.stringify(state.items))
    },
    toggleStatusTab(state){
      if(state.statusTab === false){
        state.statusTab = true;
      }else{
        state.statusTab = false;
      }
    }
  },
});
export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;

/*This is file is used to store the value of the cart*/
