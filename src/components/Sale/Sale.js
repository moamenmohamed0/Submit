import React, { useState } from "react";
import "./Sale.scss";
function Sale() {
  const [number, setNumber] = useState("one");
  return (
    <div className="sale">
      <div className="container">
        <div className="top">
          <span>Properties</span>
          <h3>For Sale</h3>
          <p>Check out latest properties for sale.</p>
        </div>
        {number === "one" ? (
          <div className="sale-row">
            <div className="sale-box">
              <span>Featured </span>
              <div className="img">
                <a>
                  <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/property-01-exterior-488x326.jpg" />
                </a>
                <div className="overlay"></div>
                <button>View Proprties</button>
                <div className="overlay"></div>
                <button>View Proprties</button>
              </div>
              <div className="title">
                <h2>Home in Merrick Way</h2>
                <p>
                  Enchanting three bedroom, three bath home with spacious one
                  bedroom, one bath cabana, in-laws quarters. Charming living
                  area features…
                </p>
                <ul>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                </ul>
                <div className="price">
                  For Sale<span> $540,000</span>
                </div>
              </div>
            </div>
            <div className="sale-box">
              <div className="img">
                <a>
                  <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2015/07/property-02-exterior-488x326.jpg" />
                </a>
                <div className="overlay"></div>
                <button>View Proprties</button>
              </div>
              <div className="title">
                <h2>Home in Merrick Way</h2>
                <p>
                  Enchanting three bedroom, three bath home with spacious one
                  bedroom, one bath cabana, in-laws quarters. Charming living
                  area features…
                </p>
                <ul>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                </ul>
                <div className="price">
                  For Sale<span> $540,000</span>
                </div>
              </div>
            </div>
            <div className="sale-box">
              <div className="img">
                <a>
                  <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2015/07/property-03-exterior-488x326.jpg" />
                </a>
                <div className="overlay"></div>
                <button>View Proprties</button>
              </div>
              <div className="title">
                <h2>Home in Merrick Way</h2>
                <p>
                  Enchanting three bedroom, three bath home with spacious one
                  bedroom, one bath cabana, in-laws quarters. Charming living
                  area features…
                </p>
                <ul>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                </ul>
                <div className="price">
                  For Sale<span> $540,000</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="sale-row">
            <div className="sale-box">
              <div className="img">
                <a>
                  <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2015/07/property-10-exterior-488x326.jpg" />
                </a>
                <div className="overlay"></div>
                <button>View Proprties</button>
              </div>
              <div className="title">
                <h2>Home in Merrick Way 2</h2>
                <p>
                  Enchanting three bedroom, three bath home with spacious one
                  bedroom, one bath cabana, in-laws quarters. Charming living
                  area features…
                </p>
                <ul>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                </ul>
                <div className="price">
                  For Sale<span> $540,000</span>
                </div>
              </div>
            </div>
            <div className="sale-box">
              <div className="img">
                <a>
                  <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2015/07/property-08-exterior-488x326.jpg" />
                </a>
                <div className="overlay"></div>
                <button>View Proprties</button>
              </div>
              <div className="title">
                <h2>Home in Merrick Way</h2>
                <p>
                  Enchanting three bedroom, three bath home with spacious one
                  bedroom, one bath cabana, in-laws quarters. Charming living
                  area features…
                </p>
                <ul>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                </ul>
                <div className="price">
                  For Sale<span> $540,000</span>
                </div>
              </div>
            </div>
            <div className="sale-box">
              <div className="img">
                <a>
                  <img src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2015/07/property-09-exterior-488x326.jpg" />
                </a>
                <div className="overlay"></div>
                <button>View Proprties</button>
              </div>
              <div className="title">
                <h2>Home in Merrick Way</h2>
                <p>
                  Enchanting three bedroom, three bath home with spacious one
                  bedroom, one bath cabana, in-laws quarters. Charming living
                  area features…
                </p>
                <ul>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>1</span>
                  </li>
                </ul>
                <div className="price">
                  For Sale<span> $540,000</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="btns">
          <button
            style={
              number === "one"
                ? { color: "#fff", backgroundColor: "#0b8278" }
                : { color: "#0b8278", backgroundColor: "#fff" }
            }
            onClick={() => setNumber("one")}
          >
            1
          </button>
          <button
            style={
              number === "two"
                ? { color: "#fff", backgroundColor: "#0b8278" }
                : { color: "#0b8278", backgroundColor: "#fff" }
            }
            onClick={() => setNumber("two")}
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sale;
