import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "johnkim.vercel.app",
    template: "%s | johnkim.vercel.app",
  },
  description: "Data Scientist at the moment",
  openGraph: {
    title: "chronark.com",
    description:
      "Data Scientist at the moment",
    url: "https://johnkim.vercel.app",
    siteName: "johnkim.vercel.app",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "John Kim",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  // src: "../public/fonts/CalSans-SemiBold.ttf",
  // src: "../public/fonts/Kefago-nROlJ.ttf",
  // src: "../public/fonts/HenjudemoBold-0W15z.otf",
  // src: "../public/fonts/Meloristdemo-mL35P.ttf",
  // src: "../public/fonts/Monerd-Solid.ttf",
  // src: "../public/fonts/NeuePowerTrial-Medium.ttf",
  // src: "../public/fonts/Stanger-Bf65af408ace994.otf",
  // src: "../public/fonts/PyeongChangPeace-Bold.ttf",
  src: "../public/fonts/NanumSquareNeo-bRg.ttf",

  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
