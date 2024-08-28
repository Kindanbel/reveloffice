//import Button from "../../components/Button"
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./cartItems";
import { toggleStatusTab } from "../../store/cart";


const CartDetails = () => {
    const carts = useSelector((store) => store.cart.items)
    const statusTab = useSelector((store) => store.cart.statusTab)
    const dispatch = useDispatch();

    const handleTabClose = () => {
      dispatch(toggleStatusTab())
    }
  return (
    <div className={`cartTab bg-gray-700 overflow-scroll h-[100vh] w-[100%] md:w-[500px]
     fixed left-0 top-0 z-10 rounded-lg grid grid-rows-[60px_1fr_60px] 
     transform transition-transform duration-300 ${statusTab === false ? "-translate-x-full" : ""}`}>
      <div className="header py-[30px] px-[2%] text-white text-[30px] text-center">
        Shopping Cart
      </div>
      <div className="cart-content p-5">
        {
            carts.map((item, key) => {
                return <CartItems key={key} data={item} />
            })
        }
      </div>
      <div className="buttons flex items-center px-5">
        <div className="close-btn cursor-pointer py-3 px-10 bg-red-600 w-[50%] text-center text-[20px] text-white" onClick={handleTabClose}>
          Close
        </div>
        <div className="checkout-btn cursor-not-allowed py-3 px-10 bg-yellow-600 w-[50%] text-center text-[20px] text-white">
          Checkout
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
