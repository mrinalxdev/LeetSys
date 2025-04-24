'use client';

import { useQuestions } from "@/lib/context";
import { QuestionCard } from "./question-card";
import { motion } from "framer-motion";

export function QuestionsGrid() {
  const { questions, filterByDifficulty, searchTerm } = useQuestions();

  // Filter questions based on selected difficulty levels and search term
  const filteredQuestions = questions.filter((question) => {
    // Check if question difficulty is in the selected filters
    const matchesDifficulty = filterByDifficulty.includes(question.difficulty);

    // Check if search term matches question title or description
    const matchesSearch = searchTerm === '' ||
      question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDifficulty && matchesSearch;
  });

  // Container animation variants
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
    <div className="mt-6">
      {filteredQuestions.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
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
