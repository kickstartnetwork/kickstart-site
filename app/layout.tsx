import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kickstart | Project Guidance & Technical Support",
  description: "Structured support for students and tech enthusiasts for personal or professional full-scale technical projects. Get expert guidance for project ideation, development, and execution...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

<head>

        {/* <link rel="icon" href="./favicon.ico" /> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/android-chrome-512x512.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:image" content="https://www.kickstartnetwork.in/community.png" />
        <meta property="og:image:alt" content="Kickstart your Project with us!" />
        <meta name="twitter:image" content="https://www.hairdonations555.org/images/poster.jpg" />
        <meta property="og:title" content="Kickstart Networks" />
        <meta property="og:description" content="Structured support for students and tech enthusiasts for personal or professional full-scale technical projects. Get expert guidance for project ideation, development, and execution...." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:alt" content="Kickstart Networks" />
      </head>

      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
