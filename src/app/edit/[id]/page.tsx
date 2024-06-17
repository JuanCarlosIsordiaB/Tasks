import { TaskForm } from "@/app/new/task-form";
import prisma from "@/lib/prisma";
import { StringToBoolean } from "class-variance-authority/types";
import { redirect, useParams } from "next/navigation";

export const TaskPageEdit = async ({ params }: { params: { id: string } }) => {
  const task = await prisma.task.findFirst({
    where: { id: parseInt(params.id) },
  });

  if (!task) {
    redirect("/");
  }
  return (
    <>
      <h1 className="font-bold">Edit Task</h1>

      <div className="flex justify-center items-center h-fit">
        <TaskForm task={task} />
      </div>
    </>
  );
};

export default TaskPageEdit;
