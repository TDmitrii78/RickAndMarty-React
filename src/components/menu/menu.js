import { Component } from "react";

import "./menu.css";

class Menu extends Component {

    render() {
        return (
            <div class="menu">
                <ul>
                    <li>All</li>
                    <li>Human</li>
                    <li>Animal</li>
                    <li>Alien</li>
                </ul>
                <div>
                    <input type="text" placeholder="Search by name..."/>
                    <button>Search</button> 
                </div> 
            </div>
        );
    }
}

export default Menu;