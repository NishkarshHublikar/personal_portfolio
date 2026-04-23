import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Portfolio | Full Stack Developer",
  description: "A showcase of my work and skills as a Full Stack Developer.",
  openGraph: {
    title: "Personal Portfolio | Full Stack Developer",
    description: "A showcase of my work and skills as a Full Stack Developer.",
    url: 'https://nishkarsh-portfolio.vercel.app',
    siteName: 'Nishkarsh Hublikar Portfolio',
    images: [
      {
        url: 'https://nishkarsh-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Personal Portfolio | Full Stack Developer",
    description: "A showcase of my work and skills as a Full Stack Developer.",
    images: ['https://nishkarsh-portfolio.vercel.app/og-image.png'],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
