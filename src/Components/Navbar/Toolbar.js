import React from 'react';
import './css/Toolbar.css';
import DrawerToggleButton from'./DrawerToggleButton';
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
const PAGE_LOGIN='login';
const PAGE_SIGNUP='signup'
function Toolbar(props){
  const {cart, navigateTo, drawerClickHandler}=props
 
    return(
      <header className="toolbar">
       
      <nav className="toolbar__navigation">
          <div className="toolbar_toggle-button">
          <DrawerToggleButton onClick={drawerClickHandler}/>
              </div>
              <div className="toolbar__logo"><h1 onClick={() => navigateTo(PAGE_PRODUCTS)}>BOOKSHOP</h1></div>
                  <div className="spacer"/>
              
              <div className="toolbar_navigation-itmes">
                   <ul>
                   <li onClick={() => navigateTo(PAGE_PRODUCTS)} >ALL BOOKS</li>
                  <li onClick={() => navigateTo(PAGE_LOGIN)}>LOG IN</li>
                  <li onClick={() => navigateTo(PAGE_SIGNUP)}>SIGN UP</li>
                
                  </ul>
                  <ul>
                  <li> <img src="Images/search.png" alt="search" width="40"/></li>
                    <li> <img onClick={() => navigateTo(PAGE_LOGIN)} src="Images/account.png" alt="account" width="40"/></li>
                    </ul> </div>               
                  <div className="toolbar__cart">
                  <span>{cart.length}</span>
                   <img onClick={() => navigateTo(PAGE_CART)} src="Images/basket.png" alt="Basket" width="40"/>
                  </div>
                  
                     </nav>
          </header>
    )

}
export default Toolbar;