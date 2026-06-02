import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VarkalaVerse – The Ultimate Varkala Travel Guide",
  description:
    "Your AI-powered luxury travel companion for Varkala, Kerala. Discover beaches, hidden gems, hotels, restaurants, itineraries, and more. Plan your perfect Varkala trip.",
  keywords:
    "Varkala, Kerala travel, Varkala beach, Varkala hotels, Varkala restaurants, Varkala hidden gems, Kerala tourism, travel guide, AI itinerary",
  openGraph: {
    title: "VarkalaVerse – The Ultimate Varkala Travel Guide",
    description: "AI-powered luxury travel companion for Varkala, Kerala",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="aurora-bg" />
        {children}
      </body>
    </html>
  );
}
