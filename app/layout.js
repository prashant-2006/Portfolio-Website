// app/layout.js
import '@/app/_styles/global.css';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio website.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className='pt-12'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
