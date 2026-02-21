import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Siddhant Mishra | Full stack Web and app developer",
  description:
    "Personal portfolio of Siddhant Mishra — Flutter developer, app creator, and tech enthusiast. View projects, experience, and contact details.",
   icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "Siddhant Mishra, Flutter Developer, Mobile App Developer, Portfolio, Resume, Projects, Speed Maths App, Siddhant Mishra Portfolio",
  authors: [{ name: "Siddhant Mishra" }],
  robots: "index, follow",
  metadataBase: new URL("https://siddhantmishra.pages.dev"),
  alternates: {
    canonical: "https://siddhantmishra.pages.dev",
  },
  openGraph: {
    title: "Siddhant Mishra | Flutter Developer & App Creator",
    description:
      "Explore Siddhant Mishra’s portfolio — Flutter developer passionate about building fast, functional, and creative apps.",
    url: "https://siddhantmishra.pages.dev",
    siteName: "Siddhant Mishra Portfolio",
    images: [
      {
        url: "/siddhant_mishra_image.JPG", 
        width: 1200,
        height: 630,
        alt: "Siddhant Mishra Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
