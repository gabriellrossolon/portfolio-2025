import './DevAnimation.css';

const Body = () => {
  const text = "< Desenvolvedor Front-End />"; // Texto a ser animado

  return (
    <div className="flex justify-center items-center p-8">
      <h1 className="text-4xl animate-text font-semibold">
        {text.split('').map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Body;
