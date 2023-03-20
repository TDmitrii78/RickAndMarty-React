import { Component } from "react";

import "./info-page.css";

class InfoPage extends Component {

    render() {
        return (
            <ul class="info_page">
                <li>Page 1 of 42</li>
                <li class="hover">&lt;&lt;Prew</li>
                <li class="hover">Next&gt;&gt;</li>
            </ul>
        );
    }
}

export default InfoPage;