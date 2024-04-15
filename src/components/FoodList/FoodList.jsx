import { useState } from "react"
import { FOOD_LIST } from "../../data"
import FoodCard from "../FoodCard/FoodCard"
const FoodList = () => {
  const [foodList] = useState(FOOD_LIST)
  return (
    <ul className="flex justify-between flex-wrap h-[520px] overflow-auto p-9 example">
      {
        foodList.map(food => (
          <FoodCard key={food.id} food={food}/>
        ))
      }
    </ul>
  )
}

export default FoodList