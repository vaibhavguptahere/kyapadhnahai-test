import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from "@vercel/analytics/next";
import LenisProvider from '@/components/lenisprovider';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Footer from '@/components/footer';

export const metadata = {
  title: 'KyaPadhnaHai?',
  description: 'Curated academic resources, notes, and study tips for freshers. Make your learning journey efficient and stress-free.',
  icons: {
    icon: "/lib.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <ScrollProgressBar />
            <div className="min-h-screen bg-background">
              <Header />
              <main className="container mx-auto px-4 py-8">
                {children}
              </main>
            </div>
            <Footer />
            <Toaster />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}