import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import PandoraCares from "../pages/home/addSection/pandoraCares/PandoraCares";
import AboutPandora from "../pages/home/addSection/aboutPandora/AboutPandora";
import TermsCon from "../pages/home/addSection/termsCon/TermsCon";
import CookiePolicy from "../pages/home/addSection/cookiePolicy/CookiePolicy";
import Privacy from "../pages/home/addSection/privacyPolicy/Privacy";
import BasketSec from "../pages/home/addSection/basketSec/BasketSec";
import WishlistSec from "../pages/home/addSection/aboutPandora/wishlistSec/WishlistSec";
import AdminPanel from "../pages/home/addSection/adminPanel/AdminPanel";
import CharmSec from "../pages/home/addSection/charmSec/CharmSec";
import BraceletSec from "../pages/home/addSection/braceletSec/BraceletSec";
import RingSec from "../pages/home/addSection/ringsSec/RingSec";
import NecklacesSec from "../pages/home/addSection/necklacesSec/NecklacesSec";
import RegisterContent from "../pages/home/addSection/register/RegisterContent";
import LoginSec from "../pages/home/addSection/login/LoginSec";
import DetailPage from "../pages/home/addSection/detailPage/DetailPage";
import PrivRouter from "../pages/home/addSection/privRouter/PrivRouter";
import Profile from "../pages/home/addSection/profile/Profile";
import Payment from "../pages/home/addSection/payment/Payment";
import Succes from "../pages/home/addSection/payment/succes/Succes";
import NotFound from "../pages/home/notFound/NotFound";
import CollectionSec from "../pages/home/addSection/collectionsSec/CollectionSec";
import EditProfile from "../pages/home/addSection/editProfile/EditProfile";
import AdminRoute from "../routes/AdminRoute";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/cares" element={<PandoraCares />} />
          <Route path="/about" element={<AboutPandora />} />
          <Route path="/termscon" element={<TermsCon />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/basket" element={<BasketSec />} />
          <Route path="/wishlist" element={<WishlistSec />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route
  path="/adminpanel" element={ <AdminRoute><AdminPanel /></AdminRoute> }/>

          <Route path="/charms" element={<CharmSec />} />
          <Route path="/bracelet" element={<BraceletSec />} />
          <Route path="/rings" element={<RingSec />} />
          <Route path="/necklaces" element={<NecklacesSec />} />
          <Route path="/collection" element={<CollectionSec/>} />
          <Route path="/register" element={<RegisterContent />} />
          <Route path="/login" element={<LoginSec />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/charms/:id" element={<DetailPage />} />
          <Route path="/bracelet/:id" element={<DetailPage/>} />
          <Route path="/necklaces/:id" element={<DetailPage/>} />
          <Route path="/rings/:id" element={<DetailPage/>} />
          <Route path="/collection/:id" element={<DetailPage />} />
          <Route element={<PrivRouter />}>
            <Route path="/profile" element={<Profile/>} />
             <Route path="/edit-profile" element={<EditProfile />} />
          </Route>
           <Route path='/payment' element={<Payment/>} />
            <Route path='/payment-success' element={<Succes/>} />
             <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
