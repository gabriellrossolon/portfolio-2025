const Button = ({text, fontSize, onClick}) => {
  return (
    <div className="flex items-center justify-center ">
      <button 
        className={`
        ${fontSize}
        flex items-center justify-center gap-2
        py-2 px-10 bg-gray-800/20  rounded-lg backdrop-blur-sm cursor-pointer 
        text-gray-200 hover:text-blue-200 hover:shadow-md shadow-black/50 
        transition-all duration-500`} 
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
