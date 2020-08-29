import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce( (total, pd) => parseFloat(total) + parseFloat(pd.price), 0);

    let shipping = 0;
    if(total == 0){
        shipping = 0;
    }
    else if(total > 99){
        shipping = 0;
    }
    else{
        shipping = 6.00;
    }

    let tax = total / 10;
    let grandTotal = total + shipping + tax;

    const formatNumber = (num) =>{
        const fix = num.toFixed(2);
        return Number(fix);
    }
    return (
        <div className='cart'>
            <div class='text-center'>
                <h3>Your enrollment list</h3>
            </div>
            <div className='price-list'>
                <p>Total course enrolled: {cart.length}</p>
                <p>Cost: $ {formatNumber(total)}</p>
                <p>Shipping cost: ${shipping} </p>
                <p>Tax: $ {formatNumber(tax)}</p>
                <hr></hr>
                <h5>Grand total: ${formatNumber(grandTotal)} </h5>
            </div>
            
        </div>
    );
};

export default Cart;