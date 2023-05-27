import React, { useState } from "react";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  window.onscroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
    }
  };
  return (
    <div className="header">
      <div className={scroll ? "header-box header-scroll" : `header-box`}>
        <div className="h-logo">
          <a title="RealHomes 3rd Header" href="#">
            <img
              alt="RealHomes 3rd Header"
              src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/logo.png"
            />
          </a>
        </div>
        <div className={menu ? "h-links active" : `h-links`}>
          <ul id="menu-main-menu-2" class="rh_menu__main clearfix">
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-105 current_page_item menu-item-4562 rh-active">
              <a href="https://demo.realhomes.io/header-three/">Home</a>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4411">
              <Link to="/Properity">
                Properties
              </Link>
              <ul class="sub-menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4409">
                  <a href="https://demo.realhomes.io/header-three/list-layout/">
                    List Layout
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4668">
                  <a href="https://demo.realhomes.io/header-three/list-layout-full-width/">
                    List Layout Full Width
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4408">
                  <a href="https://demo.realhomes.io/header-three/grid-layout/">
                    Grid Layout
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4669">
                  <a href="https://demo.realhomes.io/header-three/grid-layout-full-width/">
                    Grid Layout Full Width
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4587">
                  <a href="https://demo.realhomes.io/header-three/half-map-layout/">
                    Half Map Layout
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4395">
              <a href="https://demo.realhomes.io/header-three/news/">News</a>
            </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4443">
              <a href="https://demo.realhomes.io/header-three/our-agents/">
                 services
              </a>
             </li>
          
            
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4396">
              <a href="https://demo.realhomes.io/header-three/sample-page-2/">
                Pages
              </a>
              <ul class="sub-menu">
                <li class="menu-item menu-item-type-taxonomy menu-item-object-property-city menu-item-4456">
                  <a href="https://demo.realhomes.io/header-three/property-city/miami/">
                    Miami
                  </a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-property-status menu-item-4457">
                  <a href="https://demo.realhomes.io/header-three/property-status/for-sale/">
                    For Sale
                  </a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-property-status menu-item-4458">
                  <a href="https://demo.realhomes.io/header-three/property-status/for-rent/">
                    For Rent
                  </a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-property-type menu-item-4459">
                  <a href="https://demo.realhomes.io/header-three/property-type/single-family/">
                    Single Family
                  </a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-property-type menu-item-4460">
                  <a href="https://demo.realhomes.io/header-three/property-type/commercial/">
                    Commercial
                  </a>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-property-type menu-item-4461">
                  <a href="https://demo.realhomes.io/header-three/property-type/residential/">
                    Residential
                  </a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4398">
                  <a href="https://demo.realhomes.io/header-three/faqs/">
                    FAQs
                  </a>
                </li>
              </ul>
            </li>
            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4399">
              <a href="https://demo.realhomes.io/header-three/contact/">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="h-user">
          <ul>
            <li>
              <LocalPhoneIcon />
              1-800-555-1234
            </li>
            <li>
              <AccountCircleIcon />
            </li>
            <li>
              <button>Submit</button>
            </li>
            <MenuIcon onClick={() => setMenu(!menu)} />
          </ul>
        </div>
      </div>
      <div className="h-search">
        <form></form>
      </div>
    </div>
  );
}

export default Header;
