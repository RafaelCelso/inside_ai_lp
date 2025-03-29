"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Gerente de Atendimento, TechSupport",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content:
      "O Inside AI revolucionou nosso atendimento ao cliente. Nosso chatbot responde dúvidas 24/7 consultando nossa base de conhecimento, reduzindo em 70% o tempo de resposta e melhorando a satisfação dos clientes.",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Diretor de RH, EduTech",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content:
      "Centralizamos todos os documentos da empresa na plataforma. Agora, nossa equipe tem acesso rápido a políticas, procedimentos e treinamentos através do chat. A integração com WhatsApp facilitou muito a comunicação interna.",
    stars: 5,
  },
  {
    name: "Juliana Costa",
    role: "Coordenadora de Suporte, FinanceApp",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content:
      "Nossa documentação técnica é extensa e estava difícil manter a equipe atualizada. Com o Inside AI, nossos agentes de suporte conseguem respostas precisas instantaneamente, melhorando muito a qualidade do atendimento.",
    stars: 5,
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="testimonial-card card"
    >
      {/* Elemento decorativo no canto superior direito */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-10"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          borderRadius: "0 1rem 0 100%",
        }}
      />

      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(to right, #8b5cf6, #3b82f6)",
              transform: "scale(1.1)",
              opacity: 0.3,
              filter: "blur(8px)",
            }}
          />
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 relative z-10"
            style={{ borderColor: "#8b5cf6" }}
          />
        </div>
        <div>
          <h4 className="font-medium text-lg text-foreground">
            {testimonial.name}
          </h4>
          <p className="text-sm text-muted">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            size={18}
            className={
              i < testimonial.stars
                ? "text-yellow-500 fill-yellow-500"
                : "text-muted"
            }
          />
        ))}
      </div>

      <p className="text-foreground/90 leading-relaxed">
        {testimonial.content}
      </p>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section"
      style={{ paddingTop: "3rem", marginTop: "-2rem" }}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent -z-10" />

      <div className="absolute -top-20 left-1/4 w-64 h-64 opacity-10 rounded-full bg-purple-glow -z-10" />

      <div className="absolute -bottom-20 right-1/4 w-80 h-80 opacity-10 rounded-full bg-blue-glow -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted max-w-2xl mx-auto"
          >
            Descubra como empresas estão usando nossa plataforma para
            centralizar conhecimento e automatizar atendimento com IA.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
