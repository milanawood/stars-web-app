import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavProvider } from "./contexts/NavContext";
import { Viewport } from "next";
import NavBar from "./components/navigation/NavBars";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STARS®",
  description: "STARS® is here to serve the best burgers, in iconic locations, connecting communities of surfers, skaters, boarders and bikers",
  
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-hidden`}>
        <div className="fixed mix-blend-multiply z-10 w-full h-full top-0 left-0 pointer-events-none select-none">
          <Image width={1200} height={900} src={'/images/background-transparent.png'} className='mix-blend-multiply text-transparent w-full h-full absolute object-fill' alt="STARS® texture background"/>
        </div>
        <NavProvider>
           <NavBar />
            {children}
        </NavProvider>
        </body>
    </html>
  );
}
