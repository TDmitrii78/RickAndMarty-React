import { Component } from "react";

import ServiceRickAndMorty from "../Service-RickAndMorty/ServiceRickAndMorty";
import CharacterItem from "../Character-item/Character-item";


import "./Main-container.css";


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objectArray: [],
            prevPage: null,
            page: null,
            nextPage: null,
            currentPage: 0,
            allPage: null,
            favorites: [],
        }
    } 

    serviceRickAndMorty = new ServiceRickAndMorty();

    componentDidMount() {
        this.filter("All");
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.toggle !== prevProps.toggle) {
            this.filter(this.props.toggle);
        }

        if (this.props.nextPage !== prevProps.nextPage) {
            this.filter("Next");
        }

        if (this.props.prevPage !== prevProps.prevPage) {
            this.filter("Prev");
        }
  
        if (this.state.favorites !== prevState.favorites) {
            this.props.addFavorite(this.state.favorites);
        }

        if (this.state.currentPage !== prevState.currentPage) {
            this.props.currentPage(this.state.currentPage);
        }

        if (this.state.allPage !== prevState.allPage) {
            this.props.allPage(this.state.allPage);
        }
    }

    startPage = () => {
        this.setState({currentPage: 1})
    }

    nextPage = () => { 
        this.setState({currentPage: this.state.currentPage + 1})
    }
  
    prevPage = () => {
        this.setState({currentPage: this.state.currentPage - 1})
    }

    filter = (toggle) => {
        let url;
        switch(toggle) {
            case "Character":
            case "All":
                url = "https://rickandmortyapi.com/api/character/?page=1"
                break;
            case "Human":
                url = "https://rickandmortyapi.com/api/character/?species=Human";
                break;
            case "Animal":
                url = "https://rickandmortyapi.com/api/character/?species=Animal";
                break;
            case "Alien":
                url = "https://rickandmortyapi.com/api/character/?species=Alien";
                break;
            case "Favorites":
                url = `https://rickandmortyapi.com/api/character/${this.state.favorites.join(",")}`;
                break;
            case "Next": 
                url = `${this.state.nextPage}`;
                break;
            case "Prev": 
                url = `${this.state.prevPage}`;
                break;
            default: 
                url = `https://rickandmortyapi.com/api/character/?name=${toggle}`;
                break;
        }

        if ((toggle !== "Favorites") && (url !== "null")) {
            this.serviceRickAndMorty.getRequest(url).then(res => {
                if ((toggle === "All") || (toggle === "Character") ||
                (toggle === "Human") || (toggle === "Animal") || (toggle === "Alien")) {
                    this.startPage();
                }
                if (toggle === "Next") {
                    this.nextPage();
                }
                if (toggle === "Prev") {
                    this.prevPage()
                }
                this.setState(
                    ({
                        objectArray: res.results,
                        prevPage: res.info.prev,
                        page: url,
                        nextPage: res.info.next,
                        allPage: res.info.pages,
                    })
                )
            });
        } else if ((this.state.favorites.length) && (url !== "null")) {
            this.serviceRickAndMorty.getRequest(url).then(res => {
                if (!Array.isArray(res)) {
                    res = [res];
                }
                this.setState(
                    ({
                        objectArray: res,
                        prevPage: null,
                        page: url,
                        nextPage: null,
                        allPage: 1,
                    })
                )
            });
        }
    }

    addFavorite = (id) => {
        if (this.state.favorites.includes(id)) {
                const arr = this.state.favorites.filter(el => el !== id);
            this.setState(favorites => ({
                favorites: arr
            }))
        } else {
            this.setState(favorites => ({
                favorites: [...this.state.favorites, id]
            }))
        }
    }

    onSelectPage2 = (id) => {
        this.props.onSelectPage2(id);
    }

    onMouseOver = (event) => {
        console.log(event);
    }

    render() {
        let element = this.state.objectArray.map(el => {
                return (
                    <CharacterItem 
                        onSelectPage2={(id) => this.onSelectPage2(id)}
                        favorites={this.state.favorites}
                        addFavorite={this.addFavorite}
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        species={el.species}
                        status={el.status}
                        itemFoto={el.image}
                    />
                )
        })
        
        let className = "grid_container";
        if (this.props.visiblPage1) {
            className += ` visible`;
        } else {
            className += ` hiden`;
        }

        return (
            <ul 
                className={className}
            >
                {element}
            </ul>
        )
    }
}

export default MainContainer;