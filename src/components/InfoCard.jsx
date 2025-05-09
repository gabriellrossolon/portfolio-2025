const InfoCard = ({ colSpan = "col-span-1", gap, children }) => {
  return (
    <div className={`
    ${gap} ${colSpan} 
    flex flex-col justify-between p-6 bg-gray-800 rounded-lg 
    hover:shadow-xl shadow-black/50 transition-all duration-300 cursor-pointer
    hover:text-blue-200
    
    `}
    >
      {children}
    </div>
  );
};

export default InfoCard
