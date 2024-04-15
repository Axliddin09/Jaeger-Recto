import { useState } from "react"
import { FOOD_LIST } from "../../data"

const TheEnd = () => {
    const [foodList] = useState(FOOD_LIST)
    const [activeContent, setActiveContent] = useState("hot dishes")
  return (
    <div className="px-6 pb-6 bg-base-dark-bg rounded-md w-[1083px]">
        <div className="flex justify-between items-center">
            <div className="py-[34px]">
                <h1 className="font-semibold text-xl font-barlow">Products Management</h1>
            </div>
            <div className="p-6 font-semibold text-sm font-barlow">
                <button className="flex gap-2 items-center p-[14px] border border-base-dark-line rounded-md">
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1976 9.7271C15.927 9.7271 17.3329 11.1148 17.3329 12.8219C17.3329 14.528 15.927 15.9167 14.1976 15.9167C12.4683 15.9167 11.0624 14.528 11.0624 12.8219C11.0624 11.1148 12.4683 9.7271 14.1976 9.7271ZM14.1976 11.1787C13.279 11.1787 12.533 11.9151 12.533 12.8219C12.533 13.7277 13.279 14.4651 14.1976 14.4651C15.1162 14.4651 15.8623 13.7277 15.8623 12.8219C15.8623 11.9151 15.1162 11.1787 14.1976 11.1787ZM7.4308 12.0958C7.83667 12.0958 8.16608 12.421 8.16608 12.8216C8.16608 13.2223 7.83667 13.5474 7.4308 13.5474H1.40247C0.996596 13.5474 0.66719 13.2223 0.66719 12.8216C0.66719 12.421 0.996596 12.0958 1.40247 12.0958H7.4308ZM3.80174 0.083374C5.53112 0.083374 6.93698 1.47207 6.93698 3.17818C6.93698 4.88429 5.53112 6.27298 3.80174 6.27298C2.07334 6.27298 0.666504 4.88429 0.666504 3.17818C0.666504 1.47207 2.07334 0.083374 3.80174 0.083374ZM3.80174 1.53497C2.88411 1.53497 2.13707 2.27238 2.13707 3.17818C2.13707 4.08397 2.88411 4.82138 3.80174 4.82138C4.72035 4.82138 5.46642 4.08397 5.46642 3.17818C5.46642 2.27238 4.72035 1.53497 3.80174 1.53497ZM16.5979 2.45257C17.0038 2.45257 17.3332 2.77773 17.3332 3.17837C17.3332 3.57901 17.0038 3.90417 16.5979 3.90417H10.5686C10.1627 3.90417 9.8333 3.57901 9.8333 3.17837C9.8333 2.77773 10.1627 2.45257 10.5686 2.45257H16.5979Z" fill="white"/>
                    </svg>
                    <span>Manage Categories</span>
                </button>
            </div>
        </div>
        <ul className="flex items-center gap-8 border-b border-b-base-dark-line mb-6">
      <li className={` pb-3 ${activeContent === "hot dishes" ? "text-primary border-b-2 border-b-primary" : "border-b-2 border-b-transparent"}`}>
        <button onClick={() => setActiveContent("hot dishes")}>Hot Dishes</button>
      </li>
      <li className={` pb-3 ${activeContent === "cold dishes" ? "text-primary border-b-2 border-b-primary" : "border-b-2 border-b-transparent"}`}>
        <button onClick={() => setActiveContent("cold dishes")}>Cold Dishes</button>
      </li>
      <li className={` pb-3 ${activeContent === "soup" ? "text-primary border-b-2 border-b-primary" : "border-b-2 border-b-transparent"}`}>
        <button onClick={() => setActiveContent("soup")}>Soup</button>
      </li>
      <li className={`pb-3 ${activeContent === "grill" ? "text-primary border-b-2 border-b-primary" : "border-b-2 border-b-transparent"}`}>
        <button onClick={() => setActiveContent("grill")}>Grill</button>
      </li>
      <li className={` pb-3 ${activeContent === "appetizer" ? "text-primary border-b-2 border-b-primary" : "border-b-2 border-b-transparent"}`}>
        <button onClick={() => setActiveContent("appetizer")}>Appetizer</button>
      </li>
      <li className={` pb-3 ${activeContent === "dessert" ? "text-primary border-b-2 border-b-primary" : "border-b-2 border-b-transparent"}`}>
        <button onClick={() => setActiveContent("dessert")}>Dessert</button>
      </li>
        </ul>
        <div className="">
            <ul className="flex justify-between h-[424px] gap-4 flex-wrap overflow-auto example">
                <li className="w-[221px] h-[300px] border border-dashed border-primary rounded-lg">
                    <div className="text-primary text-center flex flex-col justify-center items-center">
                        <button className="pt-[111px] text-4xl font-extralight">+</button>
                        <span className="text-base font-semibold font-barlow">Add new dish</span>
                    </div>
                </li>
                {
                    foodList.map(food => (
                        <li className="w-[221px] h-[300px] border border-base-dark-line rounded-lg" key={food.id}>
                            <div className="pt-[22.8px] pb-[14.3px] flex justify-center items-center">
                                <img className="rounded-full" src={food.img} alt="" />
                            </div>  
                            <div className="flex justify-center items-center px-10">
                                <p className="text-center text-sm font-medium mb-2">{food.title}</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="font-normal text-sm text-light mb-4">{food.description}</p>
                            </div>
                            <div className="rounded-b-lg p-3 h-[46px] bg-[#EA7C6942]">
                                <button className="flex gap-x-2 pl-[50px] text-center justify-center items-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9512 14.0075C15.2543 14.0075 15.5 14.2484 15.5 14.5455C15.5 14.8178 15.2935 15.0429 15.0257 15.0785L14.9512 15.0834H9.22583C8.92274 15.0834 8.67705 14.8426 8.67705 14.5455C8.67705 14.2731 8.8835 14.0481 9.15136 14.0124L9.22583 14.0075H14.9512ZM9.38269 1.6806C10.4217 0.662132 12.1069 0.662132 13.1459 1.6806L14.2245 2.73791C15.2635 3.75638 15.2635 5.40829 14.2245 6.42675L6.11717 14.3739C5.65359 14.8283 5.02506 15.0833 4.36901 15.0833H1.04878C0.740346 15.0833 0.492487 14.8342 0.500174 14.532L0.583693 11.248C0.600298 10.6273 0.859392 10.0355 1.30722 9.59653L9.38269 1.6806ZM8.755 3.81592L2.08332 10.3573C1.83438 10.6013 1.69012 10.9308 1.68089 11.2755L1.61121 14.0071L4.36901 14.0075C4.69352 14.0075 5.00559 13.8955 5.2519 13.6932L5.34108 13.6131L12.0458 7.04092L8.755 3.81592ZM12.3698 2.44136C11.7594 1.84305 10.7691 1.84305 10.1588 2.44136L9.53167 3.05508L12.8217 6.28008L13.4484 5.66599C14.0249 5.10092 14.0569 4.20369 13.5445 3.60171L13.4484 3.49867L12.3698 2.44136Z" fill="#EA7C69"/>
                                    </svg>
                                    <span className="text-primary">Edit dish</span>
                                </button>
                            </div>
                        </li>
                      ))
                }
            </ul>
        </div>
    </div>
  )
}

export default TheEnd