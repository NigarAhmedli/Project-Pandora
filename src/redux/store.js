import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./reducers/productSlice";
import  basketSlice  from "./reducers/basketSlice";
import  wishlistSlice  from "./reducers/wishlistSlice";
import categorySlice  from "./reducers/categorySlice";
import charmsSlice  from "./reducers/charmsSlice";
import braceletSlice from "./reducers/braceletSlice";
import necklacesSlice from "./reducers/necklacesSlice";
import ringsSlice from "./reducers/ringsSlice";
import collectionSlice from "./reducers/collectionSlice";
import  authSlice  from "./reducers/authSlice";
import paymentSlice from './reducers/paymentSlice';


export const store=configureStore({

    reducer:{
       products:productSlice,
  basket:basketSlice,
  wishlist:wishlistSlice,
  category:categorySlice, 
  charms:charmsSlice,
  bracelet:braceletSlice,
  necklaces:necklacesSlice,
  rings:ringsSlice,
  collection:collectionSlice,
  auth:authSlice,
  payment:paymentSlice
  
    }
  

})


export default store;