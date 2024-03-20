'use client';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { url } from "inspector";

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

// export const metadata: Metadata = {
//   title: "Painel TV",
//   description: "Vizualização de informações de faturamento",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="bg-solar-blue-light flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow bg-tv-image bg-cover">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
