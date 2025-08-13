import type { Metadata } from "next";
import "./globals.css";
import { Fredoka, Comfortaa } from "next/font/google";
import { Toaster } from "sonner";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eternal Clover Studio",
    template: "%s | Eternal Clover Studio"
  },
  description: "Eternal Clover Studio is an independent game development studio based in Indonesia, transforming ideas into exciting experience",
  keywords: [
    "game development",
    "indie games",
    "Eternal Clover Studio",
    "game studio Indonesia"
  ],
  icons: {
    icon: "/logo-no-bg.svg",
  },
  openGraph: {
    title: "Eternal Clover Studio",
    description: "An indie game studio from Indonesia, turning ideas into exciting experiences",
    url: `${process.env.SITE_URL}`,
    siteName: "Eternal Clover Studio",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark ${fredoka.variable} ${comfortaa.variable} antialiased`}
      >
        {children}
         <Toaster richColors theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
