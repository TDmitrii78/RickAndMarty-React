import { Component } from "react";

import ServiceRickAndMorty from "../Service-RickAndMorty/ServiceRickAndMorty";
import CharacterItem from "../Character-item/Character-item";


import "./Main-container.css";


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objectArray: "",
            prevPage: "",
            nextPage: "",
            pages: ""
        }
    } 

    serviceRickAndMorty = new ServiceRickAndMorty();

    componentDidMount() {
        this.serviceRickAndMorty.getRequest().then(res => {
            this.setState({
                objectArray: res.results,
                prevPage: res.info.prev,
                nextPage: res.info.next,
                pages: res.info.pages
            })
        });
    }

    render() {
        const object = this.state.objectArray;

        let element;
        if (object.length > 0) {
            element = this.state.objectArray.map(el => {
        
                return (
                    <CharacterItem 
                        name={el.name}
                        species={el.species}
                        status={el.status}
                        itemFoto={el.image}
                    />
                )
            })
        }

        return (

            <ul className="grid_container">
                {element}
            </ul>
        )
    }
}

export default MainContainer;