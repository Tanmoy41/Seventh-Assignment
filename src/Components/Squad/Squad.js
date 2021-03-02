import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Squad.css';
import playerData from '../../fakeData/data.json';

const Squad = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playerData);
        console.log('playerData');
    }, [])
    const [cart, setCart] = useState([]);

    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className="squad-container">
            <div className="player-container">
                {
                    players.map(footballer => <Player handleAddPlayer={handleAddPlayer} player={footballer} ></Player>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Squad;