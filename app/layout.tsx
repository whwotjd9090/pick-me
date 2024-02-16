import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: {
    template: "%s | 픽미",
    default: "픽미",
  },
  description: "페이지를 소개하는 부분",
  icons: [
    { rel: "apple-touch-icon", url: "/icons/apple-icon-57x57.png", sizes: "57x57" },
    { rel: "apple-touch-icon", url: "/icons/apple-icon-60x60.png", sizes: "60x60" },
    { rel: "apple-touch-icon", url: "/icons/apple-icon-72x72.png", sizes: "72x72" },
    { rel: "apple-touch-icon", url: "/icons/apple-icon-76x76.png", sizes: "76x76" },
    { rel: "apple-touch-icon", url: "/icons/apple-icon-114x114.png", sizes: "114x114" },
    { rel: "apple-touch-icon", url: "/icons/apple-icon-120x120.png", sizes: "120x120" },
    { rel: "apple-touch-icon", url: "/icons/apple-icon-144x144.png", sizes: "144x144" },
    { rel: "apple-touch-icon", url: "/icons/apple-icon-152x152.png", sizes: "152x152" },
    { rel: "apple-touch-icon", url: "/icons/apple-icon-180x180.png", sizes: "180x180" },
    { rel: "icon", url: "/icons/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    { rel: "icon", url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", url: "/icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    { rel: "icon", url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  manifest: "/manifest.json",
};
 
export const viewport: Viewport = {
  themeColor: 'white',
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

config.autoAddCss = false

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}