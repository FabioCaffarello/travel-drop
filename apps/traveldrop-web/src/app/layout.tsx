import '@travel-drop/utils/global.css';
import { Metadata } from 'next';
import { ThemeProvider, Toaster } from '@travel-drop/ui'

// Use system fonts as fallback for offline environments
const geistSans = {
  variable: '--font-geist-sans',
  className: 'font-sans',
};

const geistMono = {
  variable: '--font-geist-mono',
  className: 'font-mono',
};

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
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
