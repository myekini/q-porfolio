import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LoadingAnimation } from "@/components/loading-animation";

export const metadata: Metadata = {
  title: "Ayomide - Product Designer",
  description:
    "Product Designer passionate about creating meaningful digital experiences. Specializing in user-centered design, bringing ideas to life through thoughtful interfaces and seamless interactions.",
  keywords: [
    "Product Design",
    "UX Design",
    "UI Design",
    "User Experience",
    "Interface Design",
  ],
  authors: [{ name: "Ayomide" }],
  openGraph: {
    title: "Ayomide - Product Designer",
    description:
      "Product Designer passionate about creating meaningful digital experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <link
          rel="preload"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap"
          as="style"
          onLoad={(e) => {
            const link = e.target as HTMLLinkElement;
            link.onload = null;
            link.rel = 'stylesheet';
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap"
          />
        </noscript>
      </head>
      <body className={`font-sans bg-background text-foreground`}>
        <LoadingAnimation />
        {children}
      </body>
    </html>
  );
}
