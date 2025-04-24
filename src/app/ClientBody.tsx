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

export default function ClientBody() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <QuestionProvider>
      <div className="container mx-auto py-6 px-4 max-w-7xl">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
          <div>
            <h1 className="text-6xl font-bold mt-6 font-sans">Good Evening, Mrinal</h1>
            <p className="text-muted-foreground">
              What challenges are you solving today ?
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={() => setSettingsOpen(true)}>
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </header>

        <Tabs defaultValue="questions" className="mt-6">
          <TabsList>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>

          <TabsContent value="questions" className="space-y-6">
            <ProgressSummary />
            <QuestionFilters />
            <QuestionsGrid />
          </TabsContent>

          <TabsContent value="dashboard">
            <DashboardStats />
          </TabsContent>
        </Tabs>

        <QuestionModal />
        <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
        <Toaster position="top-center" />
      </div>
    </QuestionProvider>
  );
}
