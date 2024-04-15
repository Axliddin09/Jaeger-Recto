import { Routes, Route } from "react-router-dom"
import { SideBar } from "./components/SideBar"
import { Dashboard, HomePage, Settings } from "./pages"

const App = () => {
  return (
    <div  className="text-white font-barlow">
      <SideBar  / >
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/settings" element={<Settings/>}/> 
        </Routes>
    </div>
  )
}

export default App 
 