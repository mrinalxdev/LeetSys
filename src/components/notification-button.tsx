// src/components/notification-button.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Bell, BellDot } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useQuestions } from "@/lib/context";

const recentChanges = [
  {
    id: 1,
    title: "Launching ....",
    description: "Launched LeetSys with 19 questions, detailed solutions of every question will be posted on my twitter account @Hi_Mrinal !!",
    date: "2025-05-03",
    isNew: true
  },
  
];

export function NotificationButton() {
  // const [hasNotifications, setHasNotifications] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { seenNotifications, markNotificationsAsSeen } = useQuestions();

  const unreadChanges = recentChanges.filter(
    change => change.isNew && !seenNotifications.includes(change.id.toString())
  )

  const hasNotifications = unreadChanges.length > 0;

  const handleClick = () => {
    if (hasNotifications) {
      markNotificationsAsSeen(
        recentChanges
          .filter(change => change.isNew)
          .map(change => change.id.toString())
      );
    }
    setIsOpen(true);
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="relative"
        onClick={handleClick}
      >
        {hasNotifications ? (
          <BellDot className="h-4 w-4" />
        ) : (
          <Bell className="h-4 w-4" />
        )}
        {hasNotifications && (
          <motion.span
            className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Recent Changes</DialogTitle>
            <DialogDescription>
              Here's what's new in the latest version
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {recentChanges.map((change) => (
              <div key={change.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  {change.isNew && (
                    <motion.div
                      className="h-2 w-2 rounded-full bg-primary mt-1.5"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  <div className="h-full w-px bg-border mt-2" />
                </div>
                <div>
                  <h3 className="font-medium">{change.title}</h3>
                  <p className="text-sm text-muted-foreground">{change.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{change.date}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}