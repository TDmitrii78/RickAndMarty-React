import { Component } from "react";

import "./Info-page.css";

class InfoPage extends Component {

    onInfoPage = (event) => {
        console.log(event.target.dataset.page);
    }

    render() {
        const currentPage = 1, allPage = 42;
        return (
            <ul className="info_page"
                onClick={this.onInfoPage}>
                <li>Page {currentPage} of {allPage}</li>
                <li 
                    className="hover"
                    data-page="prew"
                    >&lt;&lt;Prew</li>
                <li 
                    className="hover"
                    data-page="next"
                    >Next&gt;&gt;</li>
            </ul>
        );
    }
}

export default InfoPage;