import React from "react";
import "./Checkout.scss";
import Slider from "react-slick";
import BathroomIcon from "@mui/icons-material/Bathroom";
import BedIcon from "@mui/icons-material/Bed";
import CropDinIcon from "@mui/icons-material/CropDin";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="btn" onClick={onClick}>
      <button className="Next">+</button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="btn" onClick={onClick}>
      <button className="prev">-</button>
    </div>
  );
};
function Checkout() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // infinite: true,
    // autoplay: true,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
    responsive: [
      {
        breackpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        //   infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="checkout">
      <div className="container">
        <div className="top">
          <span>Checkout out</span>
          <h3>Featured Properties</h3>
          <p>Our hand picked properties for you.</p>
        </div>
        <div className="bottom">
          <Slider {...settings}>
            <div className="box">
              <div className="img">
                <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/property-01-exterior-818x417.jpg" />
              </div>
              <div className="info">
                <a href="#">
                  <h2>Home in Merrick Way</h2>
                </a>
                <p>
                  Enchanting three bedroom, three bath home with spacious one
                  bedroom, one bath cabana, in-laws quarters. Charming living
                  area features fireplace…
                </p>
                <ul>
                  <li>
                    <BedIcon />
                    Bedroom
                  </li>
                  <li>
                    <BathroomIcon />
                    Bathroom
                  </li>
                  <li>
                    <CropDinIcon />
                    Area
                  </li>
                </ul>
                <div className="bottom">
                  <div className="price">
                    For Sale <span>$540,000</span>
                  </div>
                  <div className="right">
                    <span>
                      <FavoriteIcon />
                    </span>
                    <span>
                      <CompareArrowsIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2015/07/property-02-exterior-818x417.jpg" />
              </div>
              <div className="info">
                <a href="#">
                  <h2>Home in Merrick Way</h2>
                </a>
                <p>
                  Enchanting three bedroom, three bath home with spacious one
                  bedroom, one bath cabana, in-laws quarters. Charming living
                  area features fireplace…
                </p>
                <ul>
                  <li>
                    <BedIcon />
                    Bedroom
                  </li>
                  <li>
                    <BathroomIcon />
                    Bathroom
                  </li>
                  <li>
                    <CropDinIcon />
                    Area
                  </li>
                </ul>
                <div className="bottom">
                  <div className="price">
                    For Sale <span>$540,000</span>
                  </div>
                  <div className="right">
                    <span>
                      <FavoriteIcon />
                    </span>
                    <span>
                      <CompareArrowsIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
