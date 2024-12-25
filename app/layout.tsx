import type { Metadata } from 'next';
import './globals.css';
import { outfit } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Cross Logger',
  description: 'Cross Logger description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};
