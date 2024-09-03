import React from 'react';
import './Cart.css'
function Cart({cart,setCart}){

    const removeFromCart=(productToRemove)=>{
        setCart(cart.filter(product=>product!==productToRemove))
        }
      const clearCart=()=>{
        console.log('empty')
        setCart([]);
      };
      const getTotalSum=()=>{
        return cart.reduce((sum, {price})=>sum+price, 0)
      }
      const shippingPrice= getTotalSum() < 40 ? 6 : 0;
      const TotalPrice=getTotalSum ()+shippingPrice
    return(
<div className="cart">
            <h1>Cart</h1>
<div className="clearCart"> 
            {cart.length>0&&(
            <button onClick={clearCart}><h1>Clear Cart</h1></button>
            )}
            </div>
     <div className="cart-center">
     <div className="cart-info">
     {cart.map((product,idx)=>(
       <div className="single-cart" key={idx}>
         <div className="cart-img"> 
         <img src={product.image} alt={product.name}/>
           </div>
      
        <div className="cart-title sameItem">
       <h3>{product.title}</h3>
       <h4>{product.author}</h4>
       </div>
       <div className="price">
       <h4>£{product.price}</h4>
        </div>
        <div className="delete-item">
      <button onClick={()=>removeFromCart(product)}>
        <h1>Remove</h1>
      </button>
      </div>

     </div>
   
     ))}
     
      </div>
     </div>
     <div className="total">
       Total Price:£{getTotalSum()}
       <br/>
       Shipping Price:£{shippingPrice}
       <br/>
       Total Cost:£{TotalPrice}
     </div>
          </div>
    )

};
export default Cart;