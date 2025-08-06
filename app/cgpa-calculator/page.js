"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle
} from "@/components/ui/card";
import {
    GraduationCap,
    PlusCircle,
    Calculator,
    Sparkles,
    Trophy,
    Target
} from "lucide-react";

export default function CGPACalculator() {
    const [grades, setGrades] = useState([{ credits: "", grade: "" }]);
    const [cgpa, setCgpa] = useState(null);

    const handleInputChange = (index, field, value) => {
        const updatedGrades = [...grades];
        updatedGrades[index][field] = value;
        setGrades(updatedGrades);
    };

    const addRow = () => {
        setGrades([...grades, { credits: "", grade: "" }]);
    };

    const calculateCGPA = () => {
        let totalCredits = 0;
        let weightedSum = 0;

        for (const g of grades) {
            const credits = parseFloat(g.credits);
            const grade = parseFloat(g.grade);
            if (!isNaN(credits) && !isNaN(grade)) {
                totalCredits += credits;
                weightedSum += credits * grade;
            }
        }

        const result = totalCredits === 0 ? null : weightedSum / totalCredits;
        setCgpa(result);
    };

    const getCGPAColor = (cgpa) => {
        if (cgpa >= 9) return 'text-green-600 dark:text-green-400';
        if (cgpa >= 8) return 'text-blue-600 dark:text-blue-400';
        if (cgpa >= 7) return 'text-yellow-600 dark:text-yellow-400';
        return 'text-red-600 dark:text-red-400';
    };

    const getCGPAMessage = (cgpa) => {
        if (cgpa >= 9) return { icon: Trophy, message: 'Outstanding! 🏆' };
        if (cgpa >= 8) return { icon: Target, message: 'Excellent! 🎯' };
        if (cgpa >= 7) return { icon: Sparkles, message: 'Good Job! ✨' };
        return { icon: Target, message: 'Keep Going! 💪' };
    };
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 animate-bounce-gentle">
                    <Sparkles className="h-4 w-4" />
                    <span>Calculate Your Academic Performance</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    CGPA Calculator 🧮
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Enter your semester credits and grades to calculate your CGPA instantly
                </p>
            </div>

            <Card className="glass dark:glass-dark border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-white/10 p-6">
                    <CardTitle className="text-2xl font-bold font-poppins flex items-center gap-3 text-center justify-center">
                        <GraduationCap className="w-6 h-6" /> CGPA Calculator
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 p-6">
                    {grades.map((row, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-2 gap-4 items-center glass dark:glass-dark p-4 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 animate-slide-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <Input
                                type="number"
                                placeholder="Credits"
                                value={row.credits}
                                onChange={(e) =>
                                    handleInputChange(index, "credits", e.target.value)
                                }
                                className="text-sm rounded-xl border-purple-500/20 focus:border-purple-500/50 focus:ring-purple-500/20"
                            />
                            <Input
                                type="number"
                                step="0.1"
                                placeholder="Grade (e.g., 9.5)"
                                value={row.grade}
                                onChange={(e) =>
                                    handleInputChange(index, "grade", e.target.value)
                                }
                                className="text-sm rounded-xl border-purple-500/20 focus:border-purple-500/50 focus:ring-purple-500/20"
                            />
                        </div>
                    ))}

                    <div className="flex justify-between items-center pt-4">
                        <Button
                            onClick={addRow}
                            variant="ghost"
                            className="text-purple-600 hover:text-purple-800 dark:text-purple-300 dark:hover:text-purple-100 flex gap-2 rounded-xl hover:bg-purple-500/10 transition-all duration-200 hover:scale-105"
                        >
                            <PlusCircle className="h-4 w-4" />
                            Add Semester
                        </Button>

                        <Button
                            onClick={calculateCGPA}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 rounded-xl shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300 font-semibold"
                        >
                            <Calculator className="h-4 w-4 mr-2" />
                            Calculate
                        </Button>
                    </div>

                    {cgpa !== null && (
                        <div className="text-center pt-6 space-y-4 animate-slide-up">
                            <div className="text-lg font-medium text-foreground">
                                Your CGPA is:
                            </div>
                            <div className={`text-4xl font-bold font-poppins ${getCGPAColor(cgpa)}`}>
                                {cgpa.toFixed(2)}
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-lg font-medium">
                                {(() => {
                                    const { icon: Icon, message } = getCGPAMessage(cgpa);
                                    return (
                                        <>
                                            <Icon className="h-5 w-5" />
                                            <span className="font-inter">{message}</span>
                                        </>
                                    );
                                })()}
                            </div>
                            <div className="glass dark:glass-dark rounded-xl p-4 max-w-md mx-auto">
                                <div className="text-sm text-muted-foreground space-y-1 font-inter">
                                    <div className="flex justify-between">
                                        <span>Total Credits:</span>
                                        <span className="font-medium">
                                            {grades.reduce((sum, g) => sum + (parseFloat(g.credits) || 0), 0)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Semesters:</span>
                                        <span className="font-medium">{grades.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>

    );
}
