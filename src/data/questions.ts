export type Difficulty = 'easy' | 'medium' | 'hard';
export type Language = 'Python' | 'JavaScript' | 'Java' | 'Go' | 'C++' | 'Rust' | 'TypeScript' | 'Other';

export interface Subtopic {
  id: string;
  title: string;
  completed: boolean;
}

export interface Question {
  id: string;
  title: string;
  difficulty: Difficulty;
  subtopics: Subtopic[];
  progress: number; // 0-100
  attempts: number;
  lastAttempted?: Date;
  languages: Language[];
  description: string;
}

export interface Subtopic {
  id : string;
  title : string;
  completed : boolean;
  guidance : string;
}

// Initial questions
export const initialQuestions: Question[] = [
  
 
];


import { moreEasyQuestions, moreMediumQuestions, moreHardQuestions } from './more-questions';


export const questions: Question[] = [
  ...initialQuestions,
  ...moreEasyQuestions,
  ...moreMediumQuestions,
  ...moreHardQuestions
];


export const getQuestionsByDifficulty = (difficulty: Difficulty): Question[] => {
  return questions.filter(q => q.difficulty === difficulty);
};


export const calculateProgress = (question: Question): number => {
  const completedSubtopics = question.subtopics.filter(st => st.completed).length;
  const totalSubtopics = question.subtopics.length;

  return totalSubtopics > 0 ? Math.round((completedSubtopics / totalSubtopics) * 100) : 0;
};
