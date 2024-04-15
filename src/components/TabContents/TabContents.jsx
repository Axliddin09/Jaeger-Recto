const TabContents = ({activeContent , setActiveContent}) => {
  return (
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
  )
}

export default TabContents
