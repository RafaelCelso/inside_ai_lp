import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inside AI - Sua IA Personalizada",
  description: "Crie uma IA personalizada com seus próprios documentos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
