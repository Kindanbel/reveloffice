import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import product from "../../../data/products";
import { PiShoppingCart } from "react-icons/pi";
import { DetailsButton } from "../../components/Button";
import Products from "../../components/Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";

const ProductDetails = () => {
  const { slug } = useParams();
  const [details, setDetails] = useState([]);
  const [tick, setTick] = useState(false);
  const [tick2, setTick2] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetails = product.filter((prod) => prod.slug === slug);
    if (findDetails.length > 0) {
      setDetails(findDetails[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleTick = () => {
    setTick(!tick);
  };

  const handleTick2 = () => {
    setTick2(!tick2);
  };

  /*Increasing the number of Quantity */

  const handleMinus = () => {
    setQuantity(quantity -1 < 1 ? 1 : quantity - 1);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      prodId: details.id,
      quantity: quantity
    }))
  }


  /*Increasing the number of Quantity */

  /*Creating a Random Image selector */
  const getRandomProducts = (array, num) => {
    const result = [];
    const taken = new Set();

    while (result.length < num && result.length < array.length) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!taken.has(randomIndex)) {
        result.push(array[randomIndex]);
        taken.add(randomIndex);
      }
    }
    return result;
  };

  const randomProducts = product ? getRandomProducts(product, 3) : [];
  /*Creating a Random Image selector */

  return (
    <div className="flex-1 bg-[rgba(239,232,232,0.99)] ">
      <div className=" flex px-[3%] pt-[50px]">
        <div className="image-con flex-1 flex justify-center">
          <div className="detial_image w-[400px] h-[400px] bg-transparent">
            <img
              src={details.image}
              alt="image"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>

        <div className="details w-[500px] h-[fit] bg-white py-[30px] px-[2%] rounded-lg">
          <div className="head border-b-2 border-solid border-[rgba(0,0,0,0.25)] ">
            <div className="details_header pb-5 font-bold text-[20px]">
              {details.title}
            </div>
            <div className="details_price pb-10">{details.price}</div>
          </div>
          <div className="details_descr pt-5 pb-10">{details.text}</div>
          <div className="castor">
            <div className="castor_header text-[rgba(0,0,0,0.55)] pb-7">
              {details.name}
            </div>
            <div className="choose_castor flex flex-col gap-5 pb-[100px]">
              <div className="hard flex items-center gap-3">
                <div
                  onClick={handleTick}
                  className="check 
              w-[20px] h-[20px] border-[rgba(0,0,0,0.55)] border-2 border-solid rounded-full flex items-center justify-center"
                >
                  <div
                    className={`inner w-[10px] h-[10px] ${
                      tick ? "bg-black" : "bg-tansparent"
                    } rounded-full`}
                  ></div>
                </div>
                <div className="value font-bold">{details.option1}</div>
              </div>

              <div className="soft flex items-center gap-3">
                <div
                  onClick={handleTick2}
                  className="check 
              w-[20px] h-[20px] border-[rgba(0,0,0,0.55)] border-2 border-solid rounded-full flex items-center justify-center"
                >
                  <div
                    className={`inner w-[10px] h-[10px] ${
                      tick2 ? "bg-black" : "bg-tansparent"
                    } rounded-full`}
                  ></div>
                </div>
                <div className="value font-bold">{details.option2}</div>
              </div>
            </div>
          </div>
          <div className="button flex items-center justify-between">
            <div className="quantity flex items-center gap-7">
              <div className="quant-text">QTY:</div>
              <div className="increase_decrease flex items-center h-[fit]">
                <div className="value h-[fit] py-5 px-7 border-2 border-solid border-[rgba(0,0,0,0.55)] ">
                  {quantity}
                </div>
                <div className="btn  border-b-2 border-t-2 border-r-2 py-2 border-solid border-[rgba(0,0,0,0.55)] ">
                  <div onClick={handlePlus} className="plus border-b-2 px-3 border-solid border-[rgba(0,0,0,0.55)] cursor-pointer">
                    +
                  </div>
                  <div onClick={handleMinus} className="minus px-3 cursor-pointer">_</div>
                </div>
              </div>
            </div>

            <div className="btn">
              <DetailsButton addCart={handleAddToCart} title="Add to Cart" icon={<PiShoppingCart />} />
            </div>
          </div>
        </div>
      </div>

      {/*Displaying other Category */}

      <div className="category px-[3%] pt-[70px] pb-[50px]">
        <div className="header flex items-center gap-7">
          <div className="title ">Other Collections </div>
          <div className="line w-[90%] h-[2px] bg-[rgba(0,0,0,0.25)]"></div>
        </div>
        <div className="product grid grid-cols-3 gap-10 mt-[70px]">
          {randomProducts.map((prod) => {
              return (
                <Products
                  key={prod.id}
                  id={prod.id}
                  source={prod.image}
                  title={prod.title}
                  price={prod.price}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
