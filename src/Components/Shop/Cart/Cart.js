import React, { useState } from 'react';

const Cart = (props) => {



    const total = props.cartItem.reduce((result, currentValue) => result + currentValue.price, 0);
    //  console.log(total);



    return (
        <div className="text-center pt-5">
            <h3>Order Summary</h3>
            <h5>Items ordered:{props.cartItem.length}</h5>
            <h5 className="text-danger">Order Total: ${total.toFixed(2) }</h5>
        </div>
    );
};

export default Cart;