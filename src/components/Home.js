import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home__container"
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Sony Bravia KDL-32W600D 32 Smart HD LED TV"
          image="https://www.startech.com.bd/image/cache/catalog/Television/sony/KDL%20W600D-500x500.jpg"
          price={69.99}
          rating={5}
        />
        <Product
          id="2"
          title="Cougar RANGER Gaming Sofa"
          image="https://www.startech.com.bd/image/cache/catalog/gaming-chair/cougar/ranger/ranger-01-228x228.jpg"
          price={49.99}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Tipu sultan"
          image="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/3c6f851fe974_143779.jpg"
          price={9.99}
          rating={3}
        />
        <Product
          id="4"
          title="1STPLAYER FD-GC1 Gaming Chair"
          image="https://www.startech.com.bd/image/cache/catalog/gaming-chair/1stplayer/fd-gc1/fd-gc1-01-500x500.jpg"
          price={39.99}
          rating={4}
        />
        <Product
          id="5"
          title="Deshe Deshe"
          image="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/b045e90fd274_114500.gif"
          price={15.99}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="LG UltraGear 27GN800-B 27 QHD IPS 1ms 144Hz HDR Gaming Monitor"
          image="https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-01-500x500.jpg"
          price={59.99}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="7"
          title="Apple iPad Air 10.9 inch MYGW2ZP/A 4th Gen 64GB Wi-Fi & Cellular Space Grey"
          image="https://www.startech.com.bd/image/cache/catalog/tablet-pc/apple/mhnf3zp-a/mhnf3zp-a-228x228.jpg"
          price={39.99}
          rating={5}
        />
        <Product
          id="8"
          title="Apple MacBook Pro 13.3-Inch Core i5-2.0GHz,16GB RAM,1TB SSD,Touch Bar,Space Gray 2020"
          image="https://www.computervillage.com.bd/uploads/products/thumbnail/thumbnail_Apple-MacBook-Pro-13.3-Inch-Retina-Display-8-core-Apple-M1-chip-Price-in-Bangladesh-__1638275741.webp"
          price={39.99}
          rating={4}
        />
        <Product
          id="9"
          title="Samsung Galaxy A03s 4GB/64GB"
          image="https://static-01.daraz.com.bd/p/mdc/0d68137674e57e7c69431849ce6b6a2a.jpg"
          price={15.99}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
