import React, {useState} from 'react';
import Products from './Components/Products'
import Cart from './Components/Cart';
import Toolbar from './Components/Navbar/Toolbar';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';



const PAGE_PRODUCTS='products'
const PAGE_CART='cart'
const PAGE_LOGIN='login'
const PAGE_SIGNUP='signup'

function App() {
 
  const [page,setPage]=useState(PAGE_PRODUCTS)
  const [cart, setCart]=useState([]);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }
  return (
    
    <div className="App">
    <Toolbar cart={cart} setPage={setPage} navigateTo={navigateTo}/>
    <main style={{ marginTop: '100px' }}>

      {page ===PAGE_PRODUCTS&& (<Products cart={cart} setCart={setCart} navigateTo={navigateTo} />)}
      {page ===PAGE_CART&& (<Cart cart={cart} setCart={setCart}/>)}

      {page ===PAGE_LOGIN&&(<LogIn/>)}
      {page===PAGE_SIGNUP&&(<SignUp/>)}
      </main>
    </div> 
    
  );
}

export default App;
