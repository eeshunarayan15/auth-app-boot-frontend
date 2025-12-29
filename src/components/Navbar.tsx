import { NavLink } from "react-router";
import { Button } from "./ui/button.tsx";

export default function Navbar() {
  return (
      <nav className="w-full flex border-b border-gray-400 flex-col md:flex-row justify-around items-center h-14 align-middle">
        {/*brand*/}
        <div className="flex items-center gap-2 text-center">
          <span className="h-6 w-6 inline-block rounded-md bg-gradient-to-r from-blue-500 to-blue-300"></span>
          <NavLink to={"/"}>
            <span className="text-white text-base tracking-tight">Auth App</span>
          </NavLink>
        </div>
        {/*links*/}
        <div className="flex gap-4 items-center">
          <NavLink to={"/"}>
            <a href="#">Home</a>
          </NavLink>
          <NavLink to={"/login"}>
            <Button className="cursor-pointer" variant={"outline"}>
              Login
            </Button>
          </NavLink>
          <NavLink to={"/register"}>
            <Button className="cursor-pointer" variant={"outline"}>
              Register
            </Button>
          </NavLink>
        </div>
      </nav>
  );
}