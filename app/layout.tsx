import type { Metadata } from "next";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";
import Header from '@components/Header';
import Footer from '@components/Footer';

config.autoAddCss = false

export const metadata: Metadata = {
  title: "PickMe | for training",
  description: "Info for all trainer and who need training",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}