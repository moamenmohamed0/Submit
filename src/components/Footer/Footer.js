import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="left">
            <a title="RealHomes 3rd Header" href="#">
              <img
                alt="RealHomes 3rd Header"
                src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/logo.png"
              />
            </a>
            <span>/Simply #1 Real Estate Theme</span>
          </div>
          <div className="right">
            <ul>
              <li>
                <a>
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a>
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a>
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a>
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a>
                  <YouTubeIcon />
                </a>
              </li>
              <li>
                <a>
                  <RssFeedIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="center">
          <div className="box">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Half Map Layout</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <li>
                <a href="#">List Layout</a>
              </li>
              <li>
                <a href="#">Grid Layout</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <ul>
              <li>
                <a href="#">
                  <FmdGoodIcon />
                  3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
                </a>
              </li>
              <li>
                <a href="#">
                  <LocalPhoneIcon />
                  +123-456-789
                </a>
              </li>
              <li>
                <a href="#">
                  <EmailIcon />
                  robot@inspirythemes.com
                </a>
              </li>
            </ul>
          </div>
          <div className="box">
            <h3>Tags</h3>
            <div className="tagcloud">
              <a href="#">awareness</a>
              <a href="#">contemporary</a>
              <a href="#">economy living</a>
              <a href="#">image post</a>
              <a href="#">interior</a>
              <a href="#">living rooms</a>
              <a href="#">studio</a>
              <a href="#">trendy</a>
            </div>
          </div>
        </div>
        <div className="end">
          <div className="left">© 2023. All rights reserved.</div>
          <div className="right">Designed by Inspiry Themes</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
