import { useState } from "react"
import { USER_LIST } from "../../data"
const UserList = () => {
  const [userList, setUserList] = useState(USER_LIST)
  return (
    <div className="py-6 px-3 rounded-md h-[450px] bg-base-dark-bg">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Order Report</h3>
            <button className="flex gap-2 bg-base-dark items-center border border-base-dark-line p-[14px] w- rounded-md">
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1976 10.2271C15.927 10.2271 17.3329 11.6148 17.3329 13.3219C17.3329 15.028 15.927 16.4167 14.1976 16.4167C12.4683 16.4167 11.0624 15.028 11.0624 13.3219C11.0624 11.6148 12.4683 10.2271 14.1976 10.2271ZM14.1976 11.6787C13.279 11.6787 12.533 12.4151 12.533 13.3219C12.533 14.2277 13.279 14.9651 14.1976 14.9651C15.1162 14.9651 15.8623 14.2277 15.8623 13.3219C15.8623 12.4151 15.1162 11.6787 14.1976 11.6787ZM7.4308 12.5958C7.83667 12.5958 8.16608 12.921 8.16608 13.3216C8.16608 13.7223 7.83667 14.0474 7.4308 14.0474H1.40247C0.996596 14.0474 0.66719 13.7223 0.66719 13.3216C0.66719 12.921 0.996596 12.5958 1.40247 12.5958H7.4308ZM3.80174 0.583374C5.53112 0.583374 6.93698 1.97207 6.93698 3.67818C6.93698 5.38429 5.53112 6.77298 3.80174 6.77298C2.07334 6.77298 0.666504 5.38429 0.666504 3.67818C0.666504 1.97207 2.07334 0.583374 3.80174 0.583374ZM3.80174 2.03497C2.88411 2.03497 2.13707 2.77238 2.13707 3.67818C2.13707 4.58397 2.88411 5.32138 3.80174 5.32138C4.72035 5.32138 5.46642 4.58397 5.46642 3.67818C5.46642 2.77238 4.72035 2.03497 3.80174 2.03497ZM16.5979 2.95257C17.0038 2.95257 17.3332 3.27773 17.3332 3.67837C17.3332 4.07901 17.0038 4.40417 16.5979 4.40417H10.5686C10.1627 4.40417 9.8333 4.07901 9.8333 3.67837C9.8333 3.27773 10.1627 2.95257 10.5686 2.95257H16.5979Z" fill="white"/>
                </svg>
                <span className="text-sm font-semibold">Filter Order</span>
            </button>
        </div>
        <ul className="flex pb-4 mt-6 border-b border-b-base-dark-line">
          <li className="w-[250px]">Costumer</li>
          <li className="w-[257px]">Menu</li>
          <li className="w-[260px]">Total Payment</li>
          <li className="w-[x]">Status</li>
        </ul>
        <ul className=" example h-[280px] mt-6">
          {
            userList.map(user => (
              <li className=" flex items-center overflow-auto mb-5" key={user.id}>
                <div className="flex w-[252px] items-center gap-4 ">
                  <img src={user.img} alt={user.title} />
                  <p  className="text-sm font-medium text-lighter">{user.title}</p>
                </div>
                <p className="w-[138px] text-sm">{user.description}</p>
                <p className="pl-[122px] w-[368px]">${user.price}</p>
                <button className={`py-1 px-3 rounded-3xl font-medium capitalize text-sm leading-[18.2px] ${user.status === "pending" && "bg-orange-300 bg-opacity-20 text-orange-300"} ${user.status === "completed" && "bg-accents-green bg-opacity-25 text-accents-green"} ${user.status === "preparing" && "bg-accents-purple bg-opacity-20 text-accents-purple"}`}>{user.status}</button>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default UserList
