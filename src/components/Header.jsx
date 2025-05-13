import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({handleSetShowForm, darkTheme, handleChangeTheme, closeOpenedSections}) => {

  return (
    <div className=" 
    flex items-center justify-between px-4 py-2 shadow-md shadow-blue-300/20 bg-gray-800/20 backdrop-blur-sm"
    onClick={() => closeOpenedSections()}
    >
      <div className="flex flex-col leading-none text-xl font-bold cursor-pointer">
        <div className="text-gray-200">
          <p><span>Gabriell</span></p>
        </div>
        <div className="pl-4 text-blue-500">
          <p><span>Rossolon</span></p>
        </div>
      </div>
      <div className="flex justify-between items-center lg:gap-12 gap-4">
        <div className="flex items-center justify-center text-4xl gap-4">
          <button onClick={() => window.open("https://www.linkedin.com/in/gabriell-rossolon/", "_blank")}>
            <FaLinkedin className="cursor-pointer hover:text-blue-500 transition-colors duration-300"/>
          </button>
          <button onClick={() => window.open("https://github.com/gabriellrossolon", "_blank")}>
            <FaGithub className="cursor-pointer hover:text-blue-500 transition-colors duration-300"/>
          </button>
          <button onClick={() => window.open("https://www.instagram.com/gabr_rossolon/", "_blank")}>
            <FaInstagram className="cursor-pointer hover:text-blue-500 transition-colors duration-300"/>
          </button>
        </div>
        <div>
          <button 
          className="rounded-full bg-gray-200 text-black font-bold py-2 px-4 hidden lg:block cursor-pointer hover:bg-blue-500 transition-all duration-500 hover:text-gray-200"
          onClick={() => handleSetShowForm()}>
            Entre em Contato
          </button>
        </div>
        <div 
        className="flex items-center justify-center text-4xl gap-4 hover:bg-white/20 rounded-full p-1"
        onClick={() => handleChangeTheme()}
        >
          {darkTheme ? 
          <FaSun className="cursor-pointer hover:text-yellow-500 transition-colors duration-300"/>
          :
          <FaMoon className="cursor-pointer hover:text-blue-500 transition-colors duration-300"/>
          }
          
        </div>
      </div>  
    </div>
  )
}

export default Header
