/** @format */

import React, { Component } from "react";
import SOFA1 from "./images/sofa1.png";
import SOFA2 from "./images/sofa2.png";
import SOFA3 from "./images/sofa3.png";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <div className="before-clicked">
          <div className="before-clicked-elements">
            <div className="before-clicked-elements-items">
              <h2>Jonal</h2>
              <div>$500</div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="before-clicked-elements-items">
              <img className="sofa" src={SOFA1} alt="sofa" />
            </div>
          </div>
          <div className="before-clicked-elements">
            <div className="before-clicked-elements-items">
              <h2>Jonal</h2>
              <div>$500</div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="before-clicked-elements-items">
              <img className="sofa" src={SOFA2} alt="sofa" />
            </div>
          </div>
          <div className="before-clicked-elements">
            <div className="before-clicked-elements-items">
              <h2>Jonal</h2>
              <div>$500</div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="before-clicked-elements-items">
              <img className="sofa" src={SOFA3} alt="sofa" />
            </div>
          </div>
        </div> */}

        {/* after clicked */}
        <div className="wrapper-container">
          <div className="after-clicked">
            <div className="after-clicked-elements">
              <div className="after-clicked-elements-items">
                <img className="sofa" src={SOFA1} alt="sofa" />
              </div>
              <div className="after-clicked-elements-items">
                <h2>Jonal</h2>
                <div>$500</div>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
                <button>Buy</button>
              </div>
            </div>

            <div className="after-clicked-elements">
              <div className="after-clicked-elements-items">
                <img className="sofa" src={SOFA2} alt="sofa" />
              </div>
              <div className="before-clicked-elements-items">
                <h2>Jonal</h2>
                <div>$500</div>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
                <button>Buy</button>
              </div>
            </div>

            <div className="after-clicked-elements">
              <div className="after-clicked-elements-items">
                <img className="sofa" src={SOFA3} alt="sofa" />
              </div>
              <div className="before-clicked-elements-items">
                <h2>Jonal</h2>
                <div>$500</div>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
                <button>Buy</button>
              </div>
            </div>
            <a className="prev">&#10094;</a>
            <a className="next">&#10095;</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
