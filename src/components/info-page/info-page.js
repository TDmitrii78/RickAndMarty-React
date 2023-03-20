import { Component } from "react";

import "./info-page.css";

class InfoPage extends Component {

    render() {
        return (
            <div class="info_page">
                <p>Page 1 of 42</p>
                <p class="hover">&lt;&lt;Prew</p>
                <p class="hover">Next&gt;&gt;</p>
            </div>
        );
    }
}

export default InfoPage;