"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Moon,
  Sun,
  Menu,
  X,
  GraduationCap,
  Users,
  PlayCircle,
  BookOpenCheck,
  Computer,
  Brain,
  Calculator,
} from 'lucide-react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Resources', href: '/semesters', icon: BookOpenCheck },
    { name: 'Sem-1', href: '/semester/semester-1', icon: PlayCircle },
    { name: 'Sem-2', href: '/semester/semester-2', icon: BookOpen },
    { name: 'Tips', href: '/tips', icon: Users },
    { name: 'DSA', href: '/resources/dsa', icon: Brain },
    { name: 'Web Dev', href: '/resources/web-development', icon: Computer },
    { name: 'CGPA Calc', href: '/cgpa-calculator', icon: Calculator },
  ];

  return (
    <header className="sticky top-0 z-50 w-full header-bg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group focus-ring rounded-lg px-2 py-1">
            <div className="p-2 rounded-lg bg-primary text-primary-foreground group-hover:bg-primary/90 transition-colors duration-200">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold text-foreground">
              KyaPadhnaHai?
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 focus-ring"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-9 w-9 p-0 rounded-lg hover:bg-accent transition-colors duration-200 focus-ring"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-9 w-9 p-0 rounded-lg hover:bg-accent transition-colors duration-200 focus-ring"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-2">
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-3 rounded-lg hover:bg-accent focus-ring"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}