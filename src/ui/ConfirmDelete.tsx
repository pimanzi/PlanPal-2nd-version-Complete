import { taskDataInterface } from "@/interfaces";

function ConfirmDelete({
  resource,
  onConfirm,
  disabled,
  onClose,
}: {
  resource: string;
  onConfirm: () => taskDataInterface[] | null | void;
  disabled: boolean;
  onClose?: () => void;
}) {
  return (
    <div className="flex w-96 flex-col gap-4 p-4">
      <h2 className="text-lg font-semibold">Delete {resource}</h2>
      <p className="text-gray-500">
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div className="flex justify-start gap-4">
        <button
          onClick={onClose}
          className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className={`rounded px-4 py-2 ${
            disabled
              ? "cursor-not-allowed bg-red-300"
              : "bg-red-600 hover:bg-red-700"
          } text-white`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
