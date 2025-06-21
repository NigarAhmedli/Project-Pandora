import React, { useEffect } from 'react'
import style from './Header.module.scss'
import { IoIosSearch } from "react-icons/io";
import { PiHeartLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';
import { PiUserCircleThin } from "react-icons/pi";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { HiOutlineBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { getBasketThunk } from '../../../redux/reducers/basketSlice';

const Header = () => {

  const user = useSelector((state) => state.auth.user);
  console.log("USER:", JSON.stringify(user, null, 2));
const basket = useSelector((state) => state.basket.basket);
const basketCount = basket.length;



const dispatch = useDispatch();

useEffect(() => {
  dispatch(getBasketThunk());
  dispatch(getBasketThunk());

}, [dispatch]);


  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  }

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  }

  const goToBasket = () => {
    navigate('/basket');
  }

  const goToWishlist = () => {
    navigate('/wishlist');
  }

  const goToRegister = () => {
    navigate('/register');
  }

  const goToProfile = () => {
    navigate('/profile');
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <p>Free shipping on orders $95+</p>
      </div>

      <div className={style.main}>
        <div className={style.pandora}>
          <div className={style.logo}>
             <img onClick={goToHome}
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgdmlld0JveD0iMCAwIDE2MiAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+UGFuZG9yYTwvdGl0bGU+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDEuNTc0IDkuNzU5OTdDMTA4LjQyNCA5Ljc1OTk3IDExMy42MjkgMTUuMTIxMSAxMTMuNjI5IDIyLjA5NzRDMTEzLjYyOSAyOS4xMDgxIDEwOC40MjQgMzQuNDM0OCAxMDEuNTc0IDM0LjQzNDhDOTQuNzkxIDM0LjQzNDggODkuNTE5MSAyOS4xMDgxIDg5LjUxOTEgMjIuMDk3NEM4OS41MTkxIDE1LjEyMTEgOTQuNzkxIDkuNzU5OTcgMTAxLjU3NCA5Ljc1OTk3Wk03My45OTEyIDEwLjEwMzZDODEuMjQ0MiAxMC4xMDM2IDg2LjI0NzUgMTUuMTIxMSA4Ni4yNDc1IDIyLjE2NjFDODYuMjQ3NSAyOS4xNDI0IDgxLjE0MzUgMzQuMzY2IDczLjkyNCAzNC4zNjZDNzIuMDM1MiAzNC4zNjYgNzAuMzYyNSAzNC4xODQ4IDY4Ljg1MTUgMzQuMTYyMkw2OC41NTE0IDM0LjE1OTlINjYuMTMzOEw2Ni4xMDAyIDM0LjEyNTVDNjYuMTAwMiAzNC4xMjU1IDY2LjI2MiAzMi41MDIyIDY2LjI2NzkgMjkuNjc4NUw2Ni4yNjgxIDE0Ljc0M0M2Ni4yNjgxIDExLjg3NTEgNjYuMTA2MiAxMC4xOTk2IDY2LjEwMDQgMTAuMTM5Nkw2Ni4xMDAyIDEwLjEzOEw2Ni4xMzM4IDEwLjEwMzZINzMuOTkxMlpNNi44ODM2NyAxMC4xMDM2QzExLjQ4MzkgMTAuMTAzNiAxNS40Nzk4IDEyLjc4NDIgMTUuNDc5OCAxNy41MjY3QzE1LjQ3OTggMjIuNDA2NiAxMS41MTc1IDI1LjI5MzQgNi44ODM2NyAyNS4yOTM0QzYuNDM0OTEgMjUuMjkzNCA1LjE2MDA2IDI1LjIzMDggNC41MTk0MiAyNS4xNjUzTDQuNDMyMzcgMjUuMTU2TDQuMzk4NzcgMjUuMTkwM0w0LjM5ODk0IDI5LjY3ODVDNC40MDQ3MiAzMi40NDk5IDQuNTYwNzIgMzQuMDY0OSA0LjU2NjUgMzQuMTIzOEw0LjU2NjY2IDM0LjEyNTVMNC41MzMxNSAzNC4xNTk4SDAuMDMzNTEyOUwwIDM0LjEyNTVDMCAzNC4xMjU1IDAuMTYxODM3IDMyLjUwMjIgMC4xNjc3MjIgMjkuNjc4NUwwLjE2Nzg4NyAyOS41MjA0VjE0Ljc0M0MwLjE2Nzg4NyAxMS44NzUxIDAuMDA2MDQ5NDggMTAuMTk5NiAwLjAwMDE2NDQ4MSAxMC4xMzk2TDAgMTAuMTM4TDAuMDMzNTEyOSAxMC4xMDM2SDYuODgzNjdaTTI3LjYyNzEgMTAuMTAzNkwyNy42NjA3IDEwLjEzOEwyNy42NjEyIDEwLjE0MDFMMjcuNjY1MiAxMC4xNTY4QzI3LjY5NDEgMTAuMjczNCAyNy44NjM1IDEwLjkyNTIgMjguMjg2IDExLjk1MTFMMjguMzMyMiAxMi4wNjI1TDM2LjY5MzQgMzEuNTgyNEMzNy40MTM3IDMzLjE5MDcgMzguMDA2MiAzNC4wODAzIDM4LjAzNTQgMzQuMTIzOEwzOC4wMzY1IDM0LjEyNTVWMzQuMTU5OUgzMy40MDI3TDMzLjM2OTEgMzQuMTI1NUwzMy4zNjYgMzQuMTE3N0MzMy4zMzM5IDM0LjAzNjkgMzMuMDU1NSAzMy4zMzI3IDMyLjYwNzEgMzIuMDgzTDMyLjU2MzIgMzEuOTYwNEwzMS4wMTg2IDI4LjI4MzNIMjAuODEwNkwxOS4zNjY3IDMxLjk2MDRDMTguODEyMiAzMy4zNjI1IDE4LjcwMTMgMzMuOTUzOSAxOC42OTU0IDM0LjExMjZMMTguNjk1MSAzNC4xMjU1TDE4LjY2MTYgMzQuMTU5OUgxNC4wMjc3VjM0LjEyNTVDMTQuMDI3NyAzNC4xMjU1IDE0LjA2OTcgMzQuMDY5NiAxNC4xNDMxIDMzLjk2MDFMMTQuMTkwOSAzMy44ODc5QzE0LjQyMjEgMzMuNTM0NCAxNC44Njc1IDMyLjc5MjYgMTUuMzIwNSAzMS43MDQ3TDE1LjM3MDkgMzEuNTgyNEwyMy4yOTU1IDEyLjA2MjVDMjMuNzgzNCAxMC44OTczIDIzLjkyNDcgMTAuMTgzNiAyMy45MzMxIDEwLjE0MDFMMjMuOTMzNSAxMC4xMzhMMjMuOTY3IDEwLjEwMzZIMjcuNjI3MVpNNDQuNTA5MiAxMC4xMDM2TDU3LjIwMiAyNi44Mzk5SDU3LjIzNTVMNTcuMjM1NCAxNC41ODQ5QzU3LjIyOTUgMTEuNzYxMyA1Ny4wNjc2IDEwLjEzOCA1Ny4wNjc2IDEwLjEzOEw1Ny4xMDEyIDEwLjEwMzZINjEuMTk3OUw2MS4yMzE1IDEwLjEzOEM2MS4yMzE1IDEwLjEzOCA2MS4wNjM2IDExLjgyMiA2MS4wNjM2IDE0Ljc0M0w2MS4wNjM3IDI5LjY3ODVDNjEuMDY5NiAzMi41MDIyIDYxLjIzMTUgMzQuMTI1NSA2MS4yMzE1IDM0LjEyNTVMNjEuMTk3OSAzNC4xNTk4SDU3LjM2OTlMNDQuNjA5OSAxNy4xODNINDQuNTc2M1YyOS41MjA0QzQ0LjU3NjMgMzIuNDQxNiA0NC43NDQzIDM0LjEyNTUgNDQuNzQ0MyAzNC4xMjU1TDQ0LjcxMDcgMzQuMTU5OEg0MC42MTRMNDAuNTgwNSAzNC4xMjU1QzQwLjU4MDUgMzQuMTI1NSA0MC43NDg0IDMyLjQ0MTYgNDAuNzQ4NCAyOS41MjA0VjEyLjUwOTJDNDAuNzQ4NCAxMS45OTM4IDQwLjQ3OTcgMTEuMjM3NyAzOS45NzYxIDEwLjEzOEw0MC4wMDk2IDEwLjEwMzZINDQuNTA5MlpNMTI1LjIxNSAxMC4xMDM2QzEyOS44MTUgMTAuMTAzNiAxMzIuODA0IDEzLjYwODkgMTMyLjgwNCAxNy41OTU0QzEzMi44MDQgMjAuNDcyOSAxMzAuNTg4IDIzLjM1MDUgMTI4LjE3OSAyMy45NjEzTDEyOC4wNjkgMjMuOTg3NVYyNC4wMjE5QzEyOC45MDcgMjQuMjUyOCAxMjkuNzQ1IDI0Ljk1ODkgMTMwLjMxNiAyNS44NjYzTDEzMC4zODYgMjUuOTgwN0wxMzIuNjY5IDI5LjgyOTdDMTM0LjE2MSAzMi4zNTE1IDEzNS40NjQgMzQuMDA4MiAxMzUuNTUyIDM0LjExOTVMMTM1LjU1NyAzNC4xMjU1VjM0LjE1OTlIMTMwLjE4NUwxMzAuMTUxIDM0LjEyNTVDMTMwLjE1MSAzNC4xMjU1IDEyOS45NzcgMzMuNjg5NiAxMjkuNTk5IDMyLjkxNzRMMTI5LjUxNyAzMi43NTI5QzEyOS4xNjYgMzIuMDQ3NiAxMjguNjYyIDMxLjA5NzUgMTI3Ljk4NCAyOS45NjYzTDEyNy45MDEgMjkuODI5N0wxMjUuOTg3IDI2LjY2OEMxMjUuMTk5IDI1LjM4OTkgMTI0LjM0NSAyNC45MzQ4IDEyMi4yIDI0LjkxNkwxMjIuMDU5IDI0LjkxNTRWMjkuNTIwNEMxMjIuMDU5IDMyLjM4ODQgMTIyLjIyIDM0LjA2MzggMTIyLjIyNiAzNC4xMjM4TDEyMi4yMjcgMzQuMTI1NUwxMjIuMTkzIDM0LjE1OTlIMTE3LjY5M0wxMTcuNjYgMzQuMTI1NUMxMTcuNjYgMzQuMTI1NSAxMTcuODIyIDMyLjUwMjIgMTE3LjgyOCAyOS42Nzg1VjE0LjU4NDlDMTE3LjgyMiAxMS44MTM2IDExNy42NjYgMTAuMTk4NSAxMTcuNjYgMTAuMTM5NkwxMTcuNjYgMTAuMTM4TDExNy42OTMgMTAuMTAzNkgxMjUuMjE1Wk0xNTEuNDczIDEwLjEwMzZMMTUxLjUwNyAxMC4xMzhDMTUxLjUwNyAxMC4xMzggMTUxLjY3NSAxMC44NTk3IDE1Mi4xNzggMTIuMDYyNUwxNjAuNTQgMzEuNTgyNEMxNjEuMjc4IDMzLjIzMTkgMTYxLjg4MyAzNC4xMjU1IDE2MS44ODMgMzQuMTI1NVYzNC4xNTk5SDE1Ny4yNDlMMTU3LjIxNSAzNC4xMjU1TDE1Ny4yMTIgMzQuMTE3N0MxNTcuMTc5IDM0LjAzNDMgMTU2Ljg4NCAzMy4yODY2IDE1Ni40MDkgMzEuOTYwNEwxNTQuODY1IDI4LjI4MzNIMTQ0LjY1N0wxNDMuMjEzIDMxLjk2MDRDMTQyLjY0MiAzMy40MDM4IDE0Mi41NDEgMzMuOTg4IDE0Mi41NDEgMzQuMTI1NUwxNDIuNTA4IDM0LjE1OTlIMTM3Ljg3NFYzNC4xMjU1QzEzNy44NzQgMzQuMTI1NSAxMzguNTQ2IDMzLjIzMTkgMTM5LjIxNyAzMS41ODI0TDE0Ny4xNDIgMTIuMDYyNUMxNDcuNjQ1IDEwLjg1OTcgMTQ3Ljc4IDEwLjEzOCAxNDcuNzggMTAuMTM4TDE0Ny44MTMgMTAuMTAzNkgxNTEuNDczWk0xMDEuNTc0IDEzLjcxMjFDOTcuMjA4NiAxMy43MTIxIDkzLjgxNzIgMTcuMzU0OCA5My44MTcyIDIyLjA5NzRDOTMuODE3MiAyNi44Mzk4IDk3LjIwODYgMzAuNDgyNyAxMDEuNTc0IDMwLjQ4MjdDMTA1Ljk3MyAzMC40ODI3IDEwOS4zNjQgMjYuODM5OCAxMDkuMzY0IDIyLjA5NzRDMTA5LjM2NCAxNy4zNTQ4IDEwNS45NzMgMTMuNzEyMSAxMDEuNTc0IDEzLjcxMjFaTTczLjYyMTkgMTQuMDIxNEg3MC40OTlWMjkuMzE0MkM3MC40OTkgMjkuOTY3MiA3MC41NjYyIDMwLjEwNDYgNzAuOTM1NSAzMC4yMDc3QzcxLjUzOTkgMzAuMzc5NiA3Mi41ODA5IDMwLjQxNCA3My43MjI2IDMwLjQxNEM3OC42OTIyIDMwLjQxNCA4MS45NDk0IDI2LjgzOTkgODEuOTQ5NCAyMi4yMDA0QzgxLjk0OTQgMTcuNTI2NyA3OC42OTIyIDE0LjAyMTQgNzMuNjIxOSAxNC4wMjE0Wk0yNS43NDY3IDE1Ljg0MjdIMjUuNzEzMUwyMi4zODg4IDI0LjMzMTJIMjkuMzM5N0wyNS43NDY3IDE1Ljg0MjdaTTE0OS41OTMgMTUuODQyN0gxNDkuNTU5TDE0Ni4yMzUgMjQuMzMxMkgxNTMuMTg2TDE0OS41OTMgMTUuODQyN1pNNy4wMTc5NCAxNC4wNTU3SDQuMzk4NzdWMjEuMTY5NUM0LjkzNjA5IDIxLjI3MjYgNi4xNDQ4OSAyMS4zNDEzIDYuNjgyMTkgMjEuMzQxM0M5LjU2OTkyIDIxLjM0MTMgMTEuMTgxNyAxOS45NjY3IDExLjE4MTcgMTcuNTI2N0MxMS4xODE3IDE1LjAxOCA5LjMzNDg2IDE0LjA1NTcgNy4wMTc5NCAxNC4wNTU3Wk0xMjQuNjQ0IDE0LjAyMTRIMTIyLjA1OVYyMC45NjMzQzEyMi42OTcgMjEuMTAwNyAxMjMuNjM3IDIxLjEwMDcgMTI0LjE3NCAyMS4xMDA3QzEyNy4xMjkgMjEuMTAwNyAxMjguNTA2IDE5LjQ1MTIgMTI4LjUwNiAxNy42Mjk4QzEyOC41MDYgMTUuNzA1MyAxMjcuMTYzIDE0LjAyMTQgMTI0LjY0NCAxNC4wMjE0Wk0xMDMuODI0IDcuMDEwNjZDMTA0LjIyNyA3LjAxMDY2IDEwNC41OTYgNy4zNTQzNyAxMDQuNTk2IDcuODAxMTFDMTA0LjU5NiA4LjI4MjI2IDEwNC4yMjcgOC42MjU4OSAxMDMuODI0IDguNjI1ODlDMTAzLjM4NyA4LjYyNTg5IDEwMy4wMTggOC4yODIyNiAxMDMuMDE4IDcuODAxMTFDMTAzLjAxOCA3LjM1NDM3IDEwMy4zODcgNy4wMTA2NiAxMDMuODI0IDcuMDEwNjZaTTk5LjMyNDEgNy4wMTA2NkM5OS43MjcxIDcuMDEwNjYgMTAwLjA5NiA3LjM1NDM3IDEwMC4wOTYgNy44MDExMkMxMDAuMDk2IDguMjgyMjUgOTkuNzI3MSA4LjYyNTg5IDk5LjMyNDEgOC42MjU4OUM5OC44ODc3IDguNjI1ODkgOTguNTE4MyA4LjI4MjI1IDk4LjUxODMgNy44MDExMkM5OC41MTgzIDcuMzU0MzcgOTguODg3NyA3LjAxMDY2IDk5LjMyNDEgNy4wMTA2NlpNMTAxLjU3NCA2Ljc3MDE1QzEwMS45NzcgNi43NzAxNSAxMDIuMzQ2IDcuMTEzOCAxMDIuMzQ2IDcuNTYwNTRDMTAyLjM0NiA4LjA0MTY5IDEwMS45NzcgOC4zODUzMiAxMDEuNTc0IDguMzg1MzJDMTAxLjEzNyA4LjM4NTMyIDEwMC43NjggOC4wNDE2OSAxMDAuNzY4IDcuNTYwNTRDMTAwLjc2OCA3LjExMzggMTAxLjEzNyA2Ljc3MDE1IDEwMS41NzQgNi43NzAxNVpNMTA1LjYzNyAwLjk2MjI2OUwxMDUuODA1IDAuOTk2NjUxTDEwNS44MzggMS4wMzEwM0wxMDQuODY1IDYuMzIzNEwxMDQuODMxIDYuMzU3N0wxMDMuNDg4IDYuMDQ4NDZMMTAzLjQ1NCA2LjAxNDA4TDEwNS42MDMgMC45OTY2NTFMMTA1LjYzNyAwLjk2MjI2OVpNOTcuNTEwOCAwLjk2MjI2OUw5Ny41NDQ1IDAuOTk2NjUxTDk5LjY5MzUgNi4wMTQwOEw5OS42NTk5IDYuMDQ4NDZMOTguMzE2NyA2LjM1NzdMOTguMjgzMiA2LjMyMzRMOTcuMzA5NCAxLjAzMTAzTDk3LjM0MjkgMC45OTY2NTFMOTcuNTEwOCAwLjk2MjI2OVpNMTAxLjY3NSAwTDEwMS43MDggMC4wMzQzODExTDEwMi4yNzkgNS45NDUzTDEwMi4yNDUgNS45Nzk3SDEwMC45MDJMMTAwLjg2OSA1Ljk0NTNMMTAxLjQ3MyAwLjAzNDM4MTFMMTAxLjUwNyAwSDEwMS42NzVaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48L3N2Zz4="
            alt=""
          />
          </div>


          <div className={style.icons}>
            <div onClick={goToWishlist} className={style.icon}>
              <PiHeartLight />
            </div>
            <div onClick={goToProfile} className={style.icon}>
              <PiUserCircleThin />
            </div>
            <div onClick={goToRegister} className={style.icon}>
              <CiUser />
            </div>
                <div onClick={goToBasket} className={style.basketWrapper}>
              <LiaShoppingBagSolid className={style.basketIcon} />
              {basketCount > 0 && (
                <span className={style.badge}>{basketCount}</span>
              )}
            </div>


          </div>

          <div className={style.navbar}>
            <button onClick={toggleDrawer}><HiOutlineBars3 /></button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              className='bla bla bla'
            >
              <div className={style.navcontent}>
                <ul>
                  <li><a href="/profile">Profile <PiUserCircleThin /> </a></li>
                  <li><a href="/register">User <CiUser /> </a></li>
                  <li><a href="/wishlist">Wishlist <PiHeartLight /></a></li>
                  <li><a href="/basket">Basket <LiaShoppingBagSolid /> </a></li>
                  <li><a href="/charms">Charms</a></li>
                  <li><a href="/bracelet">Bracelets</a></li>
                  <li><a href="/necklaces">Necklaces</a></li>
                  <li><a href="/collection">Collections</a></li>
                  {user?.role === "admin" && (
                    <li><Link to="/adminpanel">Admin Panel</Link></li>
                  )}
                </ul>
              </div>
            </Drawer>
          </div>
        </div>
      </div>

      <div className={style.navs}>
        <ul>
          <li><a href="/charms">Charms</a></li>
          <li><a href="/bracelet">Bracelets</a></li>
          <li><a href="/necklaces">Necklaces</a></li>
          <li><a href="/rings">Rings</a></li>
          <li><a href="/collection">Collections</a></li>
          {user?.role === "admin" && (
            <li><Link to="/adminpanel">Admin Panel</Link></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

