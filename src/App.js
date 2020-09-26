import React from "react";
import "./style/main.scss";

import SwiperCore, { Keyboard, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import widgetOne from "./assets/widget-one.png";
import widgetTwo from "./assets/widget-two.png";
import widgetThree from "./assets/widget-three.png";
import widgetFour from "./assets/widget-four.png";

import home from "./assets/homescreen.png";
import appIcon from "./assets/app-icon.png";
import closeButton from "./assets/close.svg";
import add from "./assets/add.svg";

SwiperCore.use([Pagination, Keyboard]);

function App() {
  return (
    <div className="App">
      <div className="phone">
        <div className="notch" />
        <div
          className="homescreen"
          style={{ backgroundImage: `url(${home})` }}
        />

        <div className="layer">
          <div className="handle" />
          <div className="header">
            <div className="west">
              <div
                className="app-icon"
                style={{ backgroundImage: `url(${appIcon})` }}
              ></div>
              <span className="app-name">Headspace</span>
            </div>
            <div className="east">
              <img src={closeButton} alt="x" />
            </div>
          </div>

          <div className="titles">
            <p className="title">Headspace</p>
            <p className="subtitle">Meditation Made Simple.</p>
          </div>

          <Swiper pagination keyboard centeredSlides>
            <SwiperSlide>
              <div className="widget single">
                <img src={widgetOne} alt="widget" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="widget single">
                <img src={widgetTwo} alt="widget" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="widget double">
                <img src={widgetThree} alt="widget" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="widget quadruple">
                <img src={widgetFour} alt="widget" />
              </div>
            </SwiperSlide>
          </Swiper>

          <button className="addWidget">
            <img src={add} alt="+" />
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
