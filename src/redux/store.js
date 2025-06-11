import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./reducers/productSlice";
import  basketSlice  from "./reducers/basketSlice";
import  wishlistSlice  from "./reducers/wishlistSlice";
import categorySlice  from "./reducers/categorySlice";
import charmsSlice  from "./reducers/charmsSlice";

export const store=configureStore({

    reducer:{
       products:productSlice,
  basket:basketSlice,
  wishlist:wishlistSlice,
  category:categorySlice, 
  charms:charmsSlice,
    }
  

})


export default store;