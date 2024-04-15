
const SearchBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="pb-6">
        <h2 className="text-[28px] font-semibold leading-[39.2px] mb-1">Jaeger Recto</h2>
        <p className="text-base font-normal  text-light">Thursday, 23 Dec 2023</p>
      </div>
      <div className="p-[14px] bg-base-form-bg flex items-center w-[230px] gap-2 border-[1px] border-base-dark-line rounded-lg">
        <span>
          <i className="fa-solid fa-magnifying-glass" />  
        </span>
        <input className="bg-transparent text-light text-sm font-normal w-full leading-[19.6px] outline-none" type="text"  placeholder="Search for food, coffee, etc.."/>
      </div>
    </div>
  )
}

export default SearchBar