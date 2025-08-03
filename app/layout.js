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
      <body className="font-sans">
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <ScrollProgressBar />
            <div className="min-h-screen bg-background relative overflow-hidden">
              {/* Floating gradient blobs */}
              <div className="floating-blob top-20 left-20 w-72 h-72 bg-gradient-to-r from-indigo-400 to-purple-400" />
              <div className="floating-blob top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400" />
              <div className="floating-blob bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400" />
              
              <Header />
              <main className="container mx-auto px-4 py-8 relative z-10">
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
