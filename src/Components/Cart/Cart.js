import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        total += player.salary;
    }
    return (
        <div class="cart-body">
            <h1>Team Summary</h1>
            <h4>Selected Player: {cart.length} </h4>
            <h4>Total Salary: {total} </h4>
        </div>
    );
};

export default Cart;