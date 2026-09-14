import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Warm, grounded psychotherapy for high-achieving adults navigating anxiety, trauma, and burnout in Santa Monica, California and statewide via secure telehealth. Integrating CBT, EMDR, and somatic practices.",
  keywords: [
    "therapist in Santa Monica",
    "therapy in Santa Monica",
    "anxiety therapy in Santa Monica",
    "trauma therapy in Santa Monica",
    "EMDR in Santa Monica",
    "therapy for adults",
    "telehealth therapy in California",
    "Dr. Maya Reynolds",
    "clinical psychologist Santa Monica",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
    description:
      "Warm, grounded psychotherapy for adults navigating anxiety, trauma, and burnout in Santa Monica and statewide via secure telehealth.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable}`}>
      <body className="font-sans antialiased text-[#1F2421] bg-[#FAF8F5] selection:bg-[#C47D63]/20 selection:text-[#1F2421]">
        {children}
      </body>
    </html>
  );
}
