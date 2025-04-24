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

// Initial questions
export const initialQuestions: Question[] = [
  // Easy Questions
  {
    id: 'e1',
    title: 'Design a URL shortener like TinyURL',
    difficulty: 'easy',
    subtopics: [
      { id: 'e1-s1', title: 'Hash Function', completed: false },
      { id: 'e1-s2', title: 'Database Design', completed: false },
      { id: 'e1-s3', title: 'API Endpoints', completed: false },
      { id: 'e1-s4', title: 'Rate Limiting', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a service that takes a long URL and provides a shorter, unique URL. Consider scalability, database schema, and how to handle redirects.'
  },
  {
    id: 'e2',
    title: 'Design a key-value store',
    difficulty: 'easy',
    subtopics: [
      { id: 'e2-s1', title: 'Data Structure', completed: false },
      { id: 'e2-s2', title: 'CRUD Operations', completed: false },
      { id: 'e2-s3', title: 'Persistence', completed: false },
      { id: 'e2-s4', title: 'Concurrency', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Implement a simple key-value store that supports basic operations like get, put, and delete. Consider in-memory vs. persistent storage solutions.'
  },
  {
    id: 'e3',
    title: 'Design a task scheduler',
    difficulty: 'easy',
    subtopics: [
      { id: 'e3-s1', title: 'Scheduling Algorithm', completed: false },
      { id: 'e3-s2', title: 'Task Queue', completed: false },
      { id: 'e3-s3', title: 'Worker Pool', completed: false },
      { id: 'e3-s4', title: 'Error Handling', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a simple task scheduler that can execute jobs at specified times or intervals. Consider scheduling algorithms and handling task failures.'
  },

  // Medium Questions
  {
    id: 'm1',
    title: 'Design a chat application',
    difficulty: 'medium',
    subtopics: [
      { id: 'm1-s1', title: 'Real-time Messaging', completed: false },
      { id: 'm1-s2', title: 'User Presence', completed: false },
      { id: 'm1-s3', title: 'Message Storage', completed: false },
      { id: 'm1-s4', title: 'Notification System', completed: false },
      { id: 'm1-s5', title: 'Group Chat Features', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a chat service that allows users to send messages to each other. Consider real-time communication, message persistence, and handling offline users.'
  },
  {
    id: 'm2',
    title: 'Design a rate limiter',
    difficulty: 'medium',
    subtopics: [
      { id: 'm2-s1', title: 'Rate Limiting Algorithms', completed: false },
      { id: 'm2-s2', title: 'Distributed Rate Limiting', completed: false },
      { id: 'm2-s3', title: 'API Design', completed: false },
      { id: 'm2-s4', title: 'Performance Considerations', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a service that can limit the rate of API requests based on various criteria. Consider different rate limiting algorithms and distributed systems challenges.'
  },
  {
    id: 'm3',
    title: 'Design a distributed cache',
    difficulty: 'medium',
    subtopics: [
      { id: 'm3-s1', title: 'Cache Strategy', completed: false },
      { id: 'm3-s2', title: 'Consistency Model', completed: false },
      { id: 'm3-s3', title: 'Eviction Policy', completed: false },
      { id: 'm3-s4', title: 'Distribution', completed: false },
      { id: 'm3-s5', title: 'Fault Tolerance', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed caching system like Redis or Memcached. Consider cache invalidation, consistency, and distributed architecture.'
  },

  // Hard Questions
  {
    id: 'h1',
    title: 'Design a distributed file system',
    difficulty: 'hard',
    subtopics: [
      { id: 'h1-s1', title: 'File Storage', completed: false },
      { id: 'h1-s2', title: 'Metadata Management', completed: false },
      { id: 'h1-s3', title: 'Consistency Model', completed: false },
      { id: 'h1-s4', title: 'Replication Strategy', completed: false },
      { id: 'h1-s5', title: 'Fault Tolerance', completed: false },
      { id: 'h1-s6', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a distributed file system like HDFS or GFS. Consider handling large files, ensuring data consistency, and recovering from node failures.'
  },
  {
    id: 'h2',
    title: 'Design a bidding system like eBay',
    difficulty: 'hard',
    subtopics: [
      { id: 'h2-s1', title: 'Auction Mechanics', completed: false },
      { id: 'h2-s2', title: 'Real-time Updates', completed: false },
      { id: 'h2-s3', title: 'Concurrency Control', completed: false },
      { id: 'h2-s4', title: 'Fraud Detection', completed: false },
      { id: 'h2-s5', title: 'Database Design', completed: false },
      { id: 'h2-s6', title: 'Scalability', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a bidding system for an online auction platform like eBay. Consider handling high-volume bid processing, concurrent bids, and real-time price updates.'
  },
  {
    id: 'h3',
    title: 'Design a search engine',
    difficulty: 'hard',
    subtopics: [
      { id: 'h3-s1', title: 'Web Crawler', completed: false },
      { id: 'h3-s2', title: 'Indexing', completed: false },
      { id: 'h3-s3', title: 'Query Processing', completed: false },
      { id: 'h3-s4', title: 'Ranking Algorithm', completed: false },
      { id: 'h3-s5', title: 'Distributed Architecture', completed: false },
      { id: 'h3-s6', title: 'Caching Strategy', completed: false },
    ],
    progress: 0,
    attempts: 0,
    languages: [],
    description: 'Design a search engine like Google or Bing. Consider web crawling, indexing, query processing, and ranking algorithms.'
  },
];

// Import additional questions
import { moreEasyQuestions, moreMediumQuestions, moreHardQuestions } from './more-questions';

// Combine all questions
export const questions: Question[] = [
  ...initialQuestions,
  ...moreEasyQuestions,
  ...moreMediumQuestions,
  ...moreHardQuestions
];

// Example function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: Difficulty): Question[] => {
  return questions.filter(q => q.difficulty === difficulty);
};

// Function to update a question's progress
export const calculateProgress = (question: Question): number => {
  const completedSubtopics = question.subtopics.filter(st => st.completed).length;
  const totalSubtopics = question.subtopics.length;

  return totalSubtopics > 0 ? Math.round((completedSubtopics / totalSubtopics) * 100) : 0;
};
