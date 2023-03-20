import { Component } from "react";

import "./header.css";

class Header extends Component {

    render() {
        return (
            <header class="header">
                <h1>The Rick and Morty API</h1>
                <nav class="navigation">
                    <ul>
                        <li><h2>Character</h2></li>
                        <h2> / </h2>
                        <li><h2>Favorites</h2></li>
                    </ul>
                </nav>
                <div class="like_favorites">
                    <img src="./img/heart.png" alt="heart"/>
                    <h2>7</h2>
                </div>
            </header>
        );
    }
}

export default Header;