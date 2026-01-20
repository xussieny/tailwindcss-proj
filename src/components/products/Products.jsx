import React from "react";
import tablet from "../../assets/images/tablet.jpg";
import epsone10 from "../../assets/images/epsone10.png";
import hp from "../../assets/images/hp.jpg";
import accer from "../../assets/images/accer.png";
import zte from "../../assets/images/zte.png";
import pop4 from "../../assets/images/pop4.jpg";
import { NavLink } from "react-router-dom";
import Card from "../card/Card";
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
          <NavLink to="/product?id=tablet">
            <Card>
              <img className="rounded-md w-full h-52" src={tablet} alt="" />
              <h1 className="text-2xl my-7">Tablete Tab 10</h1>
          <p className="text-green-700 text-xl font-semibold">
              ETB 30,000</p>
          
            </Card>
          </NavLink>
          <NavLink to="/product?id=epsone10">
            <Card>
              <img className="rounded-md w-full h-52" src={epsone10} alt="" />
              <h1 className="text-2xl my-7">Epson EB-E10 </h1>
              <p className="text-green-700 text-xl font-semibold">
              ETB 99000</p>
            </Card>
          </NavLink>
          <NavLink to="/product?id=hp">
            <Card>
              <img className="rounded-md w-full h-52" src={hp} alt="" />
              <h1 className="text-2xl my-7">HP Dragonfly Laptops</h1>
              <p className="text-green-700 text-xl font-semibold">
              ETB 100000</p>
            </Card>
          </NavLink>
          <NavLink to="/product?id=accer">
            <Card>
              <img className="rounded-md w-full h-52" src={accer} alt="" />
              <h1 className="text-2xl my-7">Acer</h1>
              <p className="text-green-700 text-xl font-semibold">
              ETB 60000</p>
            </Card>
          </NavLink>
          <NavLink to="/product?id=zte">
            <Card>
              <img className="rounded-md w-full h-52" src={zte} alt="" />
              <h1 className="text-2xl my-7">AC1200 router</h1>
              <p className="text-green-700 text-xl font-semibold">
              ETB 25000</p>
            </Card>
          </NavLink>
          <NavLink to="/product?id=pop4">
            <Card>
              <img className="rounded-md w-full h-52" src={pop4} alt="pop4" />
              <h1 className="text-2xl my-7"> Tecno Pop 4</h1>
              <p className="text-green-700 text-xl font-semibold">
              ETB 20000</p>
            </Card>
          </NavLink>
          <NavLink to="/product?id=earphone">
            <Card>
              <img className="rounded-md w-full h-52" src="https://i5.walmartimages.com/seo/New-Bee-Bluetooth-Headset-W-Mic-Wireless-Earpiece-in-Ear-Business-Earbuds-for-iOS-Android-Cellphone_f9c54f54-2aeb-4ba9-9563-7bf5fb118d71.46949729d252691f04b4bcb85b8f2d21.jpeg" alt="" />
              <h1 className="text-2xl my-7"> Wireless Earphone</h1>
              <p className="text-green-700 text-xl font-semibold">
              ETB 5637</p>
            </Card>
          </NavLink>
           <NavLink to="/product?id=A16">
          <Card>
              <img className="rounded-md w-full h-52" src="https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-a16-5g/defaultimage/blue-black-hero-zoom.png" alt="A16" />
              <h1 className="text-2xl my-7"> Sumsung galaxy A16</h1>
              <p className="text-green-700 text-xl font-semibold">
              ETB 32000</p>
            </Card>
          </NavLink>
        </div>
      </section>
    </section>
  );
}

export default Products;
