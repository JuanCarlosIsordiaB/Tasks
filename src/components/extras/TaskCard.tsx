'use client'
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
  date: string;
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
    const words = text.split(" ");
    if (words.length <= 15) return text;
    return words.slice(0, 15).join(" ") + "...";
  };

  return (
    <Card key={id} className="bg-slate-200 dark:bg-indigo-800 ">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-lg md:text-xl">{name}</CardTitle>
        <Badge>{priority}</Badge>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {showFullDescription ? description : truncateDescription(description)}
        </CardDescription>
        {description && description.split(" ").length > 15 && (
          <Button
            variant="link"
            className="text-blue-500 p-0"
            onClick={toggleDescription}
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </Button>
        )}
        <p>Date: {new Date(date).toLocaleDateString()}</p>
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

export default TaskCard;
