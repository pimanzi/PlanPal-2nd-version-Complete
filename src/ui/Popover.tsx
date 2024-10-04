import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AiFillEdit } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import { taskDataInterface } from "@/interfaces";

export function PopoverDemo({
  disabled,
  onConfirm,
}: {
  disabled: boolean;
  onConfirm: () => taskDataInterface[] | null | void;
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="rounded-sm border-none bg-transparent px-0 py-0 hover:bg-link-light-gray">
          <BsThreeDotsVertical className="w-6 hover:cursor-pointer" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-auto space-y-4 bg-white"
        side="right"
        sideOffset={4}
        align="start"
      >
        <div
          className="flex cursor-pointer items-center gap-2 px-2 py-1 hover:bg-custom-light-gray"
          onClick={handleClick} // Close popover on click
        >
          <AiFillEdit />
          <p>Update</p>
        </div>

        <Modal>
          <Modal.Open opens="confirmDelete">
            <div className="flex cursor-pointer items-center gap-2 px-2 py-1 hover:bg-custom-light-gray">
              <MdDelete fill="#dc2626" />
              <p className="font-inter font-medium text-red-600">Delete</p>
            </div>
          </Modal.Open>

          <Modal.Window opensName="confirmDelete">
            <ConfirmDelete
              resource="task"
              disabled={disabled}
              onConfirm={onConfirm}
            />
          </Modal.Window>
        </Modal>
      </PopoverContent>
    </Popover>
  );
}
