import { Order } from "../components/Order"
import { SearchBar } from "../components/SearchBar"
import { TabContents } from "../components/TabContents"
import { SelectedFoods } from "../components/SelectedFoods"
import { useState } from "react"
import { FoodList } from "../components/FoodList"
import Payment from "../components/Payment/Payment"
const HomePage = () => {
  const [activeContent, setActiveContent] = useState("hot dishes");
  const [activePayment, setActivePayment] = useState(false);
  return (
    <div className="absolute top-0 ms-[104px] pt-6 pl-[10px] pr-[448px]">
      <Order setActivePayment={setActivePayment} />
      {activePayment && <Payment setActivePayment={setActivePayment} />}
      <SearchBar />
      <TabContents activeContent={activeContent} setActiveContent={setActiveContent} />
      <SelectedFoods activeContent={activeContent} />
      <FoodList />
      
    </div>
  )
}

export default HomePage