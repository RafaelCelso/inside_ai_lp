"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

// Cores para os ícones de benefícios
const benefitColors = [
  "#8b5cf6", // Roxo
  "#3b82f6", // Azul
  "#10b981", // Verde
  "#f59e0b", // Amarelo
  "#8b5cf6", // Roxo
  "#3b82f6", // Azul
];

const benefits = [
  "Respostas instantâneas baseadas em seus documentos",
  "Resumo de documentos em poucos segundos",
  "Redução de custos com economia de tempo",
  "Consistência nas respostas para toda a equipe",
  "IA treinada com seu próprio conteúdo",
  "Atualização fácil da base de conhecimento",
];

const Benefits = () => {
  return (
    <section id="benefits" style={{ paddingBottom: "2rem" }}>
      {/* Elementos decorativos de fundo */}
      <div className="bg-glow bg-glow-3" />
      <div className="bg-glow bg-glow-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
            style={{ position: "relative" }}
          >
            {/* Efeito de brilho ao redor da imagem */}
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

            {/* Container da imagem com borda e sombra */}
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
                src="/images/ai-brain.jpg"
                alt="AI Brain"
                width={600}
                height={400}
                className="w-full h-auto"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />

              {/* Gradiente sobre a imagem */}
              <div
                className="absolute inset-0"
                style={{
                  position: "absolute",
                  inset: "0",
                  background:
                    "linear-gradient(to top, #0f1117 0%, rgba(15, 17, 23, 0) 100%)",
                }}
              ></div>

              {/* Pontos decorativos */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-primary opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-secondary opacity-80"></div>
              </div>

              {/* Linha decorativa */}
              <div
                className="absolute bottom-8 left-8 right-8 h-0.5 rounded"
                style={{
                  background: "linear-gradient(to right, #8b5cf6, transparent)",
                  opacity: 0.5,
                }}
              ></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pl-4 lg:pl-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Velocidade de <span className="gradient-text">Informação</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-muted mb-10"
            >
              Transforme seus documentos em uma fonte de conhecimento acessível
              e busque informações de forma rápida e eficiente.
            </motion.p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="benefit-item"
                >
                  <div
                    className="benefit-icon"
                    style={{
                      backgroundColor: `${benefitColors[index]}20`,
                      color: benefitColors[index],
                    }}
                  >
                    <FiCheck size={14} />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <a
                href="https://inside-ai.com.br/login"
                className="btn btn-primary"
              >
                Começar agora
                <FiArrowRight className="ml-2" size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
