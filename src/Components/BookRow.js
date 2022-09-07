import React from "react";
import "./BookRow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function BookRow() {
  return (
    <div className="pl-3 bg-white">
      <h3 className="top">Top Sellers in Books for you </h3>
      <Link to="/">
        <div className="book d-flex w-100 justify-content-space modal-dialog-centered ">
          <div className="bookimage">
            <Link to="https://www.amazon.com/My-Mouth-Volcano-Julia-Cook/dp/1931636850/?_encoding=UTF8&pd_rd_w=a9g8r&content-id=amzn1.sym.ba25a0fb-eeb9-4762-9c76-8ca869df5234&pf_rd_p=ba25a0fb-eeb9-4762-9c76-8ca869df5234&pf_rd_r=B28SJC255PHQVDSMYS3E&pd_rd_wg=ER50H&pd_rd_r=3d31c60b-eb45-4d95-98d1-2608dcda1a75&ref_=pd_gw_exports_top_sellers_unrec">
              {" "}
              <img
                className=" d-flex w-100 bookimage"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71aLultW5EL._AC_SX200_.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="bookimage">
            <img
              className="d-block w-100  bookimage"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/8144Vic9C5L._AC_SY200_.jpg"
              alt="Amazom_Image"
            />
          </div>
          <div className="bookimage">
            <img
              className=" d-flex w-100 bookimage"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91cqEsyjd-L._AC_SY200_.jpg"
              alt=""
            />
          </div>
          <div className="bookimage">
            <img
              className="d-flex w-100 bookimage"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/8181NkFL6SL._AC_SX200_.jpg"
              alt="Amazom_Image"
            />
          </div>
          <div className="bookimage">
            <img
              className="d-flex w-100 bookimage"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/917M-S0wz7L._AC_SY200_.jpg"
              alt="Amazom_Image"
            />
          </div>
          <div className="bookimage">
            <img
              className="d-block w-100  bookimage"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81EVdWdmOKL._AC_SY200_.jpg"
              alt="Amazom_Image"
            />
          </div>
          <div className="bookimage">
            <img
              className="d-flex w-100 bookimage"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81t-IstQ+ZL._AC_SY200_.jpg"
              alt="Amazom_Image"
            />
          </div>
          <div className="bookimage">
            <img
              className="d-block w-100  bookimage"
              src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/616XQgErWiL._AC_SX200_.jpg"
              alt="Amazom_Image"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BookRow;
