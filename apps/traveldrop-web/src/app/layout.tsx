import '@travel-drop/utils/global.css';
import { Metadata } from 'next';
import { ThemeProvider, Toaster } from '@travel-drop/ui'
import { Inter, Roboto_Mono } from 'next/font/google';

const geistSans = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Welcome to TravelDrop',
  description: 'The ultimate travel companion app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
