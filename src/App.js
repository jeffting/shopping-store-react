import logo from './logo.svg';
import './App.css';
import {MainPage} from './shopping';
import {useState, useEffect} from 'react';

function App() {
  const [cartItems, setCartItems] = useState([])
  const handleAddToCart = ((id) => {
    cartItems.push(id);
    let cart = [...cartItems]
    setCartItems(cart);
  });
  return (<div className="main">
    <AppBar cartItems={cartItems}/>
    <MainPage addToCart={handleAddToCart}/>
    </div>
  );
}

function AppBar(props) {
  return (
    <div className='appBar'>
      <div className="titleBar">Sweet Apple Acres</div>
      <div className="cart">{props.cartItems.length} Cart</div>
    </div>
  )
}

export default App;
