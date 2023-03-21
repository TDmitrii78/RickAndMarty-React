import { Component } from "react";

import "./info-page.css";

class InfoPage extends Component {

    render() {
        return (
            <ul className="info_page">
                <li>Page 1 of 42</li>
                <li className="hover">&lt;&lt;Prew</li>
                <li className="hover">Next&gt;&gt;</li>
            </ul>
        );
    }
}

export default InfoPage;