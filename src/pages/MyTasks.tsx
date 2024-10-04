import { useState } from "react";
import TasksHeader from "../features/tasks/TasksHeader";
import { useTasks } from "../features/tasks/useTasks";
import { filterInterface } from "../interfaces";
import Filter from "../ui/Filter";
import Spinner from "../ui/Spinner";
import Grid from "../ui/Grid";
import TaskItem from "../features/tasks/TaskItem";

export default function MyTasks() {
  const { data, isPending } = useTasks();
  const [active, setActive] = useState<string>("all");
  const displayItemsNumber: filterInterface = {
    all: data ? data.length : 0,
    completed: data
      ? data.filter((task) => task.status == "Completed").length
      : 0,
    inProgress: data
      ? data.filter((task) => task.status == "In Progress").length
      : 0,

    toDo: data ? data.filter((task) => task.status == "To do").length : 0,
  };
  const displayTasks = data
    ? data.some((tasks) => tasks.status == active)
      ? data.filter((tasks) => tasks.status == active)
      : data
    : [];

  if (isPending) return <Spinner></Spinner>;

  return (
    <div className="space-y-7 pb-10 pl-[70px] pr-[100px] pt-10">
      <TasksHeader></TasksHeader>
      <Filter
        displayItemNumber={displayItemsNumber}
        active={active}
        setActive={setActive}
        type="personal"
      ></Filter>

      <Grid>
        {displayTasks.map((task) => (
          <TaskItem key={task.id} task={task}></TaskItem>
        ))}
      </Grid>
    </div>
  );
}
