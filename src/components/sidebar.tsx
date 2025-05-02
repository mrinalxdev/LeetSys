"use client"
import { Settings, Home, BookOpen, BarChart2, HelpCircle } from "lucide-react";
import { ProgressSummary } from "./progress-summary";
import { QuestionFilters } from "./question-filters";
import { Button } from "./ui/button";
import { SettingsDialog } from "./settings-dialog";
import { useState } from "react";
import { useQuestions } from "@/lib/context";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Sidebar() {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { statistics } = useQuestions();


    return (
        <>
            <motion.aside 
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed left-0 top-0 h-screen w-64 border-r bg-background/50 p-4 backdrop-blur-md flex flex-col"
            >
                <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="mb-6">
                        <motion.h1 
                            whileHover={{ scale: 1.02 }}
                            className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                        >
                            LeetSys
                        </motion.h1>
                        <p className="text-sm text-muted-foreground">
                            Master System Design Concepts
                        </p>
                    </div>

                    {/* <nav className="space-y-1 mb-6">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                                        "transition-colors hover:bg-accent hover:text-accent-foreground"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </nav> */}

                    <div className="flex-1 overflow-y-auto overflow-x-hidden">
                        <ProgressSummary />
                        <QuestionFilters />
                    </div>

                    <div className="mt-auto pt-4 border-t">
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full"
                                onClick={() => setSettingsOpen(true)}
                            >
                                <Settings className="h-4 w-4 mr-2" />
                                <span>Settings</span>
                                <span className="ml-auto text-xs text-muted-foreground">
                                    {statistics.totalAttempts} attempts
                                </span>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.aside>
            <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
        </>
    )
}