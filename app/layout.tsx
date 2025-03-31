import React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
    </StoreProvider>
    
  );
}
