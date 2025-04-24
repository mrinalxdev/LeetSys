'use client';

import { useState, useEffect } from 'react';
import { useQuestions } from '@/lib/context';

export function TimeGreeting() {
  const { questions } = useQuestions();
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  // Calculate stats
  const completedCount = questions.filter(q => q.progress === 100).length;
  const totalCount = questions.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  // Find the most recent question
  const recentQuestion = [...questions]
    .filter(q => q.lastAttempted)
    .sort((a, b) => {
      if (!a.lastAttempted || !b.lastAttempted) return 0;
      return new Date(b.lastAttempted).getTime() - new Date(a.lastAttempted).getTime();
    })[0];

  useEffect(() => {
    const updateGreeting = () => {
      // Get current time in IST (UTC+5:30)
      const now = new Date();
      const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000)); // UTC+5:30
      const hour = istTime.getUTCHours();

      // Format time as HH:MM
      const formattedHour = istTime.getUTCHours().toString().padStart(2, '0');
      const formattedMinutes = istTime.getUTCMinutes().toString().padStart(2, '0');
      setCurrentTime(`${formattedHour}:${formattedMinutes}`);

      // Set greeting based on time
      if (hour < 12) {
        setGreeting('Good morning');
      } else if (hour < 17) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
    };

    // Update immediately and then every minute
    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-bold">{greeting}!</h2>
        <span className="text-sm text-muted-foreground">{currentTime} IST</span>
      </div>

      <p className="text-muted-foreground">
        {completedCount === 0 ? (
          "You haven't completed any questions yet. Let's get started!"
        ) : completionPercentage < 25 ? (
          `You've completed ${completedCount} out of ${totalCount} questions. Keep going!`
        ) : completionPercentage < 50 ? (
          `Great progress! You've completed ${completionPercentage}% of all questions.`
        ) : completionPercentage < 75 ? (
          `You're making excellent progress with ${completionPercentage}% completion.`
        ) : completionPercentage < 100 ? (
          `Almost there! You've completed ${completionPercentage}% of all questions.`
        ) : (
          `Amazing! You've completed all ${totalCount} questions!`
        )}
      </p>

      {recentQuestion && (
        <p className="text-sm mt-1">
          Last worked on: <span className="font-medium">{recentQuestion.title}</span>
        </p>
      )}
    </div>
  );
}
