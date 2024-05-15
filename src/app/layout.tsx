'use client';
import { Roboto } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { AuthProvider } from "@/contexts/AuthContext";
import PrivateRoute from "@/components/privateroute";
import { getDataBgImage } from "@/lib/apitv";

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [bgImage, setBgImage] = useState("");
  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname!);

  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(() => {
    const getImageBg = async () => {
      const dataImage = await getDataBgImage();
      setBgImage(dataImage.appImage[0]?.bgimage);
    };
    getImageBg();
  }, [bgImage]);

  return (
    <html lang="en">
      <head>
        <title>Acompanhamento de Vendas - Portal Grupo Solar</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        <div className="bg-solar-blue-light flex flex-col min-h-screen">
          <AuthProvider>
            {isPublicPage && children}
            {!isPublicPage && (
              <PrivateRoute>
                <Header />
                <div className="flex-grow bg-cover bg-tv-image">{children}</div>
                <Footer />
              </PrivateRoute>
            )}
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
