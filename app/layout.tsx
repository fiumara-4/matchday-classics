import type { Metadata } from 'next';
import { Playfair_Display, Libre_Franklin } from 'next/font/google';

const serif = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700']
});

const sans = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '500']
});

export const metadata: Metadata = {
  title: 'Matchday Classics',
  description: 'Vintage football posters'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.className} ${sans.className}`}>
        {children}
      </body>
    </html>
  );
}
