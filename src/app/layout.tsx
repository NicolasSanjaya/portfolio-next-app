import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["500"], subsets: ["devanagari"] });

export const metadata: Metadata = {
  title: "Nicolas Sanjaya | Fullstack Web Developer",
  description: "Portfolio Website for Nicolas Sanjaya",
  icons: {
    icon: { url: "/logo.ico" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="description"
          content="Portfolio Website for Nicolas Sanjaya"
        />
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body className={`${poppins.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
