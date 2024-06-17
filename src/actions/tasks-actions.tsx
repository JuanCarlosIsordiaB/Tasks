"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const createTask = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;
  const date = formData.get("date") as string;

  //console.log({ name, description, priority, date });
  if (!name || !description || !priority || !date) {
    //alert("All fields are required");
    //alert("All fields are required");
    return;
  }

  await prisma.task.create({
    data: { name, description, priority, date: date },
  });
  redirect("/");
};

export const deleteTask = async (id: string) => {
  await prisma.task.delete({ where: { id: parseInt(id) } });
  redirect("/");
};

export const updateTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;
  const date = formData.get("date") as string;

  if (!name || !description || !priority || !date) {
    //alert("All fields are required");
    return;
  }

  await prisma.task.update({
    where: { id: parseInt(id) },
    data: { name, description, priority, date: date },
  });
  redirect("/");
};
