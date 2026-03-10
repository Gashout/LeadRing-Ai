import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeadRing | AI That Follows Up Your Leads in Seconds",
  description: "LeadRing automatically calls every lead the moment they fill your form — 24/7, no staff needed, works with any website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#050d1a] font-sans">
        {children}
      </body>
    </html>
  );
}
