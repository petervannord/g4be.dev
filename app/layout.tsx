import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "G4be Portfolio | Home",
  description: "Discover my portfolio, featuring my projects and skills.",
  generator: "G4be Portfolio",
  icons: {
    icon: "https://cis9db4fll.ufs.sh/f/dfhCbRMwVEKtwc7zxLz2kBpesiulMtPz62jQVv7LZI958gRa", // Path to favicon
  },
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
