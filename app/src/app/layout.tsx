import type { Metadata } from "next";
// import { Exo_2 } from "next/font/google";
import './globals.css';

// const exo = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven Anongo portfolio",
  description: "A portfolio websit for Steven Anongo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen`}>{children}</body>
    </html>
  );
}
