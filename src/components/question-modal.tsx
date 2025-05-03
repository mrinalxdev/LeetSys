'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Language } from "@/data/questions";
import { motion } from "framer-motion";
import { useQuestions } from "@/lib/context";
import { BookOpen, Check, X } from "lucide-react";
import { SubtopicAccordion } from './subtopic-accordion';
import Link from 'next/link';

const languages: Language[] = [
  'Python',
  'JavaScript',
  'TypeScript',
  'Java',
  'Go',
  'C++',
  'Rust',
  'Other',
];

export function QuestionModal() {
  const { activeQuestion, setActiveQuestion, updateSubtopicCompletion, updateQuestionAttempt } = useQuestions();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('Python');
  const [activeTab, setActiveTab] = useState('details');
  const [showExplanation, setShowExplanation] = useState(false); 

  if (!activeQuestion) return null;

  const handleCloseModal = () => {
    setActiveQuestion(null);
    setShowExplanation(false);
  };

  const handleSubtopicToggle = (subtopicId: string, completed: boolean) => {
    updateSubtopicCompletion(activeQuestion.id, subtopicId, completed);
    // Force UI update by creating a new object reference
    setActiveQuestion({
      ...activeQuestion,
      subtopics: activeQuestion.subtopics.map(st => 
        st.id === subtopicId ? { ...st, completed } : st
      )
    });
  };

  const completedSubtopicCount = activeQuestion.subtopics.filter(st => st.completed).length;
  const showExplanationButton = completedSubtopicCount >= 2;

  const handleStartAttempt = () => {
    updateQuestionAttempt(activeQuestion.id, selectedLanguage);
  };

  const difficultyColor = {
    'easy': 'bg-green-500 text-white',
    'medium': 'bg-amber-500 text-white',
    'hard': 'bg-red-500 text-white',
  }[activeQuestion.difficulty] || 'bg-gray-500 text-white';

  return (
    <Dialog open={!!activeQuestion} onOpenChange={(open) => !open && handleCloseModal()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold pr-4">{activeQuestion.title}</DialogTitle>
            <Badge variant="outline" className={difficultyColor}>
              {activeQuestion.difficulty}
            </Badge>
          </div>
          <DialogDescription className="text-sm mt-2">
            {activeQuestion.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="w-full">
            <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
            <TabsTrigger value="subtopics" className="flex-1">Subtopics</TabsTrigger>
            <TabsTrigger value="attempt" className="flex-1">Attempt</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Progress</h3>
              <div className="flex items-center gap-2 mb-1">
                <Progress value={activeQuestion.progress} className="h-4 flex-1" />
                <span className="text-sm font-medium">{activeQuestion.progress}%</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Statistics</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm text-muted-foreground">Attempts</p>
                  <p className="text-xl font-semibold">{activeQuestion.attempts}</p>
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm text-muted-foreground">Last Attempted</p>
                  <p className="text-md font-semibold">
                    {activeQuestion.lastAttempted
                      ? new Date(activeQuestion.lastAttempted).toLocaleDateString()
                      : 'Never'}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Languages Used</h3>
              <div className="flex flex-wrap gap-2">
                {activeQuestion.languages.length > 0 ? (
                  activeQuestion.languages.map((language) => (
                    <Badge key={language} variant="secondary">{language}</Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">No languages used yet.</p>
                )}
              </div>
            </div>
          </TabsContent>

          {/* <TabsContent value="subtopics" className="mt-4">
            <h3 className="text-lg font-semibold mb-4">Implementation Guide</h3>
            <div className="space-y-3">
              {activeQuestion.subtopics.map((subtopic) => (
                <SubtopicAccordion
                  key={subtopic.id}
                  subtopic={subtopic}
                  onToggleCompletion={(completed) => 
                    updateSubtopicCompletion(activeQuestion.id, subtopic.id, completed)
                  }
                />
              ))}
            </div>
          </TabsContent> */}

            <TabsContent value="subtopics" className="mt-4">
            <h3 className="text-lg font-semibold mb-4">Implementation Guide</h3>
            <div className="space-y-3">
              {activeQuestion.subtopics.map((subtopic) => (
                <SubtopicAccordion
                  key={subtopic.id}
                  subtopic={subtopic}
                  onToggleCompletion={(completed) => 
                    handleSubtopicToggle(subtopic.id, completed)
                  }
                />
              ))}
            </div>

            {showExplanationButton && (
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={() => setShowExplanation(!showExplanation)}
                >
                  <BookOpen className="h-4 w-4" />
                  {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                </Button>
                
                {showExplanation && (
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Voila on completing your first two topics on your own. Time to know get the solution for the topic, click on the notion link below and find the question you solved :) 
                    </p>

                    <Link href="https://www.notion.so/newstudent/Solutions-for-LeetSys-1e816c0ef9e1803aa7cbca0ab0e0e41d?pvs=4">
                      <p className='underline underline-offset-4'>Link to Solutions</p>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </TabsContent>


          <TabsContent value="attempt" className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Language</h3>
              <p className="text-sm text-muted-foreground mb-2">Select the language you're using for this attempt:</p>
              <div className="grid grid-cols-4 gap-2">
                {languages.map((language) => (
                  <Button
                    key={language}
                    variant={selectedLanguage === language ? "default" : "outline"}
                    className="h-10"
                    onClick={() => setSelectedLanguage(language)}
                  >
                    {language}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Record Your Attempt</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Click the button below to record a new attempt with the selected language.
              </p>
              <Button onClick={handleStartAttempt} className="w-full">
                Record Attempt with {selectedLanguage}
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={handleCloseModal}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
