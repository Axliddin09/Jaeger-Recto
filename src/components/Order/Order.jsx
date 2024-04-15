import { useContext, useState } from "react"
// import Img1 from "../../images/content-image-1.png"
import { FoodContex } from "../../context/contex"
import { FOOD_LIST } from "../../data"
import OrderItem from "../OrderItem/OrderItem"
// import Img2 from "../../images/content-image-2.png"
// import Img3 from "../../images/content-image-3.png"
// import Img4 from "../../images/content-image-4.png"
// import Img5 from "../../images/content-image-5.png"
// import Payment from "../Payment/Payment"
const Order = ( {setActivePayment} ) => {

  const {foodItems , getTotalCartAmount } = useContext(FoodContex)

  let totalPrice = getTotalCartAmount()

  const [orderContent, setOrderContent] = useState("dine in")
  const [paymentActive, setPaymentActive] = useState("active")
  return (
    <div className="w-[409px] h-full min-h-screen bg-base-dark fixed top-0 right-0 p-6">
      <h3 className="text-xl font-semibold mb-6 ">Orders #34562</h3>
      <ul className="flex gap-3 font-semibold mb-6">
        <li>
          <button className={`py-2 px-3 rounded-lg ${orderContent === "dine in" ? "text-white bg-primary" : "border border-base-dark-line text-primary"}`} onClick={() => setOrderContent("dine in")}>
            Dine In
          </button>
        </li>
        <li>
          <button className={`py-2 px-3 rounded-lg ${orderContent === "to go" ? "text-white bg-primary" : "border border-base-dark-line text-primary"}`} onClick={() => setOrderContent("to go")}>
            To Go
          </button>
        </li>
        <li>
          <button className={`py-2 px-3 rounded-lg ${orderContent === "delivery" ? "text-white bg-primary" : "border border-base-dark-line text-primary"}`} onClick={() => setOrderContent("delivery")}>
            Delivery
          </button>
        </li>
      </ul>
      <div className="">
        <div className="flex justify-between pb-6 border-b border-b-base-dark-line">
          <p>Item</p>
          <div className="flex gap-11 ">
            <p>Qty</p>
            <p>Price</p>
          </div>
        </div>
      </div>
      <ul className="mt-6 h-[400px] example overflow-auto">
        {
          FOOD_LIST.map(food => {
            return foodItems[food.id] !== 0 &&         
              <OrderItem food={food} key={food.id} />
          })
        }
      </ul>
      <div className="pt-6 border-t border-t-base-dark-line">
      <div className="flex justify-between items-center">
        <p className="text-sm font-normal text-light leading-[22.4px] mb-4">Discount</p>
        <p className="font-medium">$0</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm font-normal text-light leading-[22.4px]">Sub total</p>
        <p className="font-medium">$ {totalPrice}</p>
      </div>
      <button className={`p-[14px] w-full rounded-md font-semibold text-sm ${paymentActive === "active" ? "bg-primary" : "bg-primary"} `} onClick={() => setActivePayment(true)}>Continue to Payment</button>
      </div>

    </div>
  )
}

export default Order