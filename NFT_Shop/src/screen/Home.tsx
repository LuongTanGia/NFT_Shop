import "../style/screen/Home.css";
import exploImg from "../assets/images/Ellipse 9.svg";
import leftImg from "../assets/images/Group 18.svg";
import centerImg_top from "../assets/images/image 15.svg";
import centerImg_bottom from "../assets/images/image 14.svg";
import rightImg from "../assets/images/image_16.svg";

function Home() {
  return (
    <>
      <div className="home__discover_showcase">
        <div className="home__discover_showcase-left">
          <p className="home__discover_showcase-title">Discover & Showcase</p>
          <h1 className="home__discover_showcase-name">
            Your Favorite Crypto Art.
          </h1>
          <p className="home__discover_showcase-desc">
            A seamless NFT creation experience, from generation to mint in a few
            easy steps.
          </p>
          <div className="home__discover_showcase-bottom">
            <button className="home__btn_explore">Let's Explore</button>
            <img src={exploImg} alt="" />
          </div>
        </div>
        <div className="home__discover_showcase-right">
          <div className="leftImg">
            <img src={leftImg} alt="" />
          </div>
          <div className="center_img">
            <img src={centerImg_top} alt="" />
            <img src={centerImg_bottom} alt="" />
          </div>
          <div className="rightImg">
            <img src={rightImg} alt="" className="rightImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
