import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilan — Le bilan mensuel envoyé sans y penser",
  description:
    "Le bilan mensuel de vos clients, mis en page et envoyé automatiquement le 1er de chaque mois.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
