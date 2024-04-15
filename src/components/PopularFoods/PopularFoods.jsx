import img1 from "../../images/content-image-1.png"
import img2 from "../../images/content-image-2.png"
import img3 from "../../images/content-image-3.png"
import img4 from "../../images/content-image-4.png"
import img5 from "../../images/content-image-5.png"
import baraban from "../../images/baraban.png"
const PopularFoods = () => {
  return (
    <div  className="w-[372px] absolute top-6 right-6">
        <div className="bg-base-dark mb-6 rounded-md p-6">
            <div className="flex justify-between items-center pb-6 border-b border-b-base-dark-line">
                <h3 className="text-xl font-semibold leading-7">Most Ordered</h3>
                <select className="bg-transparent border border-base-dark-line p-[14px] rounded-md">
                    <option className="text-base-dark" value="Today">Today</option>
                    <option className="text-base-dark" value="Tomorrow">Tomorrow</option>
                    <option className="text-base-dark" value="Yesterday">Yesterday</option>
                </select>
            </div>
            <div className="h-56 overflow-auto example mb-8">
                <div className="flex py-6 gap-4">
                    <img className="w-14 h-14 rounded-full" src={img1} alt="" />
                    <div>
                        <h4 className="text-sm font-medium leading-[18.2px]">Spicy seasoned seafood noodles</h4>
                        <p className="text-xs font-normal text-light">200 dishes ordered</p>
                    </div>
                </div>
                <div className="flex pb-6 gap-4">
                    <img className="w-14 h-14 rounded-full" src={img2} alt="" />
                    <div>
                        <h4 className="text-sm font-medium leading-[18.2px]">Salted pasta with mushroom sauce</h4>
                        <p className="text-xs font-normal text-light">120 dishes ordered</p>
                    </div>
                </div>
                <div className="flex pb-6 gap-4">
                    <img className="w-14 h-14 rounded-full" src={img3} alt="" />
                    <div>
                        <h4 className="text-sm font-medium leading-[18.2px]">Beef dumpling in hot and sour soup</h4>
                        <p className="text-xs font-normal text-light">80 dishes ordered</p>
                    </div>
                </div>
                <div className="flex pb-6 gap-4">
                    <img className="w-14 h-14 rounded-full" src={img4} alt="" />
                    <div>
                        <h4 className="text-sm font-medium leading-[18.2px]">Beef dumpling in hot and sour soup</h4>
                        <p className="text-xs font-normal text-light">70 dishes ordered</p>
                    </div>
                </div>
                <div className="flex pb-6 gap-4">
                    <img className="w-14 h-14 rounded-full" src={img5} alt="" />
                    <div>
                        <h4 className="text-sm font-medium leading-[18.2px]">Beef dumpling in hot and sour soup</h4>
                        <p className="text-xs font-normal text-light">130 dishes ordered</p>
                    </div>
                </div>
                <div className="flex pb-6 gap-4">
                    <img className="w-14 h-14 rounded-full" src={img1} alt="" />
                    <div>
                        <h4 className="text-sm font-medium leading-[18.2px]">Beef dumpling in hot and sour soup</h4>
                        <p className="text-xs font-normal text-light">220 dishes ordered</p>
                    </div>
                </div>
            </div>
            <div className="">
                <button className="w-full rounded-lg border border-primary text-primary font-semibold text-sm p-[14px] hover:bg-primary transition-[1.s] hover:text-white hover:shadow-primary-shadow">View All</button>
            </div>
        </div>
        <div className=" bg-base-dark rounded-md p-6">
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-b-base-dark-line">
                    <h3 className="text-xl font-semibold leading-7">Most Type of Ordered</h3>
                    <select className="bg-base-form-bg p-[14px] rounded-md">
                        <option value="Dine In">Dine In</option>
                        <option value="Dine Out">To Go</option>
                        <option value="Delivery">Delivery</option>
                    </select>
            </div>
            <div className="flex items-center gap-6">
                <div className="">
                    <img className="w-40 h-40" src={baraban} alt="" />
                </div>
                <ul className="">
                    <li className="flex w-[120px] mb-4 gap-2">
                        <span className="w-5 h-5 rounded-full bg-accents-red block"></span>
                        <div>
                            <h4 className="text-sm font-medium leading-[18.2px]">Dine In</h4>
                            <p className="text-xs font-normal text-light">200 customers</p>
                        </div>
                    </li>
                    <li className="flex w-[120px] mb-4 gap-2">
                        <span className="w-5 h-5 rounded-full bg-accents-orange block"></span>
                        <div>
                            <h4 className="text-sm font-medium leading-[18.2px]">To Go</h4>
                            <p className="text-xs font-normal text-light">122 customers</p>
                        </div>
                    </li>
                    <li className="flex w-[120px] mb-4 gap-2">
                        <span className="w-5 h-5 rounded-full bg-accents-blue block"></span>
                        <div>
                            <h4 className="text-sm font-medium leading-[18.2px]">Delivery</h4>
                            <p className="text-xs font-normal text-light">264 customers</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PopularFoods