import { createContext, useState } from "react";
import { FOOD_LIST } from "../data";

export const FoodContex = createContext(null)

function getDefaultCart() {
  let cart = {}

  for (let i = 0; i < FOOD_LIST.length; i++) {
    cart[i] = 0;
  }

  return cart
}

const FoodContexProvidar = ({children}) => {
  const [foodItems, setFoodItems] = useState(getDefaultCart())
  console.log(foodItems);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in foodItems) {
      if (foodItems[item] > 0) {
        const itemInfo = FOOD_LIST.find(food => food.id === foodItems[item]);
        totalAmount += itemInfo.price * foodItems[item]
      }
    }
    return (totalAmount).toFixed(2)
  }

  getTotalCartAmount()

  const addToCart = (itemId) => {
    setFoodItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setFoodItems(prev => ({...prev, [itemId]: prev[itemId] - 1}))
  } 

  const contexValue = {foodItems, addToCart, removeFromCart, getTotalCartAmount}

  return <FoodContex.Provider value={contexValue}>{children}</FoodContex.Provider>
}

export default FoodContexProvidar
// const newArr = FOOD_LIST.filter(food.id === itemId)
//     totalAmount += newArr[itemId].price * itemId;
//     return totalAmount