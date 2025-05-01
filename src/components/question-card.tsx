'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Question } from "@/data/questions";
import { useQuestions } from "@/lib/context";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import { Bookmark, Clock, Zap } from 'lucide-react';

export function QuestionCard({ question }: { question: Question }) {
  const { setActiveQuestion } = useQuestions();
  const [isHovered, setIsHovered] = useState(false);

  const difficultyColor = {
    'easy': 'bg-green-500/20 text-green-500 border-green-500',
    'medium': 'bg-amber-500/20 text-amber-500 border-amber-500',
    'hard': 'bg-red-500/20 text-red-500 border-red-500',
  }[question.difficulty] || 'bg-gray-500/20 text-gray-500 border-gray-500';

  const difficultyIconColor = {
    'easy': 'text-green-500',
    'medium': 'text-amber-500',
    'hard': 'text-red-500',
  }[question.difficulty] || 'text-gray-500';

  const handleClick = () => {
    setActiveQuestion(question);
  };

  return (
    <motion.div
      // whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
    >
      <Card className={cn(
        "h-full transition-all duration-300 relative overflow-hidden",
        "hover:shadow-lg hover:shadow-primary/10",
        "group"
      )}>
        {/* Glow effect */}
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"
          />
        )}
        
        {/* Difficulty indicator */}
        <div className={cn(
          "absolute top-0 left-0 h-full w-1",
          difficultyColor
        )} />
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-white transition-colors">
              {question.title}
            </CardTitle>
            <Badge variant="outline" className={cn(
              "flex items-center gap-1",
              difficultyColor
            )}>
              <Zap className={`h-3 w-3 ${difficultyIconColor}`} />
              {question.difficulty}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="pb-2">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
            {question.description}
          </p>
          
          <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
            <div className="flex items-center gap-2">
              <Bookmark className="h-3 w-3" />
              <span>Subtopics: {question.subtopics.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3" />
              <span>Attempts: {question.attempts}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter>
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{question.progress}%</span>
            </div>
            <Progress 
              value={question.progress} 
              className="h-2 group-hover:h-[6px] transition-all"
              indicatorclassname={cn(
                "transition-all duration-500",
                question.difficulty === 'easy' ? 'bg-green-500' :
                question.difficulty === 'medium' ? 'bg-amber-500' :
                'bg-red-500'
              )}
            />
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}