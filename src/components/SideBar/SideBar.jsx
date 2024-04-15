import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  BrandLogo,
  HomeIcon,
  DiscountIcon,
  GraphIcon,
  MessageIcon,
  NotificationIcon,
  SettingsIcon,
  LogOutIcon,
} from '../../constants';
const  SideBar = () => {
  const [activePage, setActivePage] = useState("home");
  //#252836
  return (
    <div className="w-[104px] h-full ps-3 py-6 top-0 min-h-screen bg-base-dark fixed">
      <Link className='block  px-3 pb-3' to="/">
        <BrandLogo />
      </Link>
      <ul>
        <li className={`p-4 mb-2 rounded-s-md ${activePage === "home" ? "bg-[#252836]" : ""}`}>
          <Link className={`flex items-center justify-center p-[16px] rounded-md ${activePage === "home" ? "bg-primary shadow-primary-shadow" : ""}`} onClick={() => setActivePage ("home")} to="/"><HomeIcon activePage={activePage} /></Link>
        </li>
        <li className={`p-4 mb-2 rounded-s-md ${activePage === "discount" ? "bg-[#252836]" : ""}`}>
          <Link className={`flex items-center justify-center p-[18px] rounded-md ${activePage === "discount" ? "bg-primary shadow-primary-shadow" : ""}`} onClick={() => setActivePage ("discount")} to="/"><DiscountIcon activePage={activePage} /></Link>
        </li>
        <li className={`p-4 mb-2 rounded-s-md ${activePage === "graph" ? "bg-[#252836]" : ""}`}>
          <Link className={`flex items-center justify-center p-[18px] rounded-md ${activePage === "graph" ? "bg-primary shadow-primary-shadow" : ""}`} onClick={() => setActivePage ("graph")} to="/dashboard"><GraphIcon activePage={activePage}/></Link>
        </li>
        <li className={`p-4 mb-2 rounded-s-md ${activePage === "message" ? "bg-[#252836]" : ""}`}>
          <Link className={`flex items-center justify-center p-[19px] rounded-md ${activePage === "message" ? "bg-primary shadow-primary-shadow" : ""}`} onClick={() => setActivePage ("message")} to="/"><MessageIcon activePage={activePage}/></Link>
        </li>
        <li className={`p-4 mb-2 rounded-s-md ${activePage === "notification" ? "bg-[#252836]" : ""}`}>
          <Link className={`flex items-center justify-center p-[16px] rounded-md ${activePage === "notification" ? "bg-primary shadow-primary-shadow" : ""}`} onClick={() => setActivePage ("notification")} to="/"><NotificationIcon activePage={activePage}/></Link>
        </li>
        <li className={`p-4 mb-2 rounded-s-md ${activePage === "settings" ? "bg-[#252836]" : ""}`}>
          <Link className={`flex items-center justify-center p-[18px] rounded-md ${activePage === "settings" ? "bg-primary shadow-primary-shadow" : ""}`} onClick={() => setActivePage ("settings")} to="/settings"><SettingsIcon activePage={activePage}/></Link>
        </li>
      </ul>
      <div className={`p-4 rounded-s-md ${activePage === "logout" ? "bg-[#252836]" : ""}`}>
        <Link className={`flex items-center justify-center p-[16px] rounded-md ${activePage === "logout" ? "bg-primary shadow-primary-shadow" : ""}`} onClick={() => setActivePage ("logout")} to="/"><LogOutIcon activePage={activePage}/></Link>
      </div>
    </div>
    )
}

export default SideBar