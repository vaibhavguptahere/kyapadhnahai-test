"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  BookOpen,
  Video,
  ExternalLink,
  Search,
  Star,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  Lightbulb,
  Clock,
  Award,
  GraduationCap,
  Calculator,
  Zap,
  Code,
  Atom,
  Brain,
  FileText,
  Trophy,
  Sparkles,
  Play,
  Download,
  BookMarked,
} from 'lucide-react';
import { semesterData } from '@/data/subjects';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Subject icons mapping
  const subjectIcons = {
    'Calculus': Calculator,
    'physics-1': Zap,
    'lifeskills': Brain,
    'python': Code,
    'mathematics': Calculator,
    'physics-2': Atom,
    'data-structures': Code,
    'evs': Lightbulb,
    'dd': Zap,
    'dms': Brain,
  };

  const features = [
    {
      icon: Target,
      title: 'Semester-wise Organization',
      description: 'Content organized by semesters to match your academic progression',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0ms'
    },
    {
      icon: Lightbulb,
      title: 'Senior Insights',
      description: 'Get tips and tricks from seniors who has been there',
      gradient: 'from-purple-500 to-pink-500',
      delay: '100ms'
    },
    {
      icon: Clock,
      title: 'Time Efficient',
      description: 'Save time with curated resources and prioritized content',
      gradient: 'from-green-500 to-teal-500',
      delay: '200ms'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-20 relative">
        <div className="space-y-6 animate-fade-in">

          <h1 className="text-5xl md:text-7xl font-bold font-poppins bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent leading-tight">
            YOUR ACADEMIC JOURNEY
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold font-poppins text-foreground">
            MADE SIMPLE
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Curated resources, study tips, and guidance from successful seniors.
            <br />
            <span className="text-lg opacity-80">Learn smarter, not harder with our comprehensive study materials.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '200ms' }}>
          <Link href="/semesters">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-4 rounded-2xl text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 group">
              Explore Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/cgpa-calculator">
            <Button size="lg" variant="outline" className="glass dark:glass-dark border-purple-500/30 hover:border-purple-500/50 font-semibold px-10 py-4 rounded-2xl text-lg hover:scale-105 transition-all duration-300 group">
              <Calculator className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              CGPA Calculator
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
            Why Choose Us? 🤔
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the struggles of being a fresher. Here's how we make your journey easier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-card-hover transition-all duration-500 border-0 glass dark:glass-dark overflow-hidden hover:scale-105 animate-slide-up"
              style={{ animationDelay: feature.delay }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Semesters Preview */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
              Browse by Semester 📅
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Choose your current semester and start learning
            </p>
          </div>
          <Link href="/semesters">
            <Button variant="outline" className="rounded-2xl glass dark:glass-dark border-purple-500/30 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {semesterData.map((semester, index) => (
            <Card
              key={semester.id}
              className="group hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 border-0 glass dark:glass-dark overflow-hidden hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{semester.emoji}</div>
                  <CardTitle className="text-lg font-semibold font-poppins group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {semester.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-3">
                    {semester.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-center space-x-2 mb-4">
                  <Badge variant="secondary" className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
                    {semester.subjects.length} Subjects
                  </Badge>
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform" title="Resources">
                      <BookMarked className="h-3 w-3 text-blue-600" />
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform" title="Playlists">
                      <Play className="h-3 w-3 text-green-600" />
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform" title="PYQs">
                      <Download className="h-3 w-3 text-orange-600" />
                    </div>
                  </div>
                </div>
                <Link href={`/semester/${semester.id}`}>
                  <Button className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-glow hover:shadow-glow-lg group-hover:scale-105 transition-all duration-300">
                    Explore Semester
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
            Popular Subjects 🔥
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to the most important subjects with comprehensive resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesterData.slice(0, 2).map((semester) =>
            semester.subjects.slice(0, 3).map((subject, index) => {
              const IconComponent = subjectIcons[subject.id] || BookOpen;
              return (
                <Card
                  key={subject.id}
                  className="group hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 border-0 glass dark:glass-dark overflow-hidden hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${subject.gradient}`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${subject.gradient} shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center" title="Resources">
                          <BookMarked className="h-3 w-3 text-blue-600" />
                        </div>
                        <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center" title="Videos">
                          <Play className="h-3 w-3 text-green-600" />
                        </div>
                        <div className="w-6 h-6 rounded-lg bg-orange-500/20 flex items-center justify-center" title="PYQs">
                          <Download className="h-3 w-3 text-orange-600" />
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold font-poppins group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                      {subject.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {subject.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
                        {subject.difficulty}
                      </Badge>
                      {subject.trending && (
                        <div className="flex items-center space-x-1 text-orange-500">
                          <TrendingUp className="h-3 w-3" />
                          <span className="text-xs font-medium">Trending</span>
                        </div>
                      )}
                    </div>
                    <Link href={`/subject/${subject.id}`}>
                      <Button className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-glow hover:shadow-glow-lg group-hover:scale-105 transition-all duration-300">
                        Start Learning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </section>
    </div>

  );
}