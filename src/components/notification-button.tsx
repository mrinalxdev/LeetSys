// src/components/notification-button.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Bell, BellDot } from "lucide-react";
import { useState } from "react";

export function NotificationButton() {
  const [hasNotifications, setHasNotifications] = useState(true); // Temporary state

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={() => setHasNotifications(false)}
    >
      {hasNotifications ? (
        <BellDot className="h-4 w-4" />
      ) : (
        <Bell className="h-4 w-4" />
      )}
      {hasNotifications && (
        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
      )}
    </Button>
  );
}