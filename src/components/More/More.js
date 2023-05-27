import React from "react";
import "./More.scss";
function More() {
  return (
    <div className="more">
      <div className="overlay"></div>
      <div class="more-box">
        <div class="more-info">
          <div class="more-top">
            <p>Looking for More?</p>
            <h3>Talk to our experts or Browse through more properties.</h3>

            <div class="more-bottom">
              <a
                href="http://elementor-modern-min.realhomes.io/submit-property/"
                class="cta_elementor_first_button cta_elementor_button"
              >
                Get In Touch
              </a>

              <a
                href="http://elementor-modern-min.realhomes.io/list-layout/"
                class="cta_elementor_second_button cta_elementor_button"
              >
                Browse More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More;
