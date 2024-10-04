import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdSort } from "react-icons/md";
import { filterNumber } from "../interfaces";
import Modal from "./Modal";
import TaskForm from "@/features/tasks/TaskForm";

function Filter({ displayItemNumber, active, setActive, type }: filterNumber) {
  const [hovered, setHovered] = useState("");
  const { toDo, completed, inProgress, all } = displayItemNumber;
  return (
    <div className="flex justify-between rounded-3xl bg-white px-7 py-3 pt-4">
      {/* Overview */}
      <div className="flex gap-6">
        {" "}
        <div
          className={
            active == "all"
              ? "task-item-active flex items-center gap-2 hover:cursor-pointer"
              : "task-item flex items-center gap-2 hover:cursor-pointer"
          }
          onMouseOver={() => setHovered("all")}
          onMouseOut={() => setHovered("")}
          onClick={() => setActive("all")}
        >
          <p
            className={
              hovered == "all" || active == "all"
                ? "font-inter font-semibold text-second-main-color"
                : "font-inter text-stone-600"
            }
          >
            All Tasks
          </p>
          <div
            className={
              hovered == "all" || active == "all"
                ? "rounded-full bg-link-light-gray px-1 py-1 font-semibold text-second-main-color"
                : "rounded-full bg-stone-50 px-1 py-1 text-stone-600"
            }
          >
            {all}
          </div>
        </div>
        <div
          className={
            active == "To do"
              ? "task-item-active flex items-center gap-2 hover:cursor-pointer"
              : "task-item flex items-center gap-2 hover:cursor-pointer"
          }
          onMouseOver={() => setHovered("To do")}
          onMouseOut={() => setHovered("")}
          onClick={() => setActive("To do")}
        >
          <p
            className={
              hovered == "To do" || active == "To do"
                ? "font-inter font-semibold text-second-main-color hover:cursor-pointer"
                : "font-inter text-stone-600 hover:cursor-pointer"
            }
          >
            To do
          </p>
          <div
            className={
              hovered == "To do" || active == "To do"
                ? "rounded-full bg-link-light-gray px-1 py-1 font-semibold text-second-main-color"
                : "rounded-full bg-stone-50 px-1 py-1 text-stone-600"
            }
          >
            {toDo}
          </div>
        </div>
        <div
          className={
            active == "In Progress"
              ? "task-item-active flex items-center gap-2 hover:cursor-pointer"
              : "task-item flex items-center gap-2 hover:cursor-pointer"
          }
          onMouseOver={() => setHovered("In Progress")}
          onMouseOut={() => setHovered("")}
          onClick={() => setActive("In Progress")}
        >
          <p
            className={
              hovered == "In Progress" || active == "In Progress"
                ? "font-inter font-semibold text-second-main-color"
                : "font-inter text-stone-600"
            }
          >
            In Progress
          </p>
          <div
            className={
              hovered == "In Progress" || active == "In Progress"
                ? "rounded-full bg-link-light-gray px-1 py-1 font-semibold text-second-main-color"
                : "rounded-full bg-stone-50 px-1 py-1 text-stone-600"
            }
          >
            {inProgress}
          </div>
        </div>
        <div
          className={
            active == "Completed"
              ? "task-item-active flex items-center gap-2 hover:cursor-pointer"
              : "task-item flex items-center gap-2 hover:cursor-pointer"
          }
          onMouseOver={() => setHovered("Completed")}
          onMouseOut={() => setHovered("")}
          onClick={() => setActive("Completed")}
        >
          <p
            className={
              hovered == "Completed" || active == "Completed"
                ? "font-inter font-semibold text-second-main-color"
                : "font-inter text-stone-600"
            }
          >
            Completed
          </p>
          <div
            className={
              hovered == "Completed" || active == "Completed"
                ? "rounded-full bg-link-light-gray px-1 py-1 font-semibold text-second-main-color"
                : "rounded-full bg-stone-50 px-1 py-1 text-stone-600"
            }
          >
            {completed}
          </div>
        </div>
      </div>

      {/* operations */}
      <div className="flex gap-6">
        {" "}
        <div className="flex items-center gap-2 rounded-xl border-2 border-stone-200 px-2 py-1">
          <MdSort></MdSort>
          <button className="font-inter text-stone-600">Filter & Sort</button>
        </div>
        <Modal>
          <Modal.Open opens="taskForm">
            <div className="taskButton flex items-center gap-2 rounded-xl border-2 border-stone-200 px-2 py-1 hover:bg-second-main-color active:bg-main-shadow">
              <AiOutlinePlus></AiOutlinePlus>
              <button className="font-inter text-stone-600">New Task</button>
            </div>
          </Modal.Open>

          <Modal.Window opensName="taskForm">
            <TaskForm></TaskForm>
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Filter;
