"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
    Search,
    Star,
    BookOpen,
    Clock,
    Target,
    Lightbulb,
    Award,
    Users,
    Brain
} from 'lucide-react';
import { tipsData, tipCategories } from '@/data/tips';
export default function TipsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Tips');

    const filteredTips = tipsData.filter(tip => {
        const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tip.content.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'All Tips' || tip.category === selectedCategory;
        return matchesSearch && matchesCategory ;
    });

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Study Techniques': return BookOpen;
            case 'Time Management': return Clock;
            case 'Memory Techniques': return Brain;
            case 'Note Taking': return Target;
            case 'Group Study': return Users;
            case 'Problem Solving': return Lightbulb;
            case 'Motivation': return Star;
            case 'Exam Strategy': return Award;
            default: return BookOpen;
        }
    };
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Extra Tips 💡
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Learn from the experiences of successful seniors who have walked the path before you.
                    Real tips, real results, real success stories.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-background/60 backdrop-blur-sm p-6 rounded-2xl border">
                <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search tips, or topics..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 h-10 bg-background border-0 focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Category Filter */}
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-full sm:w-48 h-10 bg-background border-0">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {tipCategories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                    Showing {filteredTips.length} of {tipsData.length} tips
                </p>
                {selectedCategory !== 'All Tips' && (
                    <Badge variant="outline" className="text-sm">
                        Category: {selectedCategory}
                    </Badge>
                )}
            </div>

            {/* Tips Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
                {filteredTips.map((tip) => {
                    const CategoryIcon = getCategoryIcon(tip.category);
                    return (
                        <Card key={tip.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm overflow-hidden">
                            {/* Tip Header */}
                            <CardHeader className="pb-4">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                                            <CategoryIcon className="h-4 w-4 text-white" />
                                        </div>
                                        <Badge variant="secondary" className="text-xs">
                                            {tip.category}
                                        </Badge>
                                    </div>
                                </div>

                                <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors leading-tight">
                                    {tip.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {/* Tip Content */}
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {tip.content}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {tip.tags.map((tag, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* No Results */}
            {filteredTips.length === 0 && (
                <div className="text-center py-12 space-y-4">
                    <div className="text-6xl">🔍</div>
                    <h3 className="text-2xl font-semibold text-foreground">No tips found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filters</p>
                    <Button
                        onClick={() => {
                            setSearchQuery('');
                            setSelectedCategory('All Tips');
                            setDifficultyFilter('all');
                        }}
                        variant="outline"
                        className="rounded-full"
                    >
                        Clear Filters
                    </Button>
                </div>
            )}
            {/* Disclaimer */}
            <div className="text-center text-sm text-muted-foreground italic px-4 py-2 border rounded-xl bg-background/50">
                ⚠️ Disclaimer: All the above tips are shared by seniors based on their unique scenarios and experiences. Take what helps you, leave what doesn’t — and remember, use them wisely and carefully! 😄
            </div>
        </div>
    );
}