"use client";
import '@travel-drop/utils/global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, Toaster } from '@travel-drop/ui';
import { Inter, Roboto_Mono } from 'next/font/google';
import { useState } from 'react';

const geistSans = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="bottom-right" richColors />
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
