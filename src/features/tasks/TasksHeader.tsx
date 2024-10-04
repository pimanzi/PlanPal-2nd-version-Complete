import { BsDot } from "react-icons/bs";
import { useTasks } from "./useTasks";

function TasksHeader() {
  const { isPending, data } = useTasks();
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <h2 className="font-inter text-4xl font-bold">My Task List</h2>
        <p className="font-inter text-lg text-stone-600">
          Stay focused{" "}
          <span className="text-second-main-color">on your goals!</span>
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="self-end font-inter font-semibold"> From, sep 22</p>
        <p className="flex items-center font-inter text-stone-500">
          <BsDot className="inline-block" fill="#54d51d"></BsDot>{" "}
          <span>Last Created, Dec 25</span>
        </p>
      </div>
    </div>
  );
}

export default TasksHeader;
