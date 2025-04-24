
"use client"
import { Settings } from "lucide-react";
import { ProgressSummary } from "./progress-summary";
import { QuestionFilters } from "./question-filters";
import { Button } from "./ui/button";
import { SettingsDialog } from "./settings-dialog";
import { useState } from "react";

export function Sidebar(){

    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <>
        <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-background p-4 backdrop-blur-md">
            <div className="flex flex-col h-full">
                <div className="mb-6">
                    {/* <h1 className="text-2xl font-bold mb-2">LeetSys</h1>
                    <p className="text-sm text-muted-foreground">
                        Track your learning Progress
                    </p> */}
                    
                </div>

                <div className="flex-1 overflow-y-auto space-y-6 mt-14">
                    <ProgressSummary />
                    <QuestionFilters />
                </div>

                <div className="mt-auto pt-4 border-t">
                <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={() => setSettingsOpen(true)}
            >
              <Settings className="h-4 w-4 mr-2" />
              <span>Settings</span>
            </Button>
                </div>
                
                
                
            </div>

        </aside>
        <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />

        </>
    )
}