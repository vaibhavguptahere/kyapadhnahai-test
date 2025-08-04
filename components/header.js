"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Moon,
  Sun,
  Menu,
  X,
  FileQuestionIcon,
  Users,
  PlayCircle,
  BookOpenCheck,
  Computer,
  Brain,
} from 'lucide-react';

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Resources', href: '/semesters', icon: BookOpenCheck },
    { name: 'Sem-1', href: '/semester/semester-1', icon: PlayCircle },
    { name: 'Sem-2', href: '/semester/semester-2', icon: BookOpen },
    { name: 'Tips', href: '/tips', icon: Users },
    { name: 'DSA', href: '/resources/dsa', icon: Brain },
    { name: 'Web Dev', href: 'resources/web-development', icon: Computer },
  ];

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';
  const headerClass = isDark ? 'header-dark' : 'header-light';
  const navLinkClass = isDark ? 'nav-link-dark' : 'nav-link-light';


  return (
    <header className={`sticky top-0 z-50 w-full ${headerClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-700 group-hover:to-purple-700 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-105">
              <FileQuestionIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-poppins bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              KyaPadhnahai?
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium ${navLinkClass} group`}
                >
                  <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform" />
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
              className="h-9 w-9 p-0 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 hover:scale-105"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-9 w-9 p-0 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 hover:scale-105"
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
          <div className="md:hidden py-4 border-t border-black/10 dark:border-white/10 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 py-3 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
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