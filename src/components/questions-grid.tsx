'use client';

import { useQuestions } from "@/lib/context";
import { QuestionCard } from "./question-card";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { NotificationButton } from "./notification-button";

export function QuestionsGrid() {
  const { questions, filterByDifficulty, searchTerm, setSearchTerm } = useQuestions();

  const filteredQuestions = questions.filter((question) => {
    const matchesDifficulty = filterByDifficulty.includes(question.difficulty);
    const matchesSearch = searchTerm === '' ||
      question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDifficulty && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search questions..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <NotificationButton />
      </div>

      {filteredQuestions.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12">
          <p className="text-xl font-semibold mb-2">No matching questions found</p>
          <p className="text-muted-foreground text-center">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
