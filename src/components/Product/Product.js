import React from 'react';
import './Product.css';

const Product = (props) => {
    let {name, price, img} = props.product;
    return (
        <div className='full-product'>
            <div className="row product">
                <div className="col-md-4 ">
                <img src={img} alt=""/>
                </div>
                <div className="col-md-8">
                     <p className='name'>{name}.</p> 
                     <p className='price'>${price}</p>  
                     <button onClick={() => props.enrollHandler(props.product)} className='product-btn'>Enroll</button> 
                </div>
            </div>
             
        </div>
    );
};

export default Product;