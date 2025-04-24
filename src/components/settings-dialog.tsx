'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useQuestions } from '@/lib/context';
import { toast } from 'sonner';

type SettingsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  const { questions } = useQuestions();
  const [isResetting, setIsResetting] = useState(false);

  const handleResetProgress = () => {
    setIsResetting(true);

    // Simulate a delay for better UX
    setTimeout(() => {
      // Clear localStorage and reload page
      localStorage.removeItem('systemDesignQuestions');
      toast.success('Progress reset successfully. Reloading page...');

      // Give the toast time to display before reload
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }, 500);
  };

  const stats = {
    totalQuestions: questions.length,
    questionsAttempted: questions.filter(q => q.attempts > 0).length,
    questionsCompleted: questions.filter(q => q.progress === 100).length,
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Manage your system design learning progress
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Your Progress</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-muted p-3 rounded-md text-center">
                <p className="text-sm text-muted-foreground">Questions</p>
                <p className="text-xl font-semibold">{stats.totalQuestions}</p>
              </div>
              <div className="bg-muted p-3 rounded-md text-center">
                <p className="text-sm text-muted-foreground">Attempted</p>
                <p className="text-xl font-semibold">{stats.questionsAttempted}</p>
              </div>
              <div className="bg-muted p-3 rounded-md text-center">
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-xl font-semibold">{stats.questionsCompleted}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Reset Progress</h3>
            <p className="text-sm text-muted-foreground">
              This will clear all your progress, attempts, and language data. This action cannot be undone.
            </p>
            <Button
              variant="destructive"
              className="w-full mt-2"
              onClick={handleResetProgress}
              disabled={isResetting}
            >
              {isResetting ? 'Resetting...' : 'Reset All Progress'}
            </Button>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
