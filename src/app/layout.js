import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import BottomMenu from '@/components/BottomMenu';

const font = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500'],
});

export const metadata = {
  title: 'Meetmax',
  description: 'A social media platform developed by Masrur Sakib',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Header />
        {children}
        <BottomMenu />
      </body>
    </html>
  );
}
