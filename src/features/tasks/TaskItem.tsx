import { FaRegCommentDots } from "react-icons/fa";
import { formatShortDate } from "../../utils/helpers";
import { TasksInterface } from "../../interfaces";
import useComments from "../comments/useComments";
import SmallSpinner from "../../ui/SmallSpinner";
import { PopoverDemo } from "@/ui/Popover";
import useDeleteTask from "./useDeleteTask";

interface taskInterface {
  task: TasksInterface;
}

function TaskItem({ task }: taskInterface) {
  const { isPending: isDeleting, deleteTask } = useDeleteTask();
  const { id: taskId, status, endDate, note, image, title } = task;
  const styleStatus = {
    "To do": "bg-bg-todo text-text-todo",
    "In Progress": "bg-bg-progress text-text-inProgress",
    Completed: "bg-bg-complete text-text-complete",
  };

  const { comment, isPending } = useComments(taskId);
  return (
    <div
      className={`flex flex-col gap-4 bg-white ${image ? "row-span-2" : ""} rounded-2xl px-6 pb-4 pt-6 transition-all duration-300 hover:translate-y-[-10px]`}
    >
      {image && <img src={image} alt="task" className="rounded-2xl" />}
      <div className="flex justify-between">
        <p
          className={`font-inter font-medium ${styleStatus[status]} rounded-lg px-2 py-1`}
        >
          {status}
        </p>
        <PopoverDemo
          disabled={isDeleting}
          onConfirm={() => deleteTask(taskId)}
        ></PopoverDemo>
      </div>

      <p className="font-inter text-xl font-bold">{title}</p>
      <p className="font-inter text-stone-600">{note}</p>
      <hr />

      <div className="flex justify-between">
        <p className="font-inter font-normal">
          Due, {formatShortDate(endDate)}
        </p>
        <div className="comment flex items-center gap-2 hover:cursor-pointer hover:bg-link-light-gray">
          <FaRegCommentDots className="w-6" />
          <div>
            {isPending ? (
              <SmallSpinner></SmallSpinner>
            ) : comment ? (
              comment.length
            ) : (
              0
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
