export const metadata = {
  title: 'Meetmax',
  description: 'A social media platform developed by Masrur Sakib',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
