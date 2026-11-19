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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
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
