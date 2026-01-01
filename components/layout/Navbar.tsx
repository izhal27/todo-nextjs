import { LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full  px-4 py-3">
      <div className="font-bold relative group">
        <a href="/">
          Todo<span className="text-papaya">App</span>
          <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-papaya transition-all duration-200 ease-out group-hover:w-full"></span>
        </a>
      </div>
      <div>
        <a href="#" className="hover:text-papaya transition-colors duration-200 ease-out">
          <LogIn />
        </a>
      </div>
    </nav>
  )
}