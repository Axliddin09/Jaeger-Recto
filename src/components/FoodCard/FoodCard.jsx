import { FoodContex } from "../../context/contex"
import {useContext} from "react"

const FoodCard = ({food}) => {
  const {id, img, title, price, description} = food

  const {addToCart} = useContext(FoodContex)

  return (
    <li className="w-[200px] flex flex-col items-center justify-end mb-[60px] h-[250px] rounded-lg relative bg-base-dark p-6 text-center cursor-pointer hover:border-y-4  border-y-base-dark-line hover:border-x-4 border-x-primary transition-[1.0s]" 
      onClick={() => addToCart(id)}
    >
      <img className="rounded-full absolute -top-9 " src={img} alt={title} />
      <div className="">
        <h3 className="text-sm font-medium leading-[18.2px] mb-2">{title}</h3>
        <p className="text-sm font-normal leading-[19.6px] mb-2">{price}</p>
        <p className="text-sm text-light font-normal leading-[19.6px] mb-1 hover:text-blue-600 transition-[0.5s]">{description}</p>
      </div>
    </li>
  )
}

export default FoodCard