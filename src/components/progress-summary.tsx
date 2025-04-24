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
'use client';

import { Progress } from "@/components/ui/progress";
import { useQuestions } from "@/lib/context";

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
      <h3 className="font-medium">Overall Progress</h3>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>{totalCompleted} / {totalQuestions} completed</span>
          <span className="font-medium">{completionPercentage}%</span>
        </div>
        <Progress value={completionPercentage} className="h-2" />
      </div>

      <div className="space-y-3 mt-4">
        {difficultyData.map((item) => {
          const percentage = item.total > 0 ? Math.round((item.completed / item.total) * 100) : 0;
          return (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span>
                  {item.completed}/{item.total} ({percentage}%)
                </span>
              </div>
              <Progress
                value={percentage}
                className="h-2"
                // indicatorColor={item.color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
