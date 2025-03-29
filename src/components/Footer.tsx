"use client";

import { FiZap } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
              style={{ background: "#5B21B6" }}
            >
              <FiZap
                className="text-white"
                size={20}
                style={{
                  color: "white",
                }}
              />
            </div>
            <span className="text-xl font-bold gradient-text">Inside AI</span>
          </div>

          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Inside AI. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
