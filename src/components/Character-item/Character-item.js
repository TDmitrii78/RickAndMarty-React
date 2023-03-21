import { ColgroupHTMLAttributes, Component } from "react";

import itemFoto from "../../resourses/img/morty.jpeg";

class CharacterItem extends Component {

    render() {
        return (
            <li>
            <img src={itemFoto} alt="morty"/>
            <div>
                <h3>Morty Smith</h3>
                <p>Human - Alive</p>
                <button>Add to Favorites</button>
            </div>
            </li>
        )
    }
}

export default CharacterItem;