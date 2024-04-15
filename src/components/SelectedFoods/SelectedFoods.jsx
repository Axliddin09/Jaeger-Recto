
const SelectedFoods = ({activeContent}) => {
  return (
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold capitalize ">{activeContent}</h2>
        <select className="bg-base-form-bg p-[14px] rounded-md">
            <option value="Dine In">Dine In</option>
            <option value="Dine Out">To Go</option>
            <option value="Delivery">Delivery</option>
        </select>
    </div>
  )
}

export default SelectedFoods