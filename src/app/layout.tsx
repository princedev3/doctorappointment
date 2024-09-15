import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

import DoctorContext from "@/components/context/DoctorContext";
import Footer from "@/components/Footer";
import DateProvider from "@/lib/DateProvider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased   `}
        >
  
          <DoctorContext>
      <DateProvider>
        <Navbar/>
        {children}
      </DateProvider> 
        <Footer/>
          </DoctorContext>
        
      </body>
    </html>
  );
}
