import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import tablet from "../../assets/images/tablet.jpg";
import epsone10 from "../../assets/images/epsone10.png";
import hp from "../../assets/images/hp.jpg";
import accer from "../../assets/images/accer.png";
import zte from "../../assets/images/zte.png";
import pop4 from "../../assets/images/pop4.jpg";
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const products = {
  tablet: {
    id: "tablet",
    img: tablet,
    name: "Tablete Tab 10",
    description:"Tablete Tab 10 12GB RAM 512GB ROM Tablets 10 inch Tablets Android 11.0 notebook laptop dual sim tablet 10 core Tablet android",
    price: "ETB 30000",
  },
  epsone10: {
    id: "epsone10",
    img: epsone10,
    name: "Epson EB-E10",
    description:"portable projector with 3,300 lumens of color brightness and 3,300 lumens of white brightness. With SVGA resolution (800 x 600) and         support for WXGA (1280 x 800) input",
    price: "ETB 990000",
  },
  hp: {
    id: "hp",
    img: hp,
    name: "HP Dragonfly Laptops",
    description:"Sophisticated, light-weight, multi-mode PCs ideal for mobile professional who want power and style.",
    price: "ETB 100000",
  },
  accer: {
    id: "accer",
    img: accer,
    name: "Acer",
    description:"Most commonly refers to the Taiwanese technology company, though  it is also the scientific genus name for maple trees.",
    price: "ETB 60000",
  },
  zte: {
    id: "zte",
    img: zte,
    name: "AC1200 router",
    description:"A dual-band triple-play GPON gateway that provides four GE LAN ports and one phone port. It provides a dual-band concurrent Wi-Fi speed up to 1200 Mbps, allowing users to surf the internet, watch videos        and play online games",
    price: "ETB 25000",
  },
  pop4: {
    id: "pop4",
    img: pop4,
    name: "Tecno Pop 4",
    description:"The is an entry-level smartphone released in July 2020. It is part of Tecno's budget-friendly pop series, designed for basic functionality and long battery life",
    price: "ETB 20000",
  },
 earphone: {
        "id":"earphone",
        "img":"https://i5.walmartimages.com/seo/New-Bee-Bluetooth-Headset-W-Mic-Wireless-Earpiece-in-Ear-Business-Earbuds-for-iOS-Android-Cellphone_f9c54f54-2aeb-4ba9-9563-7bf5fb118d71.46949729d252691f04b4bcb85b8f2d21.jpeg",
        "name":"wireless bluethooth",
        "description":"New Bee Bluetooth 5.0 Wireless Earpiece Headset with Microphone for iPhone Android, 20H Talk Time 180D Standby, Hands-Free for Business Trucker Driver, Black",
        "price":"ETB 5673"
},
A16: {
"id": "A16",
  "img":"https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-a16-5g/defaultimage/blue-black-hero-zoom.png",
  "name":"Sumsung galaxy A16",
  "description":"a line of mid-range Android smartphones (4G and 5G variants) announced in October 2024, known for its Super AMOLED display and long-term software support. It is available globally in various markets.",
  "price": "32000"
}
}

function ProductDetail() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const product = products[productId];
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!product) {
    return (
      <section className="text-center my-20 ">
        <h1 className="text-4xl mt-7">Product Not Found</h1>
        <p className="text-xl mt-2">No product found for ID: {productId}</p>
      </section>
    );
  }

  return (
    <section className="text-center my-20">
      <h1 className="text-4xl my-7">Product Detail</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-64"
          src={product.img}
          alt={product.name}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4 mx-auto" ><span className="text-red-700 font-semibold">Description:</span> {product.description}</p>
          <p className="text-green-700 text-xl font-semibold">
            {product.price}
          </p>
        </div>
      </div>
<button
  onClick={() => {
    if (isLoggedIn) {
      addToCart(product);
    } else {
      navigate('/login');
    }
  }}
  className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md mx-auto"
>
  <FaShoppingCart size={20} />
  <span>Add to Cart</span>
</button>



 </section>
  );
}

export default ProductDetail;
