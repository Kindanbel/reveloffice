import { useState, useEffect } from "react"
import product from "../../../data/products"
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../store/cart";

const  CartItems = (prop) => {
    const {prodId, quantity} = prop.data;
    const [details, setDetails] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetails = product.filter(prod => prod.id === prodId)[0];
        setDetails(findDetails);
    }, [prodId])

    const handleMinus = () => {
      dispatch(changeQuantity({
        prodId: prodId,
        quantity: quantity - 1
      }))
    }

    const handlePlus = () => {
      dispatch(changeQuantity({
        prodId: prodId,
        quantity: quantity + 1
      }))
    }



  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center bg-slate-600 text-white p-2 border-2 border-slate-700 gap-5 rounded-lg mt-3">
        <img src={details.image} alt='image' className='w-12' />
        <div className="name">{details.title}</div>
        <div className="price">{details.price * quantity} USD </div>
        <div className="btn w-20 flex justify-between">
          <button className="w-6 h-6 rounded-full bg-gray-200 text-cyan-600" onClick={handleMinus}>-</button>
          <span>{quantity}</span>
          <button className="w-6 h-6 rounded-full bg-gray-200 text-cyan-600" onClick={handlePlus}>+</button>
        </div>
    </div>
  )
}

export default CartItems