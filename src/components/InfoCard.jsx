const InfoCard = ({ colSpan = "col-span-1", gap, children, onClick }) => {
  return (
    <div className={`
    ${gap} ${colSpan} 
    flex flex-col justify-between p-6 bg-gray-800/20 rounded-lg backdrop-blur-sm
    hover:shadow-xl shadow-black/50 transition-all duration-500 cursor-pointer
    hover:text-blue-200
    `}
    onClick={onClick}
    >
      {children}
    </div>
  );
};

export default InfoCard
