import { Component } from "react";

import "./Menu.css";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: "",
            lightSerch: false
        }
    }

    onInputName = (event) => {
        this.setState(({inputName}) => ({
            inputName: event.target.value
        }))
    }

    onFocusSearch = () => {
        this.setState(({lightSerch}) => ({
            lightSerch: true
        }))
    }

    onBlurSearch = () => {
        this.setState(({lightSerch}) => ({
            lightSerch: false
        }))
    }

    onFilterCharacter = (event) => {    
         this.props.onToggle(event.target.dataset.menu);
    }

    onClickButton = () => {
        const word = this.state.inputName;
        if (word) {
            this.props.onToggle(word);
        }
        this.setState({ inputName: "" });
    }

    render() {
        let lightButton;
        if (this.state.lightSerch) {
            lightButton = "lightButton";
        } else {
            lightButton = null;
        }

        let className = "menu";
        if (this.props.visible) {
            className += ` visibleMenu`;
        } else {
            className += ` hidenMenu`;
        }

        return (
            <div className={className}>
                <ul onClick={this.onFilterCharacter}>
                    <li data-menu="All">All</li>
                    <li data-menu="Human">Human</li>
                    <li data-menu="Animal">Animal</li>
                    <li data-menu="Alien">Alien</li>
                </ul>
                <div>
                    <input 
                        type="text" 
                        placeholder="Search by name..."
                        onChange={this.onInputName}
                        value={this.state.inputName}
                        onFocus={this.onFocusSearch}
                        onBlur={this.onBlurSearch}/>
                    <button 
                        className={lightButton}
                        onClick={this.onClickButton}
                        >Search</button> 
                </div> 
            </div>
        );
    }
}

export default Menu;