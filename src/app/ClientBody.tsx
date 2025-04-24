'use client';

import { useState } from 'react';
import { QuestionProvider } from "@/lib/context";
import { QuestionsGrid } from "@/components/questions-grid";
import { QuestionFilters } from "@/components/question-filters";
import { DashboardStats } from "@/components/dashboard-stats";
import { QuestionModal } from "@/components/question-modal";
import { SettingsDialog } from "@/components/settings-dialog";
import { ProgressSummary } from "@/components/progress-summary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Toaster } from "sonner";
import { Sidebar } from '@/components/sidebar';

export default function ClientBody() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <QuestionProvider>
      <div className="flex ">
        <Sidebar />
        
        <main className="flex-1 ml-64 p-6">
          <header className="mb-6">
            <h1 className="text-5xl font-bold font-title mt-5">Hi Mrinal, Good Afternoon !</h1>
            <p className="text-muted-foreground ml-2">
              What challenges are you solving today?
            </p>
          </header>

          <Tabs defaultValue="questions">
            <TabsList>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </TabsList>

            <TabsContent value="questions" className="mt-6">
              <QuestionsGrid />
            </TabsContent>

            <TabsContent value="dashboard" className="mt-6">
              <DashboardStats />
            </TabsContent>
          </Tabs>

          <QuestionModal />
          <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
          <Toaster position="top-center" />
        </main>
      </div>
    </QuestionProvider>
  );
}
