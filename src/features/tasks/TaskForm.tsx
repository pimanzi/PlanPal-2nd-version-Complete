import { taskDataInterface } from "@/interfaces";
import { DatePicker } from "@/ui/DatePicker";

import { useState } from "react";
import { useForm } from "react-hook-form";
import useCreateTask from "./useCreateTask";

export default function TaskForm({ onClose }: { onClose: () => void }) {
  const { createTask, isPending } = useCreateTask();
  const { register, handleSubmit, reset, formState, getValues } =
    useForm<taskDataInterface>();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const { errors } = formState;

  function onSubmit(data: taskDataInterface) {
    if (!startDate || !endDate) return;
    const realData = { ...data, startDate, endDate };
    createTask(realData);
    reset();
    onClose();
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-[50%] flex-col gap-2">
        <input
          {...register("title", {
            required: "This field is required",
          })}
          type="text"
          placeholder="Task Title"
          className="rounded-sm border bg-stone-200 px-2 py-1 font-inter text-stone-600 transition-all duration-300 placeholder:font-inter placeholder:font-medium placeholder:text-stone-600 focus:rounded-sm focus:bg-stone-100 focus:px-4 focus:py-1 focus:outline-none focus:ring focus:ring-second-main-color"
        />
        {errors.title?.message ? (
          <span className="font-inter font-medium text-red-500">
            {errors.title.message}
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="flex w-[50%] flex-col gap-2">
        <input
          {...register("note", {
            required: "This field is required",
          })}
          type="text"
          placeholder="Your Note"
          className="rounded-sm border bg-stone-200 px-2 py-1 font-inter text-stone-600 transition-all duration-300 placeholder:font-inter placeholder:font-medium placeholder:text-stone-600 focus:rounded-sm focus:bg-stone-100 focus:px-4 focus:py-1 focus:outline-none focus:ring focus:ring-second-main-color"
        />
        {errors.note?.message ? (
          <span className="font-inter font-medium text-red-500">
            {errors.note.message}
          </span>
        ) : (
          ""
        )}
      </div>

      <div>
        <DatePicker
          date={startDate}
          setDate={setStartDate}
          placeholder="Select Start Date"
        />
      </div>

      <div>
        <DatePicker
          date={endDate}
          setDate={setEndDate}
          placeholder="Select End Date"
        />
      </div>

      <div>
        <input type="hidden" value="personal" {...register("type")}></input>
      </div>

      <div className="gep-2 flex w-[50%] flex-col">
        <select
          className="w-[180px] rounded-sm border px-2 py-1 font-inter font-medium focus:outline-none focus:ring focus:ring-second-main-color"
          {...register("status", { required: "Please select a status" })}
        >
          <option value="" disabled selected>
            Task Status
          </option>
          <option value="To do"> To do</option>
          <option value="In Progress">In Progress</option>
        </select>

        {errors.status?.message ? (
          <span className="font-inter font-medium text-red-500">
            {errors.status.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="rounded-sm bg-second-main-color px-2 py-1 font-inter font-medium text-white"
        >
          Submit Task
        </button>

        <button
          type="reset"
          className="rounded-sm bg-gray-200 px-2 py-1 font-inter font-medium hover:bg-gray-100"
        >
          {" "}
          Clear Task
        </button>
      </div>
    </form>
  );
}
