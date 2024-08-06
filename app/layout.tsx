import type { Metadata } from 'next';
import './globals.css';
import { NavProvider } from './contexts/NavContext';
import NavBar from './components/navigation/NavBars';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'STARS®',
  description: 'STARS® is here to serve the best burgers, in iconic locations, connecting communities of surfers, skaters, boarders, and bikers',
  icons: [
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon.ico' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-fontwhite">
        <div className="fixed mix-blend-multiply z-5 w-full h-full top-0 left-0 pointer-events-none select-none">
          <Image
            fill
            src="/images/background-transparent.png"
            className="mix-blend-multiply text-transparent w-full h-full absolute object-cover"
            alt="STARS® texture background"
          />
        </div>
        <NavProvider>
          <NavBar />
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
