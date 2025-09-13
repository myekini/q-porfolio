import type { Metadata } from "next";
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
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans bg-background text-foreground`}>
        <LoadingAnimation />
        {children}
      </body>
    </html>
  );
}
