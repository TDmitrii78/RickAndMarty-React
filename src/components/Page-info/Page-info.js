import { Component } from "react";

import "./Page-info.css";

class PageInfo extends Component {

    render() {
        return (
            <div className="character_info">
                <div>
                    <h2>Character info</h2>
                    <img src="img/morty.jpeg" alt="morty"/>
                    <p>Morty</p>
                    <p>Human</p>
                    <p>Alive</p>
                </div>
            </div> 
        )
    }
}

export default PageInfo;