"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiZap } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav
      className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "50",
        backgroundColor: "rgba(15, 17, 23, 0.8)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #2d3748",
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
          className="flex justify-between h-16 items-center"
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "4rem",
            alignItems: "center",
          }}
        >
          <div
            className="flex items-center"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              href="/"
              className="flex items-center"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "0.75rem",
                  background: "#5B21B6",
                }}
              >
                <FiZap
                  className="text-white"
                  size={20}
                  style={{
                    color: "white",
                  }}
                />
              </motion.div>
              <span
                className="text-xl font-bold gradient-text"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #8b5cf6, #3b82f6)",
                }}
              >
                Inside AI
              </span>
            </Link>
          </div>

          <div
            className="hidden md:flex items-center space-x-8"
            style={{
              display: "none",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Link
              href="#features"
              className="text-foreground/80 hover:text-primary transition-colors"
              style={{
                color: "rgba(248, 249, 250, 0.8)",
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
            >
              Recursos
            </Link>
            <Link
              href="#benefits"
              className="text-foreground/80 hover:text-primary transition-colors"
              style={{
                color: "rgba(248, 249, 250, 0.8)",
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
            >
              Benefícios
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/80 hover:text-primary transition-colors"
              style={{
                color: "rgba(248, 249, 250, 0.8)",
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
            >
              Depoimentos
            </Link>
            <Link
              href="#pricing"
              className="text-foreground/80 hover:text-primary transition-colors"
              style={{
                color: "rgba(248, 249, 250, 0.8)",
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
            >
              Preços
            </Link>
            <Link
              href="https://inside-ai.com.br/login"
              className="btn-primary"
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
              }}
            >
              Começar agora
            </Link>
          </div>

          <div
            className="md:hidden"
            style={{
              display: "block",
            }}
          >
            <button
              onClick={toggleMenu}
              className="text-foreground/90 hover:text-foreground p-2 rounded-md focus:outline-none bg-card/80"
              style={{
                color: "rgba(248, 249, 250, 0.9)",
                padding: "0.5rem",
                borderRadius: "0.375rem",
                outline: "none",
                backgroundColor: "rgba(26, 29, 37, 0.8)",
              }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="md:hidden overflow-hidden"
        style={{
          overflow: "hidden",
        }}
      >
        <div
          className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-b border-border"
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.75rem",
            gap: "0.25rem",
            backgroundColor: "#1a1d25",
            borderBottom: "1px solid #2d3748",
          }}
        >
          <Link
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-background/50"
            style={{
              display: "block",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              borderRadius: "0.375rem",
              color: "rgba(248, 249, 250, 0.8)",
              textDecoration: "none",
            }}
          >
            Recursos
          </Link>
          <Link
            href="#benefits"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-background/50"
            style={{
              display: "block",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              borderRadius: "0.375rem",
              color: "rgba(248, 249, 250, 0.8)",
              textDecoration: "none",
            }}
          >
            Benefícios
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-background/50"
            style={{
              display: "block",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              borderRadius: "0.375rem",
              color: "rgba(248, 249, 250, 0.8)",
              textDecoration: "none",
            }}
          >
            Depoimentos
          </Link>
          <Link
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-background/50"
            style={{
              display: "block",
              paddingLeft: "0.75rem",
              paddingRight: "0.75rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              borderRadius: "0.375rem",
              color: "rgba(248, 249, 250, 0.8)",
              textDecoration: "none",
            }}
          >
            Preços
          </Link>
          <Link
            href="https://inside-ai.com.br/login"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-white bg-primary hover:bg-primary-light text-center"
            style={{
              display: "block",
              padding: "0.75rem",
              borderRadius: "0.375rem",
              backgroundColor: "#6d28d9",
              color: "white",
              textDecoration: "none",
              marginTop: "0.5rem",
            }}
          >
            Começar agora
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
