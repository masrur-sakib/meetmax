import { Roboto } from 'next/font/google';
import './globals.css';

const font = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700'],
});

export const metadata = {
  title: 'Meetmax',
  description: 'A social media platform developed by Masrur Sakib',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
