'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Question } from "@/data/questions";
import { useQuestions } from "@/lib/context";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

type QuestionCardProps = {
  question: Question;
};

export function QuestionCard({ question }: QuestionCardProps) {
  const { setActiveQuestion } = useQuestions();
  const [isHovered, setIsHovered] = useState(false);

  const difficultyColor = {
    'easy': 'bg-green-500',
    'medium': 'bg-amber-500',
    'hard': 'bg-red-500',
  }[question.difficulty] || 'bg-gray-500';

  const handleClick = () => {
    setActiveQuestion(question);
  };

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ 
        y: -2,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "cursor-pointer transition-all duration-200 ease-in-out",
        "hover:shadow-lg hover:shadow-primary/10",
        "border-l-4", // Difficulty border
        question.difficulty === 'easy' ? 'border-green-500 rounded-xl' :
        question.difficulty === 'medium' ? 'border-amber-500 rounded-xl' :
        'border-red-500 rounded-xl'
      )}
    >
      <Card className={`h-full transition-shadow duration-200 ${isHovered ? 'shadow-lg' : 'shadow'}`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-semibold line-clamp-2">{question.title}</CardTitle>
            <Badge variant="outline" className={`ml-2 text-white ${difficultyColor}`}>
              {question.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-2">
            {question.description}
          </p>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Subtopics: {question.subtopics.length}</span>
            <span>Attempts: {question.attempts}</span>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span>Progress</span>
              <span>{question.progress}%</span>
            </div>
            <Progress value={question.progress} className="h-2" />
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
