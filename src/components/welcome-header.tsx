"use client"

import { useQuestions } from "@/lib/context"
import { useEffect, useState } from "react"

export function WelcomeHeader() {
  const { questions } = useQuestions()
  const [greeting, setGreeting] = useState("")
  const [name, setName] = useState("")

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
    if (savedName) {
      setName(savedName)
    }
  }, [])

  return (
    <div className="border-b pb-4 my-6">
      <h1 className="text-4xl md:text-6xl font-bold">Hi, {name}! Welcome back.</h1>
      <p className="text-muted-foreground text-sm mt-1">What questions will you solve today?</p>
    </div>
  )
}