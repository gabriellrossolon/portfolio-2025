import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa';


const Header = () => {
  return (
    <div className=" flex items-center justify-between px-4 py-2 shadow-md shadow-blue-300/20 bg-gray-800/20 backdrop-blur-sm">
      <div className="flex flex-col leading-none text-xl font-bold ">
        <div className="">
          <p><span>Gabriell</span></p>
        </div>
        <div className="pl-4 text-blue-500">
          <p><span>Rossolon</span></p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-12">
        <div className="flex items-center justify-center text-4xl gap-4">
          <FaLinkedin className="cursor-pointer hover:text-blue-500 transition-colors duration-300"/>
          <FaGithub className="cursor-pointer hover:text-blue-500 transition-colors duration-300"/>
          <FaInstagram className="cursor-pointer hover:text-blue-500 transition-colors duration-300"/>
        </div>
        <div className="flex items-center justify-center text-4xl gap-4">
          <FaSun className="cursor-pointer hover:text-yellow-500 transition-colors duration-300 rounded-xl hover:bg-white/20"/>
        </div>
      </div>
      
      
      
    </div>
  )
}

export default Header
