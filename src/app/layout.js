import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Neeraj",
  description: "portfolio of neeraj rajput",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-[#1A1A1D] via-[#1f0d33] to-[#1A1A1D] animate-moving-gradient`}
      >
        <div className="w-[80%] h-screen  mx-auto flex flex-col">
          <Header />
            {children}         
        </div>
      </body>
    </html>
  );
}
