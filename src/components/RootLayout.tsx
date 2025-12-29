import {Outlet} from "react-router";
import Navbar from "./Navbar.tsx";

export function RootLayout(){
    return(
      <div className="w-full">
          <Navbar/>
          <Outlet/>
      </div>
    )
}