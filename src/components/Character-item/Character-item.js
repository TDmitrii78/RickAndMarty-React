import { Component } from "react";

import "./Character-item.css";


class CharacterItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseOver: false,
            mouseOverSelect: false
        }
    }

    onAddFavorite = (event) => {
        this.props.addFavorite(this.props.id);
    }

    onMouseOver = () => {
        this.setState({
            mouseOver: true,
            mouseOverSelect: true
        })
        setTimeout(() => this.setState({mouseOver: false}),500);
    }

    onMouseOut = () => {
        this.setState({
            mouseOverSelect: false
        })
    }

    render() {
        const {name, species, status, itemFoto,favorites, id} = this.props;

        let className = "";
        if (favorites.includes(id)) {
            className += ` select`;
        }

        let classNameMove = "item";
        if (this.state.mouseOver) {
            classNameMove += ` itemMove`;
            console.log(classNameMove);
        }

        let classNameSelect = "";
        if (this.state.mouseOverSelect) {
            classNameSelect = "selectImg";
        }

        return (
            <li className={classNameMove}
                onMouseOver={() => this.onMouseOver()}
                onMouseOut={() => this.onMouseOut()}
            >
                <img 
                    src={itemFoto} alt="Character_Foto"
                    onClick={() => {this.props.onSelectPage2(id); window.scrollTo(0, 0)} }
                    className={classNameSelect}
                />
                <div>
                    <h3>{name}</h3>
                    <p>{species} - {status}</p>
                    <button
                        className={className}
                        onClick={this.onAddFavorite}
                    >Add to Favorites</button>
                </div>
            </li>
        )
    }
}

export default CharacterItem;