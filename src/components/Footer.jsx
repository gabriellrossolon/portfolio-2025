import { FaHeart } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-2 mt-auto bg-gray-800/20 p-2 backdrop-blur-sm">
      <p className="text-gray-200/90 ">Feito com</p>
      <div className="text-red-600/90">
        <FaHeart />
      </div>
      
    </div>
  )
}

export default Footer
