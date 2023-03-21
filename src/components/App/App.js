import { Component } from "react";

import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MainContainer from "../Main-container/Main-container";
import InfoPage from "../Info-page/Info-page";
import Footer from "../Footer/Footer";

import "./App.css";

class App extends Component {

    render() {
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