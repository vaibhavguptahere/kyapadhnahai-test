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
      <body className="font-poppins antialiased">
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <ScrollProgressBar />
            <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
              {/* Floating gradient blobs */}
              <div className="floating-blob top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10" />
              <div className="floating-blob top-40 right-20 w-80 h-80 bg-gradient-to-r from-secondary/10 to-accent/10" />
              <div className="floating-blob bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-accent/10 to-primary/10" />
              
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
