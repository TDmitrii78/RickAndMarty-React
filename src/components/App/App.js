import { Component } from "react";

import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MainContainer from "../Main-container/Main-container";
import InfoPage from "../Info-page/Info-page";
import Footer from "../Footer/Footer";

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
                    <div className="back_ground">
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