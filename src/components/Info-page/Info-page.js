import { Component } from "react";

import "./Info-page.css";

class InfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: true,
            prev: true
        }
    }

    onInfoPage = (event) => {
        (event.target.dataset.page === "prev") ? this.setState(({prev: !this.state.prev})) : this.setState(({next: !this.state.next})) ;
    }

    componentDidUpdate(prevProps, prevState) {
        const {next, prev} = this.state;
        if (this.state.next !== prevState.next) {
            this.props.onNextPage(next);
        }
        if (this.state.prev !== prevState.prev) {
            this.props.onPrevPage(prev);
        }
    }

    render() {
        const {currentPage, allPage} = this.props;
        let className = "info_page";
        if (this.props.visible) {
            className += ` visibleInfo`;
        } else {
            className += ` hidenInfo`;
        }

        return (
            <ul className={className}
                onClick={(event) => {this.onInfoPage(event); window.scrollTo(0, 0)}}>
                <li>Page {currentPage} of {allPage}</li>
                <li 
                    className="hover"
                    data-page="prev"
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