/** @format */

import React, { Component } from "react";
import SOFA1 from "./images/sofa1.png";
import SOFA2 from "./images/sofa2.png";
import SOFA3 from "./images/sofa3.png";

class Scrol extends Component {
  onclickBoxPre = () => {
    console.log("hello");
    const box = document.querySelector(".box-before-click");
    box.style.display = "none";

    const nextBox = document.querySelector(".box");
    nextBox.style.display = "block";
    console.log(box);
  };

  onclickBox = () => {
    const preBox = document.querySelector(".box");
    preBox.style.display = "none";

    console.log(preBox);

    const preBoxNextBox = document.querySelector(".box-before-click");
    preBoxNextBox.style.display = "Block";
  };
  render() {
    return (
      <div>
        <div onClick={this.onclickBoxPre} className="box-before-click">
          <div className="pre">
            {/* pre box 1 */}
            <div className="pre-box-items">
              <div className="pre-box-1">
                <h1 className="names">Janet</h1>
                <div>#500</div>
                <div className="pre-box-change-color">
                  <div className="pre-color-change"></div>
                  <div className="pre-color-change"></div>
                  <div className="pre-color-change"></div>
                </div>
                <div className="pre-text-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div className="pre-box-1">
                <img src={SOFA1} alt="" />
              </div>
            </div>

            {/* pre box 2 */}
            <div className="pre-box-items">
              <div className="pre-box-1">
                <h1 className="names">Janet</h1>
                <div>#500</div>
                <div className="pre-box-change-color">
                  <div className="pre-color-change"></div>
                  <div className="pre-color-change"></div>
                  <div className="pre-color-change"></div>
                </div>
                <div className="pre-text-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div className="pre-box-1">
                <img src={SOFA1} alt="" />
              </div>
            </div>

            {/* pre box 3 */}
            <div className="pre-box-items">
              <div className="pre-box-1">
                <h1 className="names">Janet</h1>
                <div>#500</div>
                <div className="pre-box-change-color">
                  <div className="pre-color-change"></div>
                  <div className="pre-color-change"></div>
                  <div className="pre-color-change"></div>
                </div>
                <div className="pre-text-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div className="pre-box-1">
                <img src={SOFA1} alt="" />
              </div>
            </div>

            {/*  */}
          </div>
        </div>

        {/* BOX */}
        <div className="box">
          <div>
            <i onClick={this.onclickBox} id="btn-close" class="fas fa-times" />
          </div>
          {/* box 1 */}
          <div className="box-items ">
            <div className="box-1">
              <div className="image-content">
                <img src={SOFA1} alt="sofa" />
              </div>
              <div className="content">
                <h1>Rochelle</h1>
                <div>#500</div>
                <div className="text-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, officia. Id sint iste ipsa commodi rerum officia
                  vel cum maiores? Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Aliquam, provident.
                </div>
                <div className="box-change-color">
                  <div className="color-change color-red"></div>
                  <div className="color-change color-blue"></div>
                  <div className="color-change color-yellow"></div>
                </div>
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </div>

          {/* box 2 */}
          <div className="box-items ">
            <div className="box-1">
              <div className="image-content">
                <img src={SOFA1} alt="sofa" />
              </div>
              <div className="content">
                <h1>Rochelle</h1>
                <div>#500</div>
                <div className="text-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, officia. Id sint iste ipsa commodi rerum officia
                  vel cum maiores? Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Aliquam, provident.
                </div>
                <div className="box-change-color">
                  <div className="color-change color-red"></div>
                  <div className="color-change color-blue"></div>
                  <div className="color-change color-yellow"></div>
                </div>
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </div>

          {/* box 3 */}
          <div className="box-items ">
            <div className="box-1">
              <div className="image-content">
                <img src={SOFA1} alt="sofa" />
              </div>
              <div className="content">
                <h1>Rochelle</h1>
                <div>#500</div>
                <div className="text-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam, officia. Id sint iste ipsa commodi rerum officia
                  vel cum maiores? Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Aliquam, provident.
                </div>
                <div className="box-change-color">
                  <div className="color-change color-red"></div>
                  <div className="color-change color-blue"></div>
                  <div className="color-change color-yellow"></div>
                </div>
                <button className="btn-buy">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scrol;
