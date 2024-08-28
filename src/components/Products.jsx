import { PiShoppingCart } from "react-icons/pi";
//import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { Link } from "react-router-dom";
import {  useState } from "react";

const Products = (prop) => {
 // const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState("")

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        prodId: prop.id,
        quantity: 1,
      })
    );
    setIsAdded("Added to Cart");

    setTimeout(()=> {
      setIsAdded("")
    }, 3000)
   
  };

  return (
    <div className="container w-[100%] md:w-[100%] relative
    h-[fit] bg-white px-[5%] py-5 cursor-pointer
     hover:scale-105  transition-all duration-500 rounded-lg shadow-custom-shadow">
      <div className="prod-img mb-3 border-b-2 border-solid border-[rgba(0,0,0,0.25)] flex flex-col items-center justify-center s">
        <Link to={prop.slug}>
          <img src={prop.source} alt="chair" className="w-[350px] h-[50%] " />
        </Link>
      </div>
      <div className="prod-des flex items-center justify-between">
        <div className="prod-title_price">
          <div className="title font-[600]">{prop.title}</div>
          <div className="price text-[rgba(0,0,0,0.75)] font-[600]">
            {prop.price} USD
          </div>
        </div>
        <div className="btn-icon p-3 bg-[rgba(239,232,232,0.95)] rounded-lg text-[20px] cursor-pointer">
          <PiShoppingCart onClick={handleAddToCart} />
        </div>
      </div>
      <div className="message text-green-600 absolute right-10 bottom-5">
          {isAdded}
      </div>
    </div>
  );
};

export default Products;
