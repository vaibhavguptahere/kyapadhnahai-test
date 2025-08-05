"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  BookOpen,
  Video,
  ExternalLink,
  ArrowLeft,
  Target,
  Clock,
  Star,
  Lightbulb,
  TrendingUp,
  Download,
  Play,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { subjectsData } from '@/data/subjects';

export default function SubjectPage() {
  const params = useParams();
  const [checkedNotes, setCheckedNotes] = useState(new Set());
  const [checkedVideos, setCheckedVideos] = useState(new Set());

  const subject = subjectsData.find(s => s.id === params.id);

  if (!subject) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">😕</div>
        <h2 className="text-2xl font-bold">Subject not found</h2>
        <Link href="/semesters">
          <Button variant="outline">← Get me Back</Button>
        </Link>
      </div>
    );
  }

  const toggleNoteCheck = (noteTitle) => {
    const newChecked = new Set(checkedNotes);
    if (newChecked.has(noteTitle)) {
      newChecked.delete(noteTitle);
    } else {
      newChecked.add(noteTitle);
    }
    setCheckedNotes(newChecked);
  };

  const toggleVideoCheck = (videoTitle) => {
    const newChecked = new Set(checkedVideos);
    if (newChecked.has(videoTitle)) {
      newChecked.delete(videoTitle);
    } else {
      newChecked.add(videoTitle);
    }
    setCheckedVideos(newChecked);
  };

  const totalNotes = subject.topics.reduce((acc, topic) => acc + topic.notes.length, 0);
  const totalVideos = subject.topics.reduce((acc, topic) => acc + topic.videos.length, 0);
  const completedNotes = checkedNotes.size;
  const completedVideos = checkedVideos.size;
  const overallProgress = ((completedNotes + completedVideos) / (totalNotes + totalVideos)) * 100;

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
      </div>

      {/* Subject Hero */}
      <div className="space-y-6">
        <div className={`h-36 rounded-3xl bg-gradient-to-r ${subject.gradient} flex items-center justify-center`}>
          <div className="text-center text-white">
            <div className="text-6xl mb-2">{subject.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold">{subject.name}</h1>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <Badge className={`${getDifficultyColor(subject.difficulty)} px-4 py-2 text-sm font-semibold`}>
            {subject.difficulty}
          </Badge>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="kitna-padha" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4 rounded-full bg-background/60 backdrop-blur-sm">
          <TabsTrigger value="kitna-padha" className="rounded-full">📚 Study Guide</TabsTrigger>
          <TabsTrigger value="notes" className="rounded-full">📝 Notes</TabsTrigger>
          <TabsTrigger value="videos" className="rounded-full">🎥 Videos</TabsTrigger>
          <TabsTrigger value="resources" className="rounded-full">🔗 Resources</TabsTrigger>
        </TabsList>

        {/* Kitna Padhna Hai Section */}
        <TabsContent value="kitna-padha" className="space-y-6">
          <Card className="border-0 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6" />
                Kitna Padhna Hai Aur Kya Important Hai 🤔
              </CardTitle>
              <CardDescription className="text-base">
                Senior's honest advice on how much effort you need and what to focus on
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">

              {/* Study Tips */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <span className="font-poppins">Pro Tips from a Senior</span>
                </h3>
                <div className="grid gap-3">
                  {subject.kitnaParhaHai.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 bg-background/80 rounded-lg p-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-foreground leading-relaxed font-inter">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notes Section */}
        <TabsContent value="notes" className="space-y-6">
          <div className="space-y-6">
            {subject.topics.map((topic, topicIndex) => (
              <Card key={topicIndex} className="border-0 bg-background/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{topic.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topic.notes.map((note, noteIndex) => (
                      <div key={noteIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => toggleNoteCheck(note.title)}
                          >
                            <CheckCircle2
                              className={`h-4 w-4 ${checkedNotes.has(note.title) ? 'text-green-600' : 'text-muted-foreground'}`}
                            />
                          </Button>
                          <div>
                            <div className={`font-medium ${checkedNotes.has(note.title) ? 'line-through text-muted-foreground' : ''}`}>
                              {note.title}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase font-inter">
                              {note.type}
                            </div>
                          </div>
                        </div>
                        <Link href={note.url} target='blank'>
                          <Button size="sm" variant="outline" className="rounded-full">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Videos Section */}
        <TabsContent value="videos" className="space-y-6">
          <div className="space-y-6">
            {subject.topics.map((topic, topicIndex) => (
              <Card key={topicIndex} className="border-0 bg-background/60 backdrop-blur-sm">
                <CardHeader>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topic.videos.map((video, videoIndex) => (
                      <div key={videoIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                            onClick={() => toggleVideoCheck(video.title)}
                          >
                            <CheckCircle2
                              className={`h-4 w-4 ${checkedVideos.has(video.title) ? 'text-green-600' : 'text-muted-foreground'}`}
                            />
                          </Button>
                          <div>
                            <div className={`font-medium ${checkedVideos.has(video.title) ? 'line-through text-muted-foreground' : ''}`}>
                              {video.title}
                            </div>
                            <div className="text-xs text-muted-foreground font-inter">
                              {video.platform}
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="rounded-full" asChild>
                          <a href={video.url} target="_blank" rel="noopener noreferrer">
                            <Play className="h-3 w-3 mr-1" />
                            Watch
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Resources Section */}
        <TabsContent value="resources" className="space-y-6">
          <Card className="border-0 bg-background/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Additional Resources
              </CardTitle>
              <CardDescription>
                Helpful external links and references for deeper learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {subject.resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="font-medium font-inter">{resource.title}</div>
                        <div className="text-xs text-muted-foreground uppercase font-inter">
                          {resource.type}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-full" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visit Site
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="text-center text-sm text-muted-foreground italic px-4 py-2 border rounded-xl bg-background/50 font-inter">
        ⚠️ Disclaimer: All the notes and resources shared here are provided by me to the best of my knowledge, with the aim of helping you score well. Use them wisely, adapt them to your needs, and study smart! 📚✨
      </div>
    </div>
  );
}