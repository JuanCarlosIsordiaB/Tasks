import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "./date-picker"; // Importar el componente DatePicker
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export function TaskForm() {
  const createTask = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const priority = formData.get("priority") as string;
    const date = formData.get("date") as string;

    console.log({ name, description, priority, date });
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          Create a new <span className="text-indigo-500">Task</span>
        </CardTitle>
        <CardDescription>
          Add your <span className="text-indigo-500">task</span> and manage them.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="" action={createTask}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" placeholder="Name of your task" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea name="description" id="description" placeholder="Description of your task" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority">
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select" className="text-gray-500" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low" className="text-gray-500">Low</SelectItem>
                  <SelectItem value="medium" className="text-gray-500">Medium</SelectItem>
                  <SelectItem value="high" className="text-gray-500">High</SelectItem>
                  <SelectItem value="urgent" className="text-gray-500">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Limit Date</Label>
              <DatePicker name="date" /> 
            </div>
          </div>
          <CardFooter className="flex justify-between space-y-1.5">
            <Link href="/" type="button" className="border p-2 rounded-md">Cancel</Link>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-800 transition-all text-white">Create</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
