'use client';

import type React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { type Question, type Language, questions, calculateProgress } from '@/data/questions';

type QuestionContextType = {
  questions: Question[];
  activeQuestion: Question | null;
  setActiveQuestion: (question: Question | null) => void;
  updateSubtopicCompletion: (questionId: string, subtopicId: string, completed: boolean) => void;
  updateQuestionAttempt: (questionId: string, language: Language) => void;
  filterByDifficulty: string[];
  setFilterByDifficulty: (filters: string[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statistics: {
    easyCompleted: number;
    mediumCompleted: number;
    hardCompleted: number;
    totalAttempts: number;
    languageDistribution: Record<Language, number>;
  };
  seenNotifications : string[];
  markNotificationsAsSeen : (id : string[]) => void;
};

const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export function QuestionProvider({ children }: { children: React.ReactNode }) {
  const [questionsState, setQuestionsState] = useState<Question[]>(() => {
  const savedQuestions = localStorage.getItem('systemDesignQuestions');
  if (savedQuestions) {
    try {
      const parsed = JSON.parse(savedQuestions);
      return questions.map(q => {
        const savedQuestion = parsed.find((sq: Question) => sq.id === q.id);
        return savedQuestion ? { ...q, ...savedQuestion } : q;
      });
    } catch (e) {
      console.error('Error parsing saved questions', e);
      return questions;
    }
  }
  return questions;
});
  const [seenNotifications, setSeenNotifications] = useState<string[]>(() => {
    const saved = localStorage.getItem('seenNotifications');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [filterByDifficulty, setFilterByDifficulty] = useState<string[]>(['easy', 'medium', 'hard']);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const markNotificationsAsSeen = (ids: string[]) => {
    setSeenNotifications(prev => {
      const newSeen = [...new Set([...prev, ...ids])];
      localStorage.setItem('seenNotifications', JSON.stringify(newSeen));
      return newSeen;
    });
  };


  // Calculate statistics based on current questions state
  const statistics = {
    easyCompleted: questionsState.filter(q => q.difficulty === 'easy' && q.progress === 100).length,
    mediumCompleted: questionsState.filter(q => q.difficulty === 'medium' && q.progress === 100).length,
    hardCompleted: questionsState.filter(q => q.difficulty === 'hard' && q.progress === 100).length,
    totalAttempts: questionsState.reduce((acc, q) => acc + q.attempts, 0),
    languageDistribution: questionsState.reduce((acc, q) => {
      for (const lang of q.languages) {
        acc[lang] = (acc[lang] || 0) + 1;
      }
      return acc;
    }, {} as Record<Language, number>),
  };

  useEffect(() => {
    const savedQuestions = localStorage.getItem('systemDesignQuestions');
    if (savedQuestions) {
      try {
        const parsed = JSON.parse(savedQuestions);
        setQuestionsState(parsed);
      } catch (e) {
        console.error('Error parsing saved questions', e);
      }
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('systemDesignQuestions', JSON.stringify(questionsState));
  }, [questionsState]);

  // Update a specific subtopic's completion status
  const updateSubtopicCompletion = (questionId: string, subtopicId: string, completed: boolean) => {
    setQuestionsState(prevQuestions => {
      const updatedQuestions = prevQuestions.map(question => {
        if (question.id === questionId) {
          const updatedSubtopics = question.subtopics.map(subtopic => {
            if (subtopic.id === subtopicId) {
              return { ...subtopic, completed };
            }
            return subtopic;
          });

          const updatedQuestion = {
            ...question,
            subtopics: updatedSubtopics,
          };

          // Recalculate progress
          updatedQuestion.progress = calculateProgress(updatedQuestion);

          return updatedQuestion;
        }
        return question;
      });

      return updatedQuestions;
    });
  };

  // Update a question's attempt count and languages used
  const updateQuestionAttempt = (questionId: string, language: Language) => {
    setQuestionsState(prevQuestions => {
      return prevQuestions.map(question => {
        if (question.id === questionId) {
          const updatedLanguages = question.languages.includes(language)
            ? question.languages
            : [...question.languages, language];

          return {
            ...question,
            attempts: question.attempts + 1,
            lastAttempted: new Date(),
            languages: updatedLanguages,
          };
        }
        return question;
      });
    });
  };

  const value = {
    questions: questionsState,
    activeQuestion,
    setActiveQuestion,
    updateSubtopicCompletion,
    updateQuestionAttempt,
    filterByDifficulty,
    setFilterByDifficulty,
    searchTerm,
    setSearchTerm,
    statistics,
    seenNotifications,
    markNotificationsAsSeen,
  };

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionContext);
  if (context === undefined) {
    throw new Error('useQuestions must be used within a QuestionProvider');
  }
  return context;
}
