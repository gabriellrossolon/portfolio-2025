import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { useState } from "react";

const ContactForm = ({ handleSetShowForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Olá " +
        userName +
        "! Infelizmente o formulário ainda não esta integrado ao back-end, caso queira entrar em contato comigo, pode estar enviando diretamente por email: gabrirossolon@gmail.com"
    );
    setUserName("");
    setUserEmail("");
    setUserComment("");
  };

  const [userName, setUserName] = useState("");
  const handleNameChange = (e) => {
    const onlyLetters = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    const capitalized = onlyLetters
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    setUserName(capitalized);
  };

  const [userEmail, setUserEmail] = useState("");
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const [userComment, setUserComment] = useState("");
  const handleCommentChange = (e) => {
    setUserComment(e.target.value);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-0 right-0 w-[30%] bg-black/80 z-50 h-full pl-4 py-2 rounded-xl backdrop-blur-xl"
    >
      <button
        className="cursor-pointer w-full bg-blue-500 p-2 rounded-l-full shadow-md shadow-blue-950"
        onClick={() => handleSetShowForm()}
      >
        <div className="bg-black rounded-full w-fit p-2">
          <FaArrowRight className="text-3xl" />
        </div>
      </button>
      <form
        className="flex flex-col items-center justify-center gap-8 py-12 mr-4"
        action="submit"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col w-full gap-2">
          <label className="flex flex-col items-start w-full">
            <span className="font-semibold text-gray-50">Nome</span>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Digite seu nome"
              className="border border-gray-600/50 rounded-full px-4 py-2 w-full"
              onChange={(e) => handleNameChange(e)}
              value={userName}
            />
          </label>
          <label className="flex flex-col items-start w-full">
            <span className="font-semibold text-gray-50">Email</span>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Digite seu email"
              className="border border-gray-600/50 rounded-full px-4 py-2 w-full"
              onChange={(e) => handleEmailChange(e)}
              value={userEmail}
            />
          </label>
          <label className="flex flex-col items-start w-full">
            <span className="font-semibold text-gray-50">Comentário:</span>
            <textarea
              name="comment"
              id="comment"
              placeholder="Fale um pouco sobre o assunto que vamos conversar..."
              rows="8"
              required
              className="w-full min-h-20 p-2 text-gray-200 border border-gray-600/50 rounded  resize-none"
              onChange={(e) => handleCommentChange(e)}
              value={userComment}
            ></textarea>
          </label>
        </div>
        <button type="submit" className="w-full">
          <p className="flex items-center justify-center text-2xl gap-2 bg-blue-500 rounded-xl px-4 py-2 font-semibold cursor-pointer hover:bg-blue-600 transition-colors duration-500">
            Enviar
            <MdSend />
          </p>
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
