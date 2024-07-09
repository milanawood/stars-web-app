import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavProvider } from "./contexts/NavContext";
import { Viewport } from "next";
import NavBar from "./components/navigation/NavBars";

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
      <body className={inter.className}>
        <NavProvider>
           <NavBar />
            {children}
        </NavProvider>
        </body>
    </html>
  );
}
