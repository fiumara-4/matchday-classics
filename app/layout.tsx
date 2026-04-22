import type { Metadata } from "next";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Matchday Classics",
  description: "Vintage football posters generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={oswald.className}
        style={{
          margin: 0,
          background: "#d6d1c4", // sfondo carta
        }}
      >
        {children}
      </body>
    </html>
  );
}
