'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useQuestions } from "@/lib/context";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Define the entry type for the render label function
type PieChartEntry = {
  name: string;
  value: number;
};

export function DashboardStats() {
  const { questions, statistics } = useQuestions();

  const easyQuestions = questions.filter(q => q.difficulty === 'easy');
  const mediumQuestions = questions.filter(q => q.difficulty === 'medium');
  const hardQuestions = questions.filter(q => q.difficulty === 'hard');

  const totalEasy = easyQuestions.length;
  const totalMedium = mediumQuestions.length;
  const totalHard = hardQuestions.length;

  const completedEasy = statistics.easyCompleted;
  const completedMedium = statistics.mediumCompleted;
  const completedHard = statistics.hardCompleted;

  const progressData = [
    {
      name: 'Easy',
      completed: completedEasy,
      total: totalEasy,
      percentage: totalEasy > 0 ? Math.round((completedEasy / totalEasy) * 100) : 0,
      color: '#22c55e' // green
    },
    {
      name: 'Medium',
      completed: completedMedium,
      total: totalMedium,
      percentage: totalMedium > 0 ? Math.round((completedMedium / totalMedium) * 100) : 0,
      color: '#f59e0b' // amber
    },
    {
      name: 'Hard',
      completed: completedHard,
      total: totalHard,
      percentage: totalHard > 0 ? Math.round((completedHard / totalHard) * 100) : 0,
      color: '#ef4444' // red
    }
  ];

  const languageData = Object.entries(statistics.languageDistribution).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981', '#84cc16', '#f59e0b', '#f43f5e', '#6b7280'];

  const renderLabel = (entry: PieChartEntry) => {
    return entry.name;
  };

  const recentAttempts = questions
    .filter(q => q.lastAttempted)
    .sort((a, b) => {
      if (!a.lastAttempted || !b.lastAttempted) return 0;
      return new Date(b.lastAttempted).getTime() - new Date(a.lastAttempted).getTime();
    })
    .slice(0, 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <motion.div  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}>
      <Card>
        <CardHeader>
          <CardTitle>Progress by Difficulty</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {progressData.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted-foreground">
                    {item.completed} / {item.total} ({item.percentage}%)
                  </span>
                </div>
                <Progress value={item.percentage} className="h-2" style={{ backgroundColor: `${item.color}20` }}>
                  <div
                    className="h-full transition-all"
                    style={{ backgroundColor: item.color, width: `${item.percentage}%` }}
                  />
                </Progress>
              </div>
            ))}
          </div>

          <div className="mt-6 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value, name, props) => {
                    if (name === 'completed') return [value, 'Completed'];
                    return [value, 'Total'];
                  }}
                />
                <Bar dataKey="total" fill="#d4d4d8" />
                <Bar dataKey="completed" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      </motion.div>

      <motion.div  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
      <Card>
        <CardHeader>
          <CardTitle>Languages Used</CardTitle>
        </CardHeader>
        <CardContent>
          {languageData.length > 0 ? (
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={renderLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={100}
                    animationDuration={1000}
                    animationEasing="ease-out"
                  >
                    {languageData.map((entry, index) => (
                      <Cell 
                        key={`cell-${entry.name}`} 
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[250px] text-muted-foreground">
              No attempts recorded yet
            </div>
          )}
        </CardContent>
      </Card>
      </motion.div>

      <motion.div  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 }}>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Recent Attempts</CardTitle>
        </CardHeader>
        <CardContent>
          {recentAttempts.length > 0 ? (
            <div className="space-y-2">
              {recentAttempts.map((question) => (
                <div key={question.id} className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                  <div>
                    <h4 className="font-medium">{question.title}</h4>
                    <div className="text-sm text-muted-foreground flex gap-2 mt-1">
                      <span>Difficulty: {question.difficulty}</span>
                      <span>•</span>
                      <span>Progress: {question.progress}%</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {question.lastAttempted && new Date(question.lastAttempted).toLocaleDateString()}
                    </p>
                    <div className="text-xs text-muted-foreground mt-1">
                      Languages: {question.languages.join(', ') || 'None'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center p-6 text-muted-foreground">
              No attempts recorded yet. Start working on system design questions!
            </div>
          )}
        </CardContent>
      </Card>
      </motion.div>
    </div>
  );
}
