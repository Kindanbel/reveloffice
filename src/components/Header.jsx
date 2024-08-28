import { PiShoppingCart } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../store/cart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dispatch = useDispatch();

  const carts = useSelector(store => store.cart.items)

  useEffect(() => {
    let total = 0
    carts.forEach(item => total += item.quantity);
    setTotalQuantity(total)
  },[carts])

  const navigation = useNavigate();

  function redirectHome() {
    navigation("/");
  }

  const handleToggle = () => {
    dispatch(toggleStatusTab())
  }

  return (
    <div className="flex gap-1 md:gap-5 items-center px-[3%] relative">
      <div className=" cart btn w-[fit] py-3 p-1 xl:px-10 bg-transparent xl:bg-white rounded-md flex items-center gap-5 cursor-pointer" onClick={handleToggle}>
        <div className="btn-name text-[18px] hidden xl:block">Cart ({totalQuantity})</div>
        <div className="btn-icon p-3 bg-[rgba(239,232,232,0.95)] rounded-lg text-[20px]">
          <PiShoppingCart />
        </div>
      </div>
      {/*Logo and Links */}
      <div className="link flex items-center justify-between flex-1 bg-white py-6 px-10 rounded-lg">
        <div className="logo font-bold cursor-pointer " onClick={redirectHome}>
          REVELOFFICE
        </div>
        <nav className={`links absolute ${isOpen ? "block" : "hidden" } lg:block top-[100px] lg:top-0 p-20 lg:p-0 rounded-lg lg:rounded-none bg-black lg:bg-transparent right-10 lg:relative`}>
          <ul className="link-list flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <li className="link">
              <Link to="/" className="text-white lg:text-black"> Shop</Link>
            </li>
            <li className="link">
              <a href="/" className="text-white lg:text-black"> Track orders</a>
            </li>
            <li className="link">
              <a href="/" className="text-white lg:text-black"> Contact</a>
            </li>
            <li className="link flex gap-3 items-center">
              <a href="/" className="text-white lg:text-black"> Collections </a>
              <RiArrowDropDownLine className="text-[20px] cursor- text-white lg:text-black" />
            </li>
            <li className="link flex gap-3 items-center">
              <a href="/" className="text-white lg:text-black"> Help </a>
              <RiArrowDropDownLine className="text-[20px] cursor-pointer text-white lg:text-black" />
            </li>
            <li className="block xl:hidden">
              <div className="btn-icon p-3 bg-[rgba(239,232,232,0.95)] rounded-lg text-[20px]">
                <AiOutlineUser />
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="btn hidden xl:block">
        <Button title="Create Account" icon={<AiOutlineUser />} />
      </div>

      <div className="hamburger-menu block lg:hidden p-1 bg-[rgba(239,232,232)] rounded-lg" onClick={()=> setIsOpen(!isOpen)}>
        <IoIosMenu className="menu text-[50px]"/>
      </div>
    </div>
  );
};

export default Header;
