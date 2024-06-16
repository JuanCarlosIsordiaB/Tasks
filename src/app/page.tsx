

import { TaskCard } from "@/components/extras/TaskCard";
import prisma from "@/lib/prisma";
import React from "react";

async function HomePage() {
  const tasks = await prisma.task.findMany();
  console.log(tasks);

  return (
    <div>
      <h1> Home</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
