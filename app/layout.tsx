import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LoadingAnimation } from "@/components/loading-animation";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${inter.className} bg-background text-foreground`}>
        <LoadingAnimation />
        {children}
      </body>
    </html>
  );
}
