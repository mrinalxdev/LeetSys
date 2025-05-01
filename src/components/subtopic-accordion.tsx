'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Subtopic } from '@/data/questions';

export function SubtopicAccordion({ 
  subtopic,
  onToggleCompletion
}: {
  subtopic: Subtopic;
  onToggleCompletion: (completed: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden mb-2">
      <button
        className={cn(
          "w-full flex justify-between items-center p-4 text-left",
          "hover:bg-accent/50 transition-colors duration-200",
          subtopic.completed ? 'bg-green-50 dark:bg-green-900/20' : 'bg-background'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <span className={cn(
            "flex items-center justify-center w-5 h-5 rounded border",
            subtopic.completed 
              ? "bg-green-500 border-green-500 text-white"
              : "border-gray-300 dark:border-gray-600"
          )}>
            {subtopic.completed && <Check className="w-3 h-3" />}
          </span>
          <span className="font-medium">{subtopic.title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-2 text-sm border-t">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                {subtopic.guidance.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-2 last:mb-0">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
              
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleCompletion(true);
                  }}
                  className={cn(
                    "text-xs px-3 py-1 rounded-full transition-colors",
                    "flex items-center gap-1",
                    subtopic.completed 
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20"
                  )}
                >
                  <Check className="w-3 h-3" /> Complete
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleCompletion(false);
                  }}
                  className={cn(
                    "text-xs px-3 py-1 rounded-full transition-colors",
                    "flex items-center gap-1",
                    !subtopic.completed 
                      ? "bg-red-500/10 text-red-600 dark:text-red-400"
                      : "bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20"
                  )}
                >
                  <X className="w-3 h-3" /> Incomplete
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}