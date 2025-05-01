'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


export function NameForm({onNameSet} : {onNameSet : (name : string) => void}) {
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const savedName = localStorage.getItem('username')
        if (savedName){
            onNameSet(savedName)
        }

        setIsLoading(false);
    }, [onNameSet])

    if (isLoading) return null;

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            localStorage.setItem('username', name)
            onNameSet(name)
        }
    }


    return (
        <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-background border rounded-xl p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-2">Welcome to LeetSys!</h2>
        <p className="text-muted-foreground mb-6">
          Let's get started by telling us your name.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="text-lg py-6"
            autoFocus
          />
          <Button 
            type="submit" 
            className="w-full"
            disabled={!name.trim()}
          >
            Continue
          </Button>
        </form>
      </motion.div>
     </motion.div>
    )
}