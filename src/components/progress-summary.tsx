// 'use client';

// import { useQuestions } from "@/lib/context";
// import { Card, CardContent } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";

// export function ProgressSummary() {
//   const { questions, statistics } = useQuestions();

//   const totalQuestions = questions.length;
//   const totalCompleted = statistics.easyCompleted + statistics.mediumCompleted + statistics.hardCompleted;
//   const completionPercentage = totalQuestions > 0 ? Math.round((totalCompleted / totalQuestions) * 100) : 0;

//   const difficultyData = [
//     {
//       name: 'Easy',
//       total: questions.filter(q => q.difficulty === 'easy').length,
//       completed: statistics.easyCompleted,
//       color: 'bg-green-500',
//     },
//     {
//       name: 'Medium',
//       total: questions.filter(q => q.difficulty === 'medium').length,
//       completed: statistics.mediumCompleted,
//       color: 'bg-amber-500',
//     },
//     {
//       name: 'Hard',
//       total: questions.filter(q => q.difficulty === 'hard').length,
//       completed: statistics.hardCompleted,
//       color: 'bg-red-500',
//     }
//   ];

//   return (
//     // <Card className="bg-muted/40">
//     //   <CardContent className="p-6">
//     //     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//     //       <div className="md:col-span-1 space-y-2">
//     //         <h3 className="text-lg font-medium">Overall Progress</h3>
//     //         <div className="flex flex-col">
//     //           <div className="flex justify-between mb-1 text-sm">
//     //             <span>{totalCompleted} / {totalQuestions} completed</span>
//     //             <span className="font-medium">{completionPercentage}%</span>
//     //           </div>
//     //           <Progress value={completionPercentage} className="h-2" />
//     //         </div>
//     //       </div>

//     //       <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
//     //         {difficultyData.map((item) => {
//     //           const percentage = item.total > 0 ? Math.round((item.completed / item.total) * 100) : 0;
//     //           return (
//     //             <div key={item.name} className="space-y-1">
//     //               <div className="flex justify-between text-sm">
//     //                 <span className="font-medium">{item.name}</span>
//     //                 <span>
//     //                   {item.completed} / {item.total}
//     //                   <span className="text-muted-foreground ml-1">({percentage}%)</span>
//     //                 </span>
//     //               </div>
//     //               <Progress
//     //                 value={percentage}
//     //                 className="h-2"
//     //                 style={{ backgroundColor: `${item.color}20` }}
//     //               >
//     //                 <div
//     //                   className="h-full transition-all"
//     //                   style={{ backgroundColor: item.color, width: `${percentage}%` }}
//     //                 />
//     //               </Progress>
//     //             </div>
//     //           );
//     //         })}
//     //       </div>
//     //     </div>
//     //   </CardContent>
//     // </Card>

//     // src/components/progress-summary.tsx

// src/components/progress-summary.tsx
// 
'use client';

import { Progress } from "@/components/ui/progress";
import { useQuestions } from "@/lib/context";
import { motion } from "framer-motion";

export function ProgressSummary() {
  const { questions, statistics } = useQuestions();

  const totalQuestions = questions.length;
  const totalCompleted = statistics.easyCompleted + statistics.mediumCompleted + statistics.hardCompleted;
  const completionPercentage = totalQuestions > 0 ? Math.round((totalCompleted / totalQuestions) * 100) : 0;

  const difficultyData = [
    {
      name: 'Easy',
      total: questions.filter(q => q.difficulty === 'easy').length,
      completed: statistics.easyCompleted,
      color: 'bg-green-500',
    },
    {
      name: 'Medium',
      total: questions.filter(q => q.difficulty === 'medium').length,
      completed: statistics.mediumCompleted,
      color: 'bg-yellow-500',
    },
    {
      name: 'Hard',
      total: questions.filter(q => q.difficulty === 'hard').length,
      completed: statistics.hardCompleted,
      color: 'bg-red-500',
    }
  ];

  return (
    <div className="space-y-4">
      <motion.h3 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-medium flex items-center gap-2"
      >
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        Overall Progress
      </motion.h3>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        <div className="flex justify-between text-sm">
          <span>{totalCompleted} / {totalQuestions} completed</span>
          <span className="font-medium">{completionPercentage}%</span>
        </div>
        <Progress 
          value={completionPercentage} 
          className="h-2"
          indicatorclassname="bg-gradient-to-r from-primary to-purple-600"
        />
      </motion.div>

      <div className="space-y-3 mt-4">
        {difficultyData.map((item, index) => {
          const percentage = item.total > 0 ? Math.round((item.completed / item.total) * 100) : 0;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="space-y-1"
            >
              <div className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span>
                  {item.completed}/{item.total} ({percentage}%)
                </span>
              </div>
              <Progress
                value={percentage}
                className="h-2"
                indicatorclassname={item.color}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}