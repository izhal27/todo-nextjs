import { LogIn } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background">
      <div className="mx-auto max-w-5xl px-36 flex items-center justify-between h-14">
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
      </div>
    </nav>
  )
}