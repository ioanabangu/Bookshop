import React from 'react';
import './css/SideDrawer.css';
const sideDrawer = props =>{
    const {navigateTo}=props
    let drawerClasses='side-drawer';
    if (props.show){
        drawerClasses='side-drawer open';
    }
   return( <nav className={drawerClasses}>
             <ul>
                   <li onClick={() => navigateTo(PAGE_PRODUCTS)} >ALL BOOKS</li>
                  <li onClick={() => navigateTo(PAGE_LOGIN)}>LOG IN</li>
                  <li onClick={() => navigateTo(PAGE_SIGNUP)}>SIGN UP</li>
                
                  </ul>
        </nav>
   );
};
export default sideDrawer;