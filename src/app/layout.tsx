import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["500"], subsets: ["devanagari"] });

export const metadata: Metadata = {
  title: "Nicolas Sanjaya | Fullstack Web Developer",
  description: "Portfolio Website for Nicolas Sanjaya",
  icons: {
    icon: { url: "/logo.png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'" /> */}
      <meta
        name="description"
        content="Portfolio Website for Nicolas Sanjaya"
      />
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={`${poppins.className} bg-gray-50`}>{children}</body>
    </html>
  );
}
