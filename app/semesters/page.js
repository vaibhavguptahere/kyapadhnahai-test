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
  Search,
  ArrowRight,
  Clock,
  Target,
  GraduationCap,
  Captions,
  TrendingUp,
  ReceiptIndianRupee,
  Calculator,
  BookMarked,
  Play,
  Download,
  Sparkles
} from 'lucide-react';
import { semesterData } from '@/data/subjects';

export default function SemestersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSemesters = semesterData.filter(semester =>
    semester.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    semester.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    semester.subjects.some(subject =>
      subject.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 animate-bounce-gentle mb-4">
          <Sparkles className="h-4 w-4" />
          <span>Comprehensive Study Resources</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Browse by Semester 📅
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose your current semester and access all the subjects and resources you need
        </p>
      </div>

      {/* Semesters Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredSemesters.map((semester) => (
          <Card key={semester.id} className="group hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 border-0 glass dark:glass-dark overflow-hidden hover:scale-105 animate-slide-up">
            {/* Semester Header */}
            <CardHeader className="pb-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5 border-b border-white/10">
              <div className="text-center space-y-2">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{semester.emoji}</div>
                <CardTitle className="text-2xl font-bold font-poppins group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {semester.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {semester.description}
                </CardDescription>
                <Badge variant="secondary" className="mt-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
                  {semester.subjects.length} Subjects
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex justify-center space-x-4 py-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <BookMarked className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Resources</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Playlists</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Download className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">PYQs</span>
                </div>
              </div>

              {/* Subject Preview */}
              <div className="space-y-2">
                <h4 className="font-semibold font-poppins text-sm text-muted-foreground uppercase tracking-wide">
                  Subjects in this semester:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {semester.subjects.slice(0, 4).map((subject) => (
                    <div key={subject.id} className="flex items-center justify-between p-3 glass dark:glass-dark rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 group/subject">
                      <div className="flex items-center gap-2">
                        <span className="text-lg group-hover/subject:scale-110 transition-transform">{subject.emoji}</span>
                        <span className="text-sm font-medium group-hover/subject:text-purple-600 dark:group-hover/subject:text-purple-400 transition-colors">{subject.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
                          {subject.difficulty}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  {semester.subjects.length > 4 && (
                    <div className="text-center text-sm text-muted-foreground py-2 font-medium">
                      +{semester.subjects.length - 4} more subjects
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <Link href={`/semester/${semester.id}`}>
                <Button className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-glow hover:shadow-glow-lg group-hover:scale-105 transition-all duration-300">
                  Explore {semester.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredSemesters.length === 0 && (
        <div className="text-center py-12 space-y-4">
          <div className="text-6xl">🔍</div>
          <h3 className="text-2xl font-semibold font-poppins text-foreground">No semesters found</h3>
          <p className="text-muted-foreground">Try adjusting your search query</p>
          <Button
            onClick={() => setSearchQuery('')}
            variant="outline"
            className="rounded-2xl glass dark:glass-dark border-purple-500/30 hover:border-purple-500/50"
          >
            Clear Search
          </Button>
        </div>
      )}

      {/* Other Resources Column */}
      <div className="space-y-6">
        <div className="rounded-2xl p-6 glass dark:glass-dark border border-purple-500/20 hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-bold font-poppins text-center mb-4 text-purple-800 dark:text-purple-200">
            📚 Other Resources
          </h2>
          <p className="text-sm text-center text-purple-700 dark:text-purple-300 mb-6">
            Quick access to syllabus, calendar, and key academic info.
          </p>

          <ul className="space-y-3">
            <li>
              <Link
                href="https://drive.google.com/file/d/1XikF2fuyvXvt627ardxAT9_IKETNtShA/view?usp=sharing" target='blank'
                className="flex items-center gap-3 glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all px-4 py-3 rounded-xl text-purple-800 dark:text-white group hover:scale-105"
              >
                <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Syllabus</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://drive.google.com/file/d/1V0Ux4cNT2N0-NauSVtwvaXVqcq1Coj5L/view?usp=drive_link" target='blank'
                className="flex items-center gap-3 glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all px-4 py-3 rounded-xl text-purple-800 dark:text-white group hover:scale-105"
              >
                <Clock className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Academic Calendar</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://fee-payments.bennett.edu.in/" target='blank'
                className="flex items-center gap-3 glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all px-4 py-3 rounded-xl text-purple-800 dark:text-white group hover:scale-105"
              >
                <ReceiptIndianRupee className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Official Fee Website</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.bennett.edu.in/" target='blank'
                className="flex items-center gap-3 glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all px-4 py-3 rounded-xl text-purple-800 dark:text-white group hover:scale-105"
              >
                <GraduationCap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Bennett Official Website</span>
              </Link>
            </li>
            <li>
              <Link
                href="/cgpa-calculator"
                className="flex items-center gap-3 glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all px-4 py-3 rounded-xl text-purple-800 dark:text-white group hover:scale-105"
              >
                <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">CGPA Calculator</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://onedrive.live.com/?authkey=%21AL7D4UGKHQa%2DUyg&id=16E1A3480CFEA7CF%21561&cid=16E1A3480CFEA7CF" target='blank'
                className="flex items-center gap-3 glass dark:glass-dark hover:bg-white/20 dark:hover:bg-white/10 transition-all px-4 py-3 rounded-xl text-purple-800 dark:text-white group hover:scale-105"
              >
                <GraduationCap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">PYQ's by Full Stack Club</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm text-muted-foreground text-center font-medium">
          More resources will be added soon ✨
        </div>
      </div>
    </div>
  );
}