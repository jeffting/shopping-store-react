import React from "react";

import {GetProducts} from './queries/get_products';
import './shopping.css';


function MainPage({addToCart}) {
    return (
    <div>
        <Products addToCart={addToCart}/>
    </div>
    )
}

function Products({addToCart}) {
    const [products, setProducts] = React.useState('');
    React.useEffect(() => {
        async function getProducts() {
            const prods = await GetProducts();
            setProducts(prods);
        }
        if (!products) {
            getProducts();
        }
    });

    return (<div>{products && products.map((item,index)=>{
        return <Product product={item} addToCart={addToCart} key={item.id}/>
    })}</div>)
}

function Product(props) {
    return (
        <div className="productContainer">
            <img className="productImage" src={props.product.image} alt={props.product.name} />
            <div className="descriptionContainer">
                <div className="productName">{props.product.name}</div>
                <div className="productDescription">{props.product.description}</div>
                <div className="flexButton">
                    <div className="price">${props.product.price.toFixed(2)}</div>
                    {!props.product.isAvailable &&
                        <span style={{color:"red"}}>Out of stock</span>}
                    {props.product.isAvailable &&
                    <div><button className="addToCartButton" onClick={event => props.addToCart(props.product.id)}>Add to Cart</button></div>}
                </div>
            </div>
        </div>
    )
}

export {MainPage};