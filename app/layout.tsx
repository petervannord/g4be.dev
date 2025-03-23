import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G4be Portfolio | Home",
  description: "Explore my portfolio, showcasing my projects and skills.",
  generator: "G4be Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
