"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

interface TaskProps {
  id: number;
  name: string;
  description: string | null;
  priority: string;
  date: string; // Assume format is "dd/mm/yyyy"
}

export const TaskCard = ({
  id,
  name,
  description,
  priority,
  date,
}: TaskProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncateDescription = (text: string | null) => {
    if (!text) return "";
    if (text.length <= 50) return text;
    return text.slice(0, 50) + "...";
  };

  const checkPriority = (priority: string) => {
    switch (priority) {
      case "low":
        return "Low 👍";
      case "medium":
        return "Medium 👌";
      case "high":
        return "High 🚨";
      case "urgent":
        return "Urgent❗❗";
      default:
        return "No Priority";
    }
  };

  const dayCounter = (date: string) => {
    const today = new Date();
    const [day, month, year] = date.split("/").map(Number);
    const taskDate = new Date(year, month - 1, day);
    const diff = taskDate.getTime() - today.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if(days < 0) return "Task Overdue";
    return days;
  };

  return (
    <Card key={id} className="bg-slate-200 dark:bg-indigo-400 ">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-lg md:text-xl font-extrabold">
          {name}
        </CardTitle>
        <Badge>{checkPriority(priority)}</Badge>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-800">
          {showFullDescription ? description : truncateDescription(description)}
        </CardDescription>
        {description && description.length > 50 && (
          <Button
            variant="link"
            className="text-blue-500 p-0 hover:underline decoration-black transition-all"
            onClick={toggleDescription}
          >
            {showFullDescription ? (
              <p className="text-black">Read Less </p>
            ) : (
              <p className="text-black">Read More </p>
            )}
          </Button>
        )}
        <div className="flex justify-between">
          <p className="text-indigo-500 font-bold mt-3">
            Date:{" "}
            <span className="text-indigo-600">
              {new Date(
                date.split("/").reverse().join("-")
              ).toLocaleDateString()}
            </span>
          </p>
          <p className="text-indigo-500 font-bold mt-3">
            Days Left:{" "}
            <span className="text-indigo-600">{dayCounter(new Date(
                date.split("/").reverse().join("-")
              ).toLocaleDateString())}</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="">
          <Pencil className="w-4 h-4 mr-1" /> Edit
        </Button>
        <Button className="bg-red-500 hover:bg-red-800 transition-all text-white">
          <Trash className="w-4 h-4 mr-1 text-white" /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
};


