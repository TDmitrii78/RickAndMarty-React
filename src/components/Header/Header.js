import "./Header.css";

import heartFoto from "../../resourses/img/heart.png";


const Header = (props) => {

    const onSelect = (event) => {
        props.onToggle(event.target.dataset.select);
    }

    const countLike = props.favorites.length;
    return (
        <header className="header">
            <h1>The Rick and Morty API</h1>
            <nav className="navigation">
                <ul onClick={onSelect}>
                    <li><h2 data-select="Character">Character</h2></li>
                    <h2> / </h2>
                    <li><h2 data-select="Favorites">Favorites</h2></li>
                </ul>
            </nav>
            <div className="like_favorites">
                <img src={heartFoto} alt="heart"/>
                <h2>{countLike}</h2>
            </div>
        </header>
    );
}

export default Header;