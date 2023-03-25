import { Component } from "react";

import ServiceRickAndMorty from "../Service-RickAndMorty/ServiceRickAndMorty";

import "./Page-info.css";

class PageInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            created: null,
            episode: null,
            gender: null,
            image: null,
            locationName: null,
            name: null,
            species: null,
            status: null,
            type: null
        }
    }

    serviceRickAndMorty = new ServiceRickAndMorty();

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            const url = `https://rickandmortyapi.com/api/character/${this.props.id}`
            this.serviceRickAndMorty.getRequest(url).then(res => {
                console.log(res);
            
                this.setState({
                    created: res.created,
                    episode: res.episode.length,
                    gender: res.gender,
                    image: res.image,
                    locationName: res.location.name,
                    name: res.name,
                    species: res.species,
                    status: res.status,
                    type: res.type
                })
            })
        }
    }

    render() {
        const {created, episode, gender, image, locationName, name, species, status, type} = this.state;
        let className = "character_info"
        if (this.props.visiblPage2) {
            className += ` visiblePage2`;
        } else {
            className += ` hidenPage2`;
        }
        return (
            <div className={className}>
                <div>
                    <h2>Character info</h2>
                    <img src={image} alt="Character"/>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>{species} - {status}</p>
                    <p>{gender}</p>
                    <p>{locationName}</p>
                    <p>Created: {created}</p>
                    <p>Number of episodes: {episode}</p>
                    <button
                        onClick={this.props.onSelectPage1}
                    >Exit</button>
                </div>
            </div> 
        )
    }
}

export default PageInfo;