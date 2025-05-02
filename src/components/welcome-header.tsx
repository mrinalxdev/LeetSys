// src/components/welcome-header.tsx
"use client"

import { useQuestions } from "@/lib/context"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useUser } from "@/hooks/useUser"
import { getAvatarSrc } from "@/lib/utils"

export function WelcomeHeader() {
  const { questions } = useQuestions()
  const { user } = useUser();
  const [greeting, setGreeting] = useState("")
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")

  useEffect(() => {
    // Set greeting based on time
    const now = new Date()
    const hours = now.getHours()

    if (hours < 12) {
      setGreeting("Good morning")
    } else if (hours < 17) {
      setGreeting("Good afternoon")
    } else {
      setGreeting("Good evening")
    }

    const savedName = localStorage.getItem('username')
    const savedAvatar = localStorage.getItem('userAvatar')
    if (savedName) setName(savedName)
    if (savedAvatar) setAvatar(savedAvatar)
  }, [])

  return (
    <div className="border-b pb-4 my-6 flex items-start gap-4">
      <Avatar className="h-16 w-16 border-2 border-primary bg-gradient-to-r from-primary to-purple-500">
        <AvatarImage src={getAvatarSrc(user?.avatar)} />
        <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold bg-blue-400 bg-clip-text text-white">
          {greeting}, {name}!
        </h1>
        <p className="text-muted-foreground text-sm mt-1 ml-1">
          What questions will you solve today?
        </p>
      </div>
    </div>
  )
}