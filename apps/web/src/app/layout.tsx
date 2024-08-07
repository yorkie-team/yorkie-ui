import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@yorkie-ui/core/dist/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yorkie-UI',
  description: 'Create ui components with Yorkie',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
