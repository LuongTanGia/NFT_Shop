import "../style/components/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import { AiOutlineDown } from "react-icons/Ai";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Home" />
      </Link>
      <div className="header__boxInput">
        <input
          type="text"
          className="header__input_search"
          placeholder="Search for artworks, collections, artists etc"
        />
      </div>
      <div className="header__categoryBox">
        <div className="header__category_item">
          <p className="header__category_item-desc">
            Home <AiOutlineDown />
          </p>
        </div>
        <div className="header__category_item">
          <p className="header__category_item-desc">
            Explore <AiOutlineDown />
          </p>
        </div>
        <div className="header__category_item">
          <p className="header__category_item-desc">
            Community <AiOutlineDown />
          </p>
        </div>
      </div>
      <button className="header__btn_connect">Connect</button>
    </div>
  );
}

export default Header;
