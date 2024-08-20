'use client';

import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import BottomMenu from '@/components/BottomMenu';
import { SessionProvider } from 'next-auth/react';

const font = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <SessionProvider>
          <Header />
          {children}
          <BottomMenu />
        </SessionProvider>
      </body>
    </html>
  );
}
