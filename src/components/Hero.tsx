"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay, FiUser } from "react-icons/fi";

// Cores para os avatares
const avatarColors = [
  "#8b5cf6", // Roxo
  "#3b82f6", // Azul
  "#10b981", // Verde
  "#f59e0b", // Amarelo
];

const Hero = () => {
  return (
    <section
      className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      style={{
        paddingTop: "8rem",
        paddingBottom: "4rem",
        overflow: "hidden",
        backgroundColor: "#0f1117",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
            style={{
              textAlign: "center",
            }}
          >
            <h1 className="hero-title">
              <span
                className="gradient-text"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #8b5cf6, #3b82f6)",
                  display: "inline-block",
                  paddingBottom: "0.1em",
                }}
              >
                IA Personalizada
              </span>{" "}
              com seus
              <br className="hidden md:block" /> próprios documentos
            </h1>
            <p
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0"
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "rgba(248, 249, 250, 0.8)",
                marginBottom: "2rem",
                maxWidth: "42rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Faça upload dos seus documentos e tenha uma IA que responde suas
              dúvidas de forma precisa e contextualizada, consultando
              diretamente sua base de conhecimento personalizada.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <motion.a
                href="https://inside-ai.com.br/login"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#6d28d9",
                  color: "white",
                  fontWeight: "500",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "0.5rem",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  gap: "0.5rem",
                }}
              >
                Começar agora <FiArrowRight />
              </motion.a>
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  border: "1px solid #6d28d9",
                  color: "#6d28d9",
                  fontWeight: "500",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "0.5rem",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  gap: "0.5rem",
                }}
              >
                <FiPlay className="text-primary" style={{ color: "#6d28d9" }} />{" "}
                Ver Demonstração
              </motion.a>
            </div>
            <div
              className="mt-8 text-sm text-muted flex items-center justify-center lg:justify-start gap-6"
              style={{
                marginTop: "2rem",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "#6b7280",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5rem",
              }}
            >
              <div
                className="flex -space-x-2"
                style={{
                  display: "flex",
                  marginRight: "-0.5rem",
                }}
              >
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "9999px",
                      border: "2px solid #0f1117",
                      marginLeft: i > 0 ? "-0.5rem" : "0",
                      backgroundColor: color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      zIndex: 10 - i,
                    }}
                  >
                    <FiUser size={12} />
                  </div>
                ))}
              </div>
              <p style={{ color: "#6b7280" }}>
                +2.500 usuários já estão usando
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
            style={{ position: "relative" }}
          >
            <div
              className="absolute -inset-0.5 rounded-2xl blur-2xl opacity-20 animate-pulse"
              style={{
                position: "absolute",
                inset: "-0.125rem",
                borderRadius: "1rem",
                filter: "blur(16px)",
                opacity: "0.2",
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                background: "linear-gradient(to right, #6d28d9, #3b82f6)",
              }}
            ></div>
            <div
              className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
              style={{
                position: "relative",
                backgroundColor: "#1a1d25",
                border: "1px solid #2d3748",
                borderRadius: "1rem",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Image
                src="/images/inside-hero.png"
                alt="Inside AI Platform"
                width={600}
                height={400}
                className="w-full h-auto"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "linear-gradient(to top, #0f1117 0%, rgba(15, 17, 23, 0) 100%)",
                }}
              ></div>
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  padding: "1.5rem",
                }}
              >
                <div
                  className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-4"
                  style={{
                    backgroundColor: "rgba(26, 29, 37, 0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid #2d3748",
                    borderRadius: "0.75rem",
                    padding: "1rem",
                  }}
                >
                  <div
                    className="flex items-center gap-4"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "9999px",
                        backgroundColor: "#6d28d9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FiPlay
                        className="text-white"
                        size={20}
                        style={{ color: "white" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-medium text-foreground"
                        style={{
                          fontWeight: "500",
                          color: "#f8f9fa",
                        }}
                      >
                        Chat Inteligente
                      </h3>
                      <p
                        className="text-sm text-muted"
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: "1.25rem",
                          color: "#6b7280",
                        }}
                      >
                        Respostas precisas baseadas nos seus documentos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
