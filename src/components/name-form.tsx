"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AVATAR_OPTIONS = [
  { id: 'av1', src: '/av1.png' },
  { id: 'av2', src: '/av2.png' },
];

export function NameForm({ onNameSet }: { onNameSet: (name: string) => void }) {
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0].id);

  useEffect(() => {
    const savedName = localStorage.getItem("username")
    const savedAvatar = localStorage.getItem("userAvatar")
    if (savedName) {
      setName(savedName)
    }
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar)
    }
    setIsLoading(false)
  }, [])

  if (isLoading) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      localStorage.setItem("username", name)
      localStorage.setItem("userAvatar", selectedAvatar)
      onNameSet(name)
    }
  }



  return (
    <div className="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          

          {/* Heading */}
          <div className="text-center space-y-2">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl font-medium text-black dark:text-white"
            >
              Welcome to LeetSys
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              Let's personalize your experience
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Avatar Selection */}
            <div className="space-y-4">
              <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 text-center">
                Choose your avatar
              </label>
              {/* <div className="flex justify-center gap-4">
                {avatars.map((avatar) => (
                  <motion.button
                    key={avatar.id}
                    type="button"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedAvatar(avatar.id)}
                    className={`relative p-0.5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white transition-all duration-200 ${
                      selectedAvatar === avatar.id
                        ? "ring-2 ring-black dark:ring-white"
                        : "ring-1 ring-transparent hover:ring-gray-200 dark:hover:ring-gray-800"
                    }`}
                  >
                    <Avatar className="h-16 w-16 bg-white">
                      <AvatarImage src={avatar.src || "/placeholder.svg"} alt="Avatar" />
                      <AvatarFallback>{avatar.fallback}</AvatarFallback>
                    </Avatar>
                    <AnimatePresence>
                      {selectedAvatar === avatar.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute -bottom-1 -right-1 h-5 w-5 bg-black dark:bg-white rounded-full flex items-center justify-center"
                        >
                          <div className="h-2 w-2 rounded-full bg-white dark:bg-black" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div> */}
              <div className="flex justify-center gap-4 mb-6">
                {AVATAR_OPTIONS.map((avatar) => (
                  <div 
                    key={avatar.id}
                    className={`p-1 rounded-full transition-all ${
                      selectedAvatar === avatar.id 
                        ? 'ring-2 ring-primary bg-gradient-to-r from-primary to-purple-500' 
                        : ''
                    }`}
                    onClick={() => setSelectedAvatar(avatar.id)}
                  >
                    <Avatar className="h-16 w-16 cursor-pointer">
                      <AvatarImage src={avatar.src} />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                  </div>
                ))}
              </div>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-medium text-gray-500 dark:text-gray-400">
                What should we call you?
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full h-14 px-4 rounded-xl border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white text-black dark:text-white"
                autoFocus
              />
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: name.trim() ? 1.01 : 1 }} whileTap={{ scale: name.trim() ? 0.99 : 1 }}>
              <Button
                type="submit"
                disabled={!name.trim()}
                className="w-full h-14 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
              >
                Continue
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}
