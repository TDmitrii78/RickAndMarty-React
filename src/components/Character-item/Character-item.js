import { Component } from "react";

import "./Character-item.css";

import itemFoto from "../../resourses/img/morty.jpeg";

class CharacterItem extends Component {


    onAddFovarite = () => {
        console.log("add");
    }

    render() {
        const {name, species, status} = this.props;

        return (
            <li className="item">
                <img src={itemFoto} alt="morty"/>
                <div>
                    <h3>{name}</h3>
                    <p>{species} - {status}</p>
                    <button
                        onClick={this.onAddFovarite}
                    >Add to Favorites</button>
                </div>
            </li>
        )
    }
}

export default CharacterItem;