import React from "react";
import tablet from "../assets/images/tablet.jpg";
import epsone10 from "../assets/images/epsone10.png";
import hp from "../assets/images/hp.jpg";
import accer from "../assets/images/accer.png";
import zte from "../assets/images/zte.png";
import pop4 from "../assets/images/pop4.jpg";
import { NavLink } from "react-router-dom";
import Card from "./Card";
function Products() {
  return (
    <section>
      <section className=" text-center my-10">
        <h1 className="text-4xl mt-7 pt-15">Electronics products showcase</h1>
        <p className="text-xl mt-2 mb-7">
           Discover cutting-edge technology and premium electronics at competitive prices.
        </p>
        <NavLink to = '/UseFetch' className="text-lg border p-3 hover:bg-blue-950 rounded-lg text-slate-100 bg-blue-500">
          Know More
        </NavLink>
      </section>
      <section className="my-3 mx-auto">
        <div className="flex justify-center flex-wrap">
          <Card>
            <img className="rounded-md" src={tablet} alt="" />
            <h1 className="text-2xl my-7">Tablete Tab 10</h1>
            <p>
              Tablete Tab 10 12GB RAM 512GB ROM Tablets 10 inch Tablets Android
              11.0 NOTEBOOK LAPTOP dual sim TABLET 10 core Tablet android
            </p>
            <p className="mt-2 text-bold text-green-700" >price: ETB 30,000</p>
          </Card>
          <Card>
<img className="rounded-md" src={epsone10} alt="" />
            <h1 className="text-2xl my-7">Epson EB-E10 </h1>
            <p>
              portable projector with 3,300 lumens of color brightness and 3,300
              lumens of white brightness. With SVGA resolution (800 x 600) and
              support for WXGA (1280 x 800) input.
            </p>
            <p className="mt-2 text-bold text-green-700">price: ETB 99,0000</p>
          </Card>
          <Card>
<img className="rounded-md" src={hp} alt="" />
            <h1 className="text-2xl my-7">HP Dragonfly Laptops</h1>
            <p>
              Sophisticated, light-weight, multi-mode PCs ideal for mobile
              professional who want power and style.
            </p>
            <p className="mt-2 text-bold text-green-700">price: ETB 100,000</p>
          </Card>
          <Card>
            <img className="rounded-md" src={accer} alt="" />
            <h1 className="text-2xl my-7">Acer</h1>
            <p>
              most commonly refers to the Taiwanese technology company, though
              it is also the scientific genus name for maple trees.
            </p>
            <p className="mt-2 text-bold text-green-700">price:ETB 60,000</p>
          </Card>
          <Card>
            <img className="rounded-md" src={zte} alt="" />
            <h1 className="text-2xl my-7">AC1200 router</h1>
            <p>
              A dual-band triple-play GPON gateway that provides four GE LAN ports
              and one phone port. It provides a dual-band concurrent Wi-Fi speed
              up to 1200 Mbps, allowing users to surf the internet, watch videos
              and play online games
            </p>
            <p className="mt-2 text-bold text-green-700">price:ETB 25,000</p>
          </Card>
          <Card>
            <img className="rounded-md" src={pop4} alt="" />
            <h1 className="text-2xl my-7"> Tecno Pop 4</h1>
            <p>
              The is an entry-level smartphone released in July 2020. It is part of Tecno's budget-friendly "Pop" series, designed for basic functionality and long battery life. 
            </p>
            <p className="mt-2 text-bold text-green-700">price: ETB 20,000</p>
          </Card>
        </div>
      </section>
    </section>
  );
}

export default Products;
