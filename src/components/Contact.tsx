"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiCheckCircle, FiLoader } from "react-icons/fi";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5678/webhook/54dd7d67-3a94-408b-9ac2-a94c0b19db31",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setShowFeedback(true);
        setFormData({ nome: "", telefone: "", email: "" });
      } else {
        console.error("Erro ao enviar solicitação");
      }
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (showFeedback) {
    return (
      <section id="contact" className="section bg-background">
        <div className="pt-96">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card w-full max-w-md mx-auto relative text-center py-12"
            >
              <FiCheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                Obrigado pelo seu interesse!
              </h2>
              <p className="text-muted text-lg mb-2">
                Recebemos sua solicitação com sucesso.
              </p>
              <p className="text-muted">
                Entraremos em contato em até 24 horas para dar continuidade ao
                seu acesso.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section bg-background">
      <div className="pt-96">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-96">
            {/* Formulário de Solicitação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card w-full max-w-md mx-auto relative"
            >
              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000"></div>

              <div className="w-full relative">
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                  Solicite seu acesso
                </h2>
                <p className="text-muted mb-8 text-sm">
                  Preencha seus dados para começar a usar nossos serviços
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div>
                    <label>Nome completo</label>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label>Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="Seu telefone com DDD"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Seu melhor email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={isLoading ? "opacity-70 cursor-not-allowed" : ""}
                  >
                    {isLoading ? (
                      <>
                        <FiLoader
                          size={20}
                          className="animate-spin opacity-70"
                        />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        Solicitar Acesso
                        <FiUser size={20} className="opacity-70" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center mt-6">
                  <a
                    href="https://inside-ai.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light hover:text-primary-light/90 transition-colors text-sm"
                  >
                    Já tenho uma conta
                  </a>
                </p>
              </div>
            </motion.div>

            {/* QR Code e WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card w-full relative text-center"
            >
              {/* Efeito de brilho */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000"></div>

              <div className="w-full relative">
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                  Quer saber mais?
                </h2>
                <p className="text-muted mb-8 text-sm">
                  Escaneie o QR Code abaixo ou clique no botão para falar
                  conosco no WhatsApp
                </p>

                <div className="bg-white p-4 rounded-2xl inline-block mb-8 w-full max-w-[200px] mx-auto">
                  <Image
                    src="/path-to-your-image.jpg"
                    alt="Descrição da imagem"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>

                <a
                  href="https://wa.me/qr/AJCPAVOGQFMIC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button group no-underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="transition-transform group-hover:scale-110"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                  </svg>
                  <span className="font-medium">Falar pelo WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
