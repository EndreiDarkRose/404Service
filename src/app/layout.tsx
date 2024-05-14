import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Center from "@/components/center/Center";
import Info from "@/components/info/Info";
import styles from "./layout.module.scss";
import { StoreProvider } from "@/redux/StoreProvide";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "404 Service",
  description: "Сервисный центр в Чите",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main className={styles.main}>
          <Header />
          <Center />
          <StoreProvider>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </StoreProvider>
          <Info />
        </main>
      </body>
    </html>
  );
}
