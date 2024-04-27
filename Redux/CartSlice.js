const { createSlice } =require("@reduxjs/toolkit")

const cartSlice = createSlice({
   name: 'cart',
   initialState:[],
   reducers: {
      addtoCart: (state, actions) => {
         const isAvailable = state.find((value) => value.name == actions.payload.name);
         if (isAvailable) {
            actions.payload["quantity"] += 1;
         } else {
            state.push({ ...actions.payload, quantity: 1 });
         }
      },
      removeFrom: (state, actions) => {
         const newList = state.filter((value) => value.name != actions.payload.name);
         return (state = newList);
      },
      incrementsQuantity: (state, actions) => {
         const isAvailable = state.find((value) => value.name == actions.payload.name);
         if (isAvailable) {
            isAvailable.quantity++;
         } else {
            console.log('not Availabel')
         }
      },
      decrementsQuantity: (state, actions) => {
         const isAvailable = state.find((value) => value.name == actions.payload.name);
         if (isAvailable.quantity == 1) {
            isAvailable.quantity = 1
         } else {
            isAvailable.quantity--;
         }
      }

   },

});
export const { addtoCart, removeFrom, incrementsQuantity, decrementsQuantity } = cartSlice.actions;

export default cartSlice.reducer; 