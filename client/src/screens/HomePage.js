import React, { useEffect } from "react";
import Vector1 from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
import "../css/homepage.css";
import Chart from "../components/chart";
import Shoe from "../assets/GiayMLB.jpg";
import Tiki from "../assets/tiki.png";
import Lazada from "../assets/lazada.png";
import Shopee from "../assets/shopee.png";

const HomePage = () => {
  useEffect(() => {
    document.title = " King costs";
  });

  return (
    <div className="container">
      <div className="logoo">
        <div className="logoo logo--tiki">
          <img src={Tiki} alt="" />
        </div>
        <div className="logoo logo--lazada">
          <img src={Lazada} alt="" />
        </div>
        <div className="logoo logo--Shopee">
          <img src={Shopee} alt="" />
        </div>
      </div>
      <div className="background">
        <div className="container container--title">
          <div className="container container--title--text image">
            <h1>Công cụ theo dõi giá</h1>
            <img src={Vector1} alt="" style={{ marginLeft: "50px" }} />
          </div>

          <div className="container container--title--text image2">
            <img src={Vector2} alt="" style={{ marginRight: "50px" }} />
            <h1>cho Shopee, Tiki, Lazada</h1>
          </div>

          <div className="container">
            <div className="container container--input">
              <h1>Theo dõi giá, biểu đồ giá</h1>
            </div>
            <div className="container container--input">
              <input placeHolder="Dán link sản phẩm" />
            </div>
          </div>

          <div className="container chart">
            <Chart />
          </div>

          <div className="container container--productSample">
            <h1>Sản phẩm tương tự</h1>
          </div>
          <div>
            <button className="button button--previous">
              <svg
                data-v-20ebe24e=""
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="icon-arrow"
              >
                <path
                  data-v-20ebe24e=""
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="container container--product">
            <div className="container--product border">
              <div className="border--image">
                <img src={Shoe} alt="This is giày" />
              </div>
              <div className="container border--text">
                <h8>Giày MLB thể thao</h8>
                <span>Giá từ: 1125000 đ</span>
              </div>
            </div>

            <div className="container--product border">
              <div className="border--image">
                <img src={Shoe} alt="This is giày" />
              </div>
              <div className="container border--text">
                <h8>Giày MLB thể thao</h8>
                <span>Giá từ: 1125000 đ</span>
              </div>
            </div>

            <div className="container--product border">
              <div className="border--image">
                <img src={Shoe} alt="This is giày" />
              </div>

              <div className="container border--text">
                <h8>Giày MLB thể thao</h8>
                <span>Giá từ: 1125000 đ</span>
              </div>
            </div>

            <div className="container--product border">
              <div className="border--image">
                <img src={Shoe} alt="This is giày" />
              </div>
              <div className="container border--text">
                <h8>Giày MLB thể thao</h8>
                <span>Giá từ: 1125000 đ</span>
              </div>
            </div>

            <div className="container--product border">
              <div className="border--image">
                <img src={Shoe} alt="This is giày" />
              </div>
              <div className="container border--text">
                <h8>Giày MLB thể thao</h8>
                <span>Giá từ: 1125000 đ</span>
              </div>
            </div>

            <div className="container--product border">
              <div className="border--image">
                <img src={Shoe} alt="This is giày" />
              </div>
              <div className="container border--text">
                <h8>Giày MLB thể thao</h8>
                <span>Giá từ: 1125000 đ</span>
              </div>
            </div>

            <div>
              <button className="button button--next">
                <svg
                  data-v-20ebe24e=""
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="icon-arrow"
                >
                  <path
                    data-v-20ebe24e=""
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
