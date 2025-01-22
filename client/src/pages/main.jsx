import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid">
        <Slider {...settings}>
          <div className="images">
            <img
              src={`${process.env.PUBLIC_URL}/img/banners/banner4.webp`}
              alt=""
            />
          </div>
          <div className="images">
            <img
              src={`${process.env.PUBLIC_URL}/img/banners/banner1.webp`}
              alt=""
            />
          </div>
          <div className="images">
            <img
              src={`${process.env.PUBLIC_URL}/img/banners/banner2.webp`}
              alt=""
            />
          </div>
          <div className="images">
            <img
              src={`${process.env.PUBLIC_URL}/img/banners/banner3.webp`}
              alt=""
            />
          </div>
        </Slider>
      </div>
      {/* main product */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 col-sm-12 img-text1">
            <span>Matisse</span>
            <button> Shop Now</button>
          </div>
          <div className="col-lg-6 col-sm-12 img-text2">
            <span>Brighton</span>
            <button> Shop Now</button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-6 col-sm-12 img-text3">
            <span>Enewton</span>
            <button> Shop Now</button>
          </div>
          <div className="col-lg-6 col-sm-12 img-text4">
            <span>Vionic</span>
            <button> Shop Now</button>
          </div>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="container mt-5 mb-5">
        <div class="text-with-lines">New Arrivals</div>

        <Slider {...settings2}>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/newArrivals/new1.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Black Dress</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/newArrivals/new2.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Black Shoes</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/newArrivals/new3.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Black Shoes</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/newArrivals/new4.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">White Shirt</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/newArrivals/new5.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Black Shies</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/newArrivals/new6.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Black Shoes</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
        </Slider>
      </div>
      <div className="container mt-5 mb-5">
        <div className="text-with-lines">Customer Favorites</div>

        <Slider {...settings2}>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/customerFavorite/customerFav1.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Shoes</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/customerFavorite/customerFav2.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Shoes</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/customerFavorite/customerFav3.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Shoes</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/customerFavorite/customerFav4.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Shoes</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/customerFavorite/customerFav5.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Shoes</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/customerFavorite/customerFav6.jpg`}
              alt=""
            />
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <span className="fs-4">Shoes</span>
              <span className="fs-4 text-danger">$23.00</span>
            </div>
          </div>
        </Slider>
      </div>

      <div className="container mt-5 mb-5">
        <div className="text-with-lines">Follow us on Instagram</div>
        <Slider {...settings2}>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/mainProducts/prod1.webp`}
              alt=""
            />
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/mainProducts/prod2.webp`}
              alt=""
            />
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/mainProducts/prod3.webp`}
              alt=""
            />
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/mainProducts/prod4.webp`}
              alt=""
            />
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/customerFavorite/customerFav5.jpg`}
              alt=""
            />
          </div>
          <div className="new-arrivals">
            <img
              src={`${process.env.PUBLIC_URL}/img/customerFavorite/customerFav6.jpg`}
              alt=""
            />
          </div>
        </Slider>
      </div>

      <div className="container mt-5 mb-5">
        <div className="text-with-lines">Huge Selection</div>
        <div className="d-flex flex-row justify-content-center align-items-center gap-4">
          <div className="container col-lg-4 col-sm-12 content1 gap-1 ">
            <span className="container text-center">WOMENS</span>
            <span>Athletic</span>
            <span>Boots</span>
            <span>Casual</span>
            <span>Dress</span>
            <span>Evening</span>
          </div>
          <div className="container col-lg-4 col-sm-12 content1 gap-1">
            <span className="container text-center">MENS</span>
            <span>Athletic</span>
            <span>Boots</span>
            <span>Casual</span>
            <span>Dress</span>
            <span>Evening</span>
          </div>
          <div className="container col-lg-4 col-sm-12 content1 gap-1">
            <span className="container text-center">APPAREL</span>
            <span>Athletic</span>
            <span>Boots</span>
            <span>Casual</span>
            <span>Dress</span>
            <span>Evening</span>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <hr />
        <div className="container subscribe">
          <div><img src={`${process.env.PUBLIC_URL}/img/hp_mail_icon.png`} alt="" /></div>
          <div>
            <span>Subscribe to our newsletter</span>
            <div>
              <input type="text"  />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
