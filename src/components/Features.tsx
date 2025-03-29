"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLock,
  FiMessageSquare,
} from "react-icons/fi";

// Cores para os gradientes dos cards
const cardGradients = [
  "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
  "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
  "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
  "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)",
  "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)",
  "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
];

// Cores para os ícones
const iconColors = [
  "#8b5cf6", // Roxo
  "#3b82f6", // Azul
  "#10b981", // Verde
  "#f59e0b", // Amarelo
  "#8b5cf6", // Roxo
  "#3b82f6", // Azul
];

const features = [
  {
    icon: <FiDatabase size={24} />,
    title: "Base de Conhecimento Personalizada",
    description:
      "Faça upload dos seus documentos e crie uma base de conhecimento única para sua empresa.",
  },
  {
    icon: <FiMessageSquare size={24} />,
    title: "Chat Contextualizado",
    description:
      "Interaja com uma IA que consulta seus documentos para fornecer respostas precisas e relevantes.",
  },
  {
    icon: <FiCpu size={24} />,
    title: "Chatbot Personalizado",
    description:
      "Crie chatbots inteligentes que respondem dúvidas usando sua base de conhecimento.",
  },
  {
    icon: <FiGlobe size={24} />,
    title: "Integração com WhatsApp",
    description:
      "Conecte seu chatbot ao WhatsApp para atendimento automatizado 24/7 aos seus clientes.",
  },
  {
    icon: <FiActivity size={24} />,
    title: "Respostas em Tempo Real",
    description:
      "Obtenha respostas instantâneas baseadas no conteúdo dos seus documentos.",
  },
  {
    icon: <FiLock size={24} />,
    title: "Privacidade e Segurança",
    description:
      "Seus documentos são processados com total segurança e privacidade garantida.",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card"
      style={{
        background: cardGradients[index],
        marginBottom: "2.5rem",
      }}
    >
      {/* Efeito de brilho no canto superior direito */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${iconColors[index]} 0%, rgba(255,255,255,0) 70%)`,
          opacity: 0.3,
        }}
      />

      <div
        className="card-icon"
        style={{
          background: `linear-gradient(135deg, ${iconColors[index]}20, ${iconColors[index]}40)`,
          color: iconColors[index],
        }}
      >
        {feature.icon}
      </div>

      <h3>{feature.title}</h3>
      <p>{feature.description}</p>

      {/* Linha decorativa no fundo */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "2rem",
          width: "30%",
          height: "2px",
          background: `linear-gradient(to right, ${iconColors[index]}50, transparent)`,
          opacity: 0.5,
        }}
      />
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features">
      {/* Elementos decorativos de fundo */}
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Recursos <span className="gradient-text">Essenciais</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted max-w-2xl mx-auto"
          >
            Transforme seus documentos em uma fonte de conhecimento acessível e
            inteligente com nossa plataforma especializada.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-24">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
