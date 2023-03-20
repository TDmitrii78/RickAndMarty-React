import { Component } from "react";

import Header from "../header/header";
import Menu from "../menu/menu";
import MainContainer from "../main-container/main-container";
import InfoPage from "../info-page/info-page";
import Footer from "../footer/footer";

import "./app.css";

class App extends Component {



    render() {
    //     fetch("https://rickandmortyapi.com/api/character/2")
    //     .then((response) => response.json())
    //     .then((res) => console.dir(res))
    //     .catch(() => console.log("error"));
        
        return (
            <div>
                <Header/>
                <main>
                    <Menu/>
                    <div class="back_ground">
                        <MainContainer/>
                        <InfoPage/>
                        <Footer/>
                    </div>
                </main>
            </div>
        )
    }
}

export default App;