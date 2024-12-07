import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const oakSans = localFont({
  src: [
    {
      path: '/fonts/oak-sans/OakSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/oak-sans/OakSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/oak-sans/OakSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/oak-sans/OakSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/oak-sans/OakSans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-oak-sans',
});

export const metadata: Metadata = {
  title: "Anubis Bot",
  description: "Anubis transforms the way traders interact with DeFi markets, focusing on a cohesive, high-speed trading experience that keeps research and execution in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oakSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
