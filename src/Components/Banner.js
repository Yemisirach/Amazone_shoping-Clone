import React from "react";
import Products from "./Products";
import New from "./New";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "./BookRow";

import "./Banner.css";
function Banner() {
  return (
    <div className="home">
      <Carousel>
        <Carousel.Item>
          <div className="home__container">
            <img
              className=" d-block w-100 home_image"
              src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX1500_.jpg"
              alt="Refresh your home"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home__container">
            <img
              className="d-block w-100 spirality home_image"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61jovjd+f9L._SX1500_.jpg"
              alt="Amazom_Image"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home__container">
            <img
              className="d-block w-100 spirality home_image"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61DUO0NqyyL._SX1500_.jpg"
              alt="Amazom_Image"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="home__container">
            <img
              className="d-block w-100  home_image"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qid7QFWJL._SX1500_.jpg"
              alt="Amazom_Image"
            />
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="d-flex  justify-content-space modal-dialog-centered">
        <div className="home__row">
          <div className="product_row d-flex justify-content-space py-2 ms-3 modal-dialog-centered">
            <Products
              id={Math.floor(Math.random() * 10)}
              title="Gaming accessories"
              rating={5}
              price="600.96"
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
              Name="Headesets"
              img_2="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
              Name2="Keyboard"
              img_3="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
              Name3="Computer mice"
              img_4="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
              Name4="Chairs"
              rip="d-flex"
              zip="d-flex"
              href="See more"
            />
            <Products
              id={Math.floor(Math.random() * 10)}
              title="Health & Personal Care"
              rating={5}
              price="199.99"
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
              rip="d-block"
              zip="d-none"
            />
            <Products
              id={Math.floor(Math.random() * 10)}
              title="Dresses"
              price="98.99"
              rating={5}
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_1X._SY304_CB626369146_.jpg"
              rip="d-block"
              zip="d-none"
            />
            <New />
          </div>
          <div className="product_row d-flex justify-content-space py-2 ms-3 modal-dialog-centered">
            <Products
              id={Math.floor(Math.random() * 10)}
              title="Computers & Accessories"
              // rating={5}
              price="260.98"
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY300_CB432774322_.jpg"
              rip="d-block"
              zip="d-none"
            />
            <Products
              id={Math.floor(Math.random() * 10)}
              title="For your Fitness Needs"
              rating={5}
              price="400"
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
              rip="d-block"
              zip="d-none"
            />
            <Products
              id={Math.floor(Math.random() * 10)}
              title="Exclusively at Amazon"
              rating={4}
              price="800.99"
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
              rip="d-block"
              zip="d-none"
            />
            <Products
              id={Math.floor(Math.random() * 10)}
              title="New arrivals in Toys"
              rating={4}
              price="400"
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"
              rip="d-block"
              zip="d-none"
            />
          </div>
          <div>
            <Row />
          </div>
          <div className="product_row d-flex justify-content-space py-2 ms-5 modal-dialog-centered last">
            <Products
              id={Math.floor(Math.random() * 10)}
              title="Shop activity trackers and smartwatches"
              // rating={2}
              price="400"
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
              rip="d-block"
              zip="d-none"
            />

            <Products
              id={Math.floor(Math.random() * 10)}
              title="Create with strip lights"
              price="98.99"
              rating={5}
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
              rip="d-block"
              zip="d-none"
            />
            <Products
              id={Math.floor(Math.random() * 10)}
              title="Shop Pet supplies"
              price="Shop Pet supplies"
              rating={5}
              img_1="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
              rip="d-block"
              zip="d-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
