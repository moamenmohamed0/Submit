import React from "react";
import "./Buy.scss";
function Buy() {
  return (
    <div className="buy">
      <div class="buy-box">
        <div class="buy-info">
          <div class="buy-top">
            <p>Buy or Sell</p>
            <h3>
              Looking to Buy a new property or Sell an existing one? Real Homes
              provides an easy solution!
            </h3>

            <div class="buy-bottom">
              <a
                href="http://elementor-modern-min.realhomes.io/submit-property/"
                class="cta_elementor_first_button cta_elementor_button"
              >
                Submit Property
              </a>

              <a
                href="http://elementor-modern-min.realhomes.io/list-layout/"
                class="cta_elementor_second_button cta_elementor_button"
              >
                Browse Properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
