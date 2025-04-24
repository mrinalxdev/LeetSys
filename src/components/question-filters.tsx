'use client';

import type React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuestions } from "@/lib/context";
import { Search } from "lucide-react";

export function QuestionFilters() {
  const {
    filterByDifficulty,
    setFilterByDifficulty,
    searchTerm,
    setSearchTerm,
    questions
  } = useQuestions();

  const difficultyOptions = [
    { id: 'easy', label: 'Easy', color: 'bg-green-500' },
    { id: 'medium', label: 'Medium', color: 'bg-amber-500' },
    { id: 'hard', label: 'Hard', color: 'bg-red-500' },
  ];

  const toggleDifficultyFilter = (difficulty: string) => {
    if (filterByDifficulty.includes(difficulty)) {
      // Remove difficulty if it's already in filters
      setFilterByDifficulty(filterByDifficulty.filter(d => d !== difficulty));
    } else {
      // Add difficulty if it's not already in filters
      setFilterByDifficulty([...filterByDifficulty, difficulty]);
    }
  };

  // Calculate counts for each difficulty level
  const difficultyCounts = {
    easy: questions.filter(q => q.difficulty === 'easy').length,
    medium: questions.filter(q => q.difficulty === 'medium').length,
    hard: questions.filter(q => q.difficulty === 'hard').length,
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    // <div className="space-y-4">
    //   <div className="flex flex-col sm:flex-row gap-3">
    //     <div className="relative flex-1">
    //       <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    //       <Input
    //         type="text"
    //         placeholder="Search questions..."
    //         className="pl-8"
    //         value={searchTerm}
    //         onChange={handleSearchChange}
    //       />
    //     </div>
    //     <div className="flex gap-2">
    //       {difficultyOptions.map((option) => {
    //         const isSelected = filterByDifficulty.includes(option.id);
    //         const badgeClass = isSelected
    //           ? "ml-1 text-xs"
    //           : `ml-1 text-xs ${option.color} text-white`;

    //         return (
    //           <Button
    //             key={option.id}
    //             variant={isSelected ? "default" : "outline"}
    //             onClick={() => toggleDifficultyFilter(option.id)}
    //             className="relative"
    //           >
    //             {option.label}
    //             <Badge variant="secondary" className={badgeClass}>
    //               {difficultyCounts[option.id as keyof typeof difficultyCounts]}
    //             </Badge>
    //           </Button>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className="space-y-4">
      <h3 className="font-medium">Filter by Difficulty</h3>
      <div className="space-y-2">
        {difficultyOptions.map((option) => {
          const isSelected = filterByDifficulty.includes(option.id);
          return (
            <Button
              key={option.id}
              variant={isSelected ? "default" : "outline"}
              onClick={() => toggleDifficultyFilter(option.id)}
              className="w-full justify-between"
            >
              <span>{option.label}</span>
              <Badge variant="secondary">
                {difficultyCounts[option.id as keyof typeof difficultyCounts]}
              </Badge>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
