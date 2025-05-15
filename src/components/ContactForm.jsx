import { motion } from "framer-motion";
import { FaArrowRight, FaSpinner, FaCheck, FaTimes } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { useState } from "react";

import styles from "./ContactForm.module.css"; // Importando o CSS Module

const FORM_STATES = {
  PENDING: "Pending",
  LOADING: "Loading",
  SUCCESS: "Success",
  ERROR: "Error",
};

const ContactForm = ({ handleSetShowForm }) => {
  const icons = {
    [FORM_STATES.PENDING]: <MdSend />,
    [FORM_STATES.LOADING]: <FaSpinner className={styles.spin} />,
    [FORM_STATES.SUCCESS]: <FaCheck className="text-green-400" />,
    [FORM_STATES.ERROR]: <FaTimes className="text-red-500" />,
  };

  const [formState, setFormState] = useState(FORM_STATES.PENDING);

  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormState(FORM_STATES.LOADING);

    fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        comment: userComment,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // alert("Mensagem enviada com sucesso!");
          setFormMessage("Mensagem enviada com sucesso!");
          setFormState(FORM_STATES.SUCCESS);
          setUserName("");
          setUserEmail("");
          setUserComment("");
        } else {
          setFormMessage("Erro ao enviar. Tente novamente mais tarde.");
          setFormState(FORM_STATES.ERROR);
          // alert("Erro ao enviar. Tente novamente mais tarde.");
        }
      })
      .catch((err) => {
        console.error(err);
        setFormState(FORM_STATES.ERROR);
        setFormMessage(
          "Erro ao conectar com o servidor. Tente novamente mais tarde."
        );
        // alert("Erro ao conectar com o servidor.");
      });
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
        <div className="w-full flex flex-col justify-between items-center gap-10">
          <button
            type="submit"
            className="w-full"
            disabled={formState === FORM_STATES.LOADING}
            aria-busy={formState === FORM_STATES.LOADING}
          >
            <p className="flex items-center justify-center text-2xl gap-2 bg-blue-500 rounded-xl px-4 py-2 font-semibold cursor-pointer hover:bg-blue-600 transition-colors duration-500">
              Enviar
              {icons[formState]}
            </p>
          </button>
          <p className="text-center font-semibold text-xl">
            {formMessage || ""}
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
