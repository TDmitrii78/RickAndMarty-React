import { Component } from "react";

import CharacterItem from "../Character-item/Character-item";

import "./Main-container.css";


class MainContainer extends Component {

    render() {
        const name = "morty", species = "humen", status = "alive";
        return (

            <ul className="grid_container">

                <CharacterItem 
                    name={name}
                    species={species}
                    status={status}
                />
            
            </ul>
        )
    }
}

export default MainContainer;