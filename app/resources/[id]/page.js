"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  ExternalLink,
  Play,
  FileText,
  PenTool,
  Star,
  Clock,
  Users,
} from 'lucide-react';
import { resourcesData } from '@/data/resources';

export default function ResourcePage() {
  const params = useParams();
  const resource = resourcesData.find(r => r.id === params.id);

  if (!resource) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">😕</div>
        <h2 className="text-2xl font-bold">Resource not found</h2>
        <Link href="/">
          <Button variant="outline">← Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Resource Hero */}
      <div className="space-y-6">
        <div className={`h-32 rounded-3xl bg-gradient-to-r ${resource.gradient} flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="text-center text-white relative z-10">
            <div className="text-6xl mb-2">{resource.image}</div>
            <h1 className="text-3xl md:text-4xl font-bold">{resource.title}</h1>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {resource.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {tag}
            </Badge>
          ))}
        </div>
        
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          {resource.description}
        </p>
      </div>

      {/* Resource Tabs */}
      <Tabs defaultValue="playlists" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3 rounded-2xl glass dark:glass-dark">
          <TabsTrigger value="playlists" className="rounded-xl">
            <Play className="h-4 w-4 mr-2" />
            Playlists
          </TabsTrigger>
          <TabsTrigger value="notes" className="rounded-xl">
            <FileText className="h-4 w-4 mr-2" />
            Notes
          </TabsTrigger>
          <TabsTrigger value="practice" className="rounded-xl">
            <PenTool className="h-4 w-4 mr-2" />
            Practice
          </TabsTrigger>
        </TabsList>

        {/* Playlists Tab */}
        <TabsContent value="playlists" className="space-y-6">
          <div className="grid gap-6">
            {resource.resources.playlists.map((playlist, index) => (
              <Card key={index} className="glass dark:glass-dark border-0 hover:shadow-card-hover transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {playlist.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{playlist.provider}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>4.8</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-neon">
                      <a href={playlist.url} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4 mr-2" />
                        Watch
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{playlist.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Notes Tab */}
        <TabsContent value="notes" className="space-y-6">
          <div className="grid gap-6">
            {resource.resources.notes.map((note, index) => (
              <Card key={index} className="glass dark:glass-dark border-0 hover:shadow-card-hover transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {note.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {note.type}
                        </Badge>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="rounded-xl hover:bg-accent">
                      <a href={note.url} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{note.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Practice Tab */}
        <TabsContent value="practice" className="space-y-6">
          <div className="grid gap-6">
            {resource.resources.practice.map((practice, index) => (
              <Card key={index} className="glass dark:glass-dark border-0 hover:shadow-card-hover transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {practice.title}
                      </CardTitle>
                    </div>
                    <Button asChild className="rounded-xl bg-gradient-to-r from-green-500 to-teal-500 hover:shadow-neon">
                      <a href={practice.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Practice
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{practice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}