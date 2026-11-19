import type { Metadata, Viewport } from "next";
import { Poppins, Gilda_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});
const gilda = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gilda",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Boomiga S | Brand & UI/UX Designer",
  description:
    "Portfolio of Boomiga S — a UI/UX and brand designer based in Madurai, passionate about creating seamless digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <Script
          id="scroll-reset"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
                window.addEventListener('beforeunload', function() {
                  window.scrollTo(0, 0);
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${gilda.variable} font-sans bg-[#05070e] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
