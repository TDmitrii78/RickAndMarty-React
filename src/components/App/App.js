import { Component } from "react";

import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MainContainer from "../Main-container/Main-container";
import InfoPage from "../Info-page/Info-page";
import Footer from "../Footer/Footer";
import PageInfo from "../Page-info/Page-info";

import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: null,
            next: true,
            prev: true,
            allPage: null,
            currentPage: null,
            favorites: [],
            visiblPage1: true,
            visiblPage2: false,
            visiblMenu: true,
            id: ""
        }
    }

    onToggle = (toggle) => {
        this.setState({toggle});
    }

    addFavorite = (favorites) => {
        this.setState({
            favorites
        })
    }

    onNextPage = (next) => {
        this.setState({
            next: next
        })
    }

    onPrevPage = (prev) => {
        this.setState({
            prev: prev
        })
    }

    allPage = (page) => {
        this.setState({
            allPage: page
        })
    }

    currentPage = (page) => {
        this.setState({
            currentPage: page
        })
    }

    onSelectPage2 = (id) => {
        console.log(id);
        this.setState({
            visiblPage1: false,
            visiblPage2: true,
            visiblMenu: false,
            id: id
        })
    }

    onSelectPage1 = () => {
        this.setState({
            visiblPage1: true,
            visiblPage2: false,
            visiblMenu: true
        })
    }


    render() {
  
        return (
            <div>
                <Header 
                    onToggle={(toggle) => this.onToggle(toggle)}
                    favorites={this.state.favorites}
                    />
                <main>
                    <Menu 
                        visible={this.state.visiblMenu}
                        onToggle={(toggle) => this.onToggle(toggle)}
                        />
                    <div className="back_ground">
                        <MainContainer 
                            onSelectPage2={this.onSelectPage2}
                            visiblPage1={this.state.visiblPage1}
                            onPage2={() => this.onPage2()}
                            allPage={(page) => this.allPage(page)}
                            currentPage={(page) => this.currentPage(page)}
                            toggle={this.state.toggle}
                            addFavorite={(favorites) => this.addFavorite(favorites)}
                            nextPage={this.state.next}
                            prevPage={this.state.prev}
                            />
                        <PageInfo
                            id={this.state.id}
                            onSelectPage1={this.onSelectPage1}
                            visiblPage2={this.state.visiblPage2}
                        />
                        <InfoPage
                            visible={this.state.visiblMenu}
                            onNextPage={(next) => this.onNextPage(next)}
                            onPrevPage={(prev) => this.onPrevPage(prev)}
                            currentPage={this.state.currentPage}
                            allPage={this.state.allPage}
                            />
                        <Footer/>
                    </div>
                </main>
            </div>
        )
    }
}

export default App;