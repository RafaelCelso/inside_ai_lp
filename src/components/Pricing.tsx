"use client";

import { motion } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const plans = [
  {
    name: "Básico",
    price: "R$ 49",
    period: "/mês",
    description: "Ideal para pequenas empresas e startups",
    features: [
      "Upload de até 100 páginas",
      "1GB de armazenamento",
      "100 consultas por mês",
      "Chat web personalizado",
      "Suporte por email",
    ],
    cta: "Comece Gratuitamente",
    popular: false,
  },
  {
    name: "Profissional",
    price: "R$ 99",
    period: "/mês",
    description: "Perfeito para empresas em crescimento",
    features: [
      "Upload de até 1.000 páginas",
      "10GB de armazenamento",
      "Consultas ilimitadas",
      "Chat web + WhatsApp",
      "Múltiplos chatbots",
      "Suporte prioritário",
    ],
    cta: "Solicitar acesso",
    popular: true,
  },
  {
    name: "Empresarial",
    price: "R$ 249",
    period: "/mês",
    description: "Para grandes empresas com alto volume",
    features: [
      "Upload ilimitado de páginas",
      "100GB de armazenamento",
      "Consultas ilimitadas",
      "Chat web + WhatsApp",
      "Chatbots ilimitados",
      "API personalizada",
      "Treinamento dedicado",
    ],
    cta: "Solicitar acesso",
    popular: false,
  },
];

const PricingCard = ({
  plan,
  index,
}: {
  plan: (typeof plans)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className={`pricing-card card relative ${
        plan.popular ? "border-primary shadow-xl shadow-primary/20" : ""
      }`}
      style={{
        backgroundColor: "#1a1d25",
        borderWidth: plan.popular ? "2px" : "1px",
        height: "100%",
        background: plan.popular
          ? "linear-gradient(145deg, #1a1d25, #1e2029)"
          : "#1a1d25",
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
          background: `radial-gradient(circle, ${
            plan.popular ? "#7c3aed" : "#3b82f6"
          } 0%, rgba(255,255,255,0) 70%)`,
          opacity: 0.3,
        }}
      />

      {plan.popular && (
        <div className="absolute -top-5 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ y: -5, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
          >
            <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFC107"
                  stroke="#FFC107"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Mais Popular
            </span>
          </motion.div>
        </div>
      )}

      {/* Cabeçalho do card */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3 text-foreground">{plan.name}</h3>
        <div className="flex flex-col gap-1 py-4">
          <p className="text-base text-muted-foreground">{plan.description}</p>
        </div>
      </div>

      {/* Preço */}
      <div
        className={`price-highlight ${
          plan.popular ? "popular-price" : ""
        } mb-10 pb-6 border-b border-gray-800/30`}
      >
        <div className="flex items-baseline">
          <span
            className="price-text text-4xl font-black"
            style={{
              background: plan.popular
                ? "linear-gradient(to right, #f8f9fa, #7c3aed)"
                : "linear-gradient(to right, #f8f9fa, #3b82f6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: plan.popular
                ? "0 0 20px rgba(124, 58, 237, 0.3)"
                : "0 0 10px rgba(124, 58, 237, 0.1)",
            }}
          >
            {plan.price}
          </span>
          <span className="text-muted ml-2 text-sm">{plan.period}</span>
        </div>
      </div>

      {/* Lista de recursos */}
      <div className="relative mb-12 pb-4">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 to-transparent"></div>
        <h4 className="text-sm font-semibold text-foreground/80 mb-6 pl-4 flex items-center">
          <span className="bg-primary/10 rounded-full p-1.5 mr-3 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke={plan.popular ? "#7c3aed" : "#3b82f6"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-base">O que está incluído:</span>
        </h4>
        <ul className="space-y-5">
          {plan.features.map((feature, i) => (
            <li key={i} className="feature-item">
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-start gap-5 pl-4 group"
              >
                <div
                  className={`mt-0.5 w-6 h-6 rounded-full ${
                    plan.popular ? "bg-primary/20" : "bg-secondary/20"
                  } flex items-center justify-center ${
                    plan.popular ? "text-primary" : "text-secondary"
                  } flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                >
                  <FiCheck size={16} />
                </div>
                <span className="text-sm text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                  {feature}
                </span>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>

      {/* Botão de ação */}
      <a
        href="#contact"
        className={`block text-center py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
          plan.popular
            ? "bg-primary hover:bg-primary-light text-white"
            : "bg-card border border-border hover:border-primary hover:text-primary hover:bg-primary/5"
        } action-button no-underline`}
        style={{
          marginTop: "auto",
          boxShadow: plan.popular
            ? "0 10px 25px -5px rgba(124, 58, 237, 0.3)"
            : "none",
          fontWeight: "600",
          letterSpacing: "0.025em",
          textDecoration: "none",
        }}
      >
        <span className="relative z-10">{plan.cta}</span>
        <FiArrowRight size={18} />
      </a>

      {/* Linha decorativa no fundo */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "2rem",
          width: "30%",
          height: "2px",
          background: `linear-gradient(to right, ${
            plan.popular ? "#7c3aed50" : "#3b82f650"
          }, transparent)`,
          opacity: 0.5,
        }}
      />
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="section"
      style={{ backgroundColor: "#0f1117" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Planos <span className="gradient-text">Acessíveis</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted max-w-2xl mx-auto"
          >
            Escolha o plano ideal para sua empresa e comece a automatizar seu
            atendimento com chatbots inteligentes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-20">
          {plans.map((plan, index) => (
            <div key={index} className="w-full">
              <PricingCard plan={plan} index={index} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Pricing;
