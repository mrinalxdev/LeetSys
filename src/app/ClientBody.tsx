'use client';

import { useState, useEffect } from 'react';
import { QuestionProvider } from "@/lib/context";
import { QuestionsGrid } from "@/components/questions-grid";
import { QuestionFilters } from "@/components/question-filters";
import { DashboardStats } from "@/components/dashboard-stats";
import { QuestionModal } from "@/components/question-modal";
import { SettingsDialog } from "@/components/settings-dialog";
// import { ProgressSummary } from "@/components/progress-summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Settings } from "lucide-react";
import { Toaster } from "sonner";
import { Sidebar } from '@/components/sidebar';
// import { TimeGreeting } from '@/components/time-greeting';
import { motion } from 'framer-motion';
import { WelcomeHeader } from '@/components/welcome-header';
import { NameForm } from '@/components/name-form';

export default function ClientBody() {
  const [settingsOpen, setSettingsOpen] = useState(false);
   const [showNameForm, setShowNameForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const savedName = localStorage.getItem('username');
    const savedAvatar = localStorage.getItem('userAvatar');
    
    // Only show name form if neither name nor avatar is set
    setShowNameForm(!savedName && !savedAvatar);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  if (showNameForm) {
    return <NameForm onNameSet={() => setShowNameForm(false)} />;
  }
  return (
    <QuestionProvider>
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 ml-64 p-6">
          <WelcomeHeader />

          <Tabs defaultValue="questions">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TabsList className="w-full bg-background/50 backdrop-blur-md">
                <TabsTrigger 
                  value="questions" 
                  className="flex-1 data-[state=active]:bg-transparent p-4 data-[state=active]:border-2 data-[state=active]:broder-white"
                >
                  Questions
                </TabsTrigger>
                <TabsTrigger 
                  value="dashboard" 
                  className="flex-1 data-[state=active]:bg-transparent p-4 data-[state=active]:border-2 data-[state=active]:broder-white"
                >
                  Dashboard
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="questions" className="mt-6">
              <QuestionsGrid />
            </TabsContent>

            <TabsContent value="dashboard" className="mt-6">
              <DashboardStats />
            </TabsContent>
          </Tabs>

          <QuestionModal />
          <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
          <Toaster 
            position="top-center" 
            toastOptions={{
              classNames: {
                toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
                description: 'group-[.toast]:text-muted-foreground',
                actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
              },
            }} 
          />
        </main>
      </div>
    </QuestionProvider>
  );
}