import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import fakeData from '../../fakeData/course';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Course = () => {
    const enrollHandler = (product) =>{
        console.log('clicked',product);
        const newCart = [...cart,product];
        setCart(newCart);
    } 
    const list = fakeData;
    const [products] = useState(list);
    
    const [cart, setCart] = useState([]);
    
    
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    { 
                        products.map(pd => <Product 
                            enrollHandler = {enrollHandler}
                            product={pd}></Product>) 
                    }      
                </div>
                <div className="col-md-4">
                    <Cart
                    cart = {cart} 
                    ></Cart>
                </div>
            </div>
            
           
        </div>
    );
};

export default Course;