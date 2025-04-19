"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Demo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar inicialmente
    checkMobile();

    // Adicionar listener para mudanças de tamanho
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="demo"
      style={{
        backgroundColor: "#0f1117",
        paddingTop: "6rem",
        paddingBottom: "10rem",
      }}
    >
      <style jsx>{`
        .video-container {
          position: relative;
          padding-top: 56.25%; /* Proporção 16:9 para desktop */
          background-color: #1a1d25;
        }

        @media (max-width: 767px) {
          .video-container {
            padding-top: 177.78%; /* Proporção 9:16 para mobile */
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Veja como é <span className="gradient-text">Simples</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted max-w-2xl mx-auto"
            style={{ color: "rgba(248, 249, 250, 0.8)" }}
          >
            Experimente nossa plataforma intuitiva e descubra como é fácil criar
            uma IA personalizada com seus documentos
          </motion.p>
        </div>

        {/* Container centralizado com largura máxima */}
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden shadow-2xl"
            style={{
              backgroundColor: "#1a1d25",
              border: "1px solid #2d3748",
              width: "100%",
              borderRadius: "8px",
            }}
          >
            {/* Efeito de brilho */}
            <div
              className="absolute -inset-0.5 blur-2xl opacity-20"
              style={{
                background: "linear-gradient(to right, #6d28d9, #3b82f6)",
                filter: "blur(16px)",
                borderRadius: "8px",
              }}
            />

            {/* Container do vídeo */}
            <div className="video-container">
              <video
                autoPlay
                loop
                muted
                playsInline
                key={isMobile ? "mobile" : "desktop"} // Força o recarregamento quando muda
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  backgroundColor: "#1a1d25",
                  borderRadius: "8px",
                }}
              >
                <source
                  src={
                    isMobile
                      ? "/media/Inside Ai - Vídeo De Uso Mobile.webm"
                      : "/media/Inside AI - Vídeo De Uso.webm"
                  }
                  type="video/webm"
                />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
