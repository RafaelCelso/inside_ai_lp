import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Inside AI | Plataforma de Agentes de Inteligência Artificial",
  description:
    "Transforme seu trabalho com agentes de IA avançados que automatizam tarefas complexas e aumentam sua produtividade.",
  keywords:
    "agentes de IA, inteligência artificial, automação, produtividade, assistentes virtuais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
