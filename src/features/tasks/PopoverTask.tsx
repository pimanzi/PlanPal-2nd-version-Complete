import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { ButtonDemo } from '@/ui/Button';
import { useDeleteTask } from './useDeleteTask';
import { useMarkComplete } from './useMarkComplete';
import { useMarkInProgress } from './useMarkInProgress';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export function PopoverTask({
  taskId,
  status,
}: {
  taskId: number;
  status: string;
}) {
  const { isDeleting, deleteTasks } = useDeleteTask();
  const [open, setOpen] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { markComplete, isMarkingComplete } = useMarkComplete();
  const { markInProgress, isMarkingInProgress } = useMarkInProgress();
  const { t } = useTranslation();

  async function handleComplete(id: number) {
    console.log(id);
    markComplete(id);
  }

  function handleInProgress(id: number) {
    markInProgress(id, {
      onSuccess: () =>
        toast.success(
          status === 'completed'
            ? t('toastToProgressFromComplete')
            : t('toastToProgress')
        ),
    });
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button className="rounded-md px-1  border-none bg-transparent   py-0 hover:bg-[var(--color-light-black)]">
          <BsThreeDotsVertical color="var(--color-grey-500)"></BsThreeDotsVertical>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-fit bg-[var(--color-grey-0)] text-[var(--color-text-main)]"
        side="right"
        sideOffset={4}
        align="start"
      >
        <div
          onClick={() => setOpen(false)}
          className="flex cursor-pointer items-center gap-2 hover:bg-[var(--color-light-black)] px-2 py-2 w-full"
        >
          <AiFillEdit />
          {status === 'completed' && (
            <button
              disabled={isMarkingInProgress}
              onClick={() => handleInProgress(taskId)}
            >
              {t('backToProgressStatus')}
            </button>
          )}
          {status === 'inProgress' && (
            <button
              onClick={() => handleComplete(taskId)}
              disabled={isMarkingComplete}
            >
              {t('toCompleteStatus')}
            </button>
          )}
          {status === 'toDo' && (
            <button onClick={() => handleInProgress(taskId)}>
              {t('toInProgressStatus')}
            </button>
          )}
        </div>

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="px-0 py-0 border-none w-full bg-[var(--color-grey-0)] text-[var(--color-text-main)] hover:bg-[var(--color-bg-main)]"
            >
              {' '}
              <div className=" hover:border-none flex cursor-pointer items-center gap-2 hover:bg-[var(--color-light-black)] px-2 py-2 w-full text-[var(--color-text-main)] ">
                <MdDelete />
                <p>{t('deleteTask')}</p>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-[var(--color-bg-main)]">
            <DialogHeader>
              <DialogTitle className="text-[var(--color-text-main)]">
                {t('deleteTitle')}
              </DialogTitle>
              <DialogDescription className="text-[var(--color-grey-500)]">
                {t('deleteDescription')}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex gap-2 justify-end items-center">
              <Button
                onClick={() => setOpenDialog(false)}
                className="w-[30%] bg-[var(--color-grey-0)] hover:bg-[var(--color-light-black)] border border-stone-300 active:border-[var(--border-color-hover)] text-[var(--color-text-main)]"
              >
                {t('cancelDelete')}
              </Button>
              <ButtonDemo
                type="danger"
                label={t('confirmDelete')}
                disabled={isDeleting}
                onClick={() => {
                  deleteTasks(taskId);
                  setOpenDialog(false);
                  setOpen(false);
                }}
              ></ButtonDemo>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </PopoverContent>
    </Popover>
  );
}
