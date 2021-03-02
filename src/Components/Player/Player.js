import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    const { picture, name, salary } = props.player;

    return (
        <div>
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                <img src={picture} class="card-img-top image" alt="..." />
                <div class="card-body">
                    <h1 class="card-title">{name}</h1>
                    <p class="card-text">{salary}</p>
                    <button class="btn btn-primary" onClick={() => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faCheckCircle} />Add players</button>
                </div>
            </div>
        </div>
    );
};

export default Player;