"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  BookOpen,
  Video,
  ArrowLeft,
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  Clock
} from 'lucide-react';
import { semesterData } from '@/data/subjects';
import { ReactLenis, useLenis } from 'lenis/react'

export default function SemesterPage() {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  const semester = semesterData.find(s => s.id === params.id);

  if (!semester) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">😕</div>
        <h2 className="text-2xl font-bold">Semester not found</h2>
        <Link href="/semesters">
          <Button variant="outline">← Get me Back</Button>
        </Link>
      </div>
    );
  }

  const filteredSubjects = semester.subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/semesters">
          <Button variant="ghost" size="sm" className="rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Semesters
          </Button>
        </Link>
      </div>

      {/* Semester Hero */}
      <div className="space-y-6">
        <div className="text-center space-y-4 py-12 rounded-3xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
          <div className="text-6xl mb-4">{semester.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {semester.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            {semester.description}
          </p>
          <Badge variant="secondary" className="text-base px-4 py-2">
            {semester.subjects.length} Subjects Available
          </Badge>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground font-poppins">
            Subjects in {semester.name}
          </h2>
          <p className="text-muted-foreground font-inter">
            {filteredSubjects.length} of {semester.subjects.length} subjects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSubjects.map((subject) => (
            <Card key={subject.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm overflow-hidden">
              <div className={`h-3 bg-gradient-to-r ${subject.gradient}`} />

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-3xl mb-2">{subject.emoji}</div>
                  <div className="flex gap-2">
                    <Badge className={getDifficultyColor(subject.difficulty)}>
                      {subject.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                  {subject.name}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed font-inter">
                  {subject.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">

                {/* Action Button */}
                <Link href={`/subject/${subject.id}`}>
                  <Button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold group-hover:scale-105 transition-transform">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* No Results */}
      {filteredSubjects.length === 0 && (
        <div className="text-center py-12 space-y-4">
          <div className="text-6xl">🔍</div>
          <h3 className="text-2xl font-semibold text-foreground font-poppins">No subjects found</h3>
          <p className="text-muted-foreground font-inter">Try adjusting your search query</p>
          <Button
            onClick={() => setSearchQuery('')}
            variant="outline"
            className="rounded-full"
          >
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}