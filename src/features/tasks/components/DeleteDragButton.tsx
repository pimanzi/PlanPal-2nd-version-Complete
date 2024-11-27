import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ButtonDemo } from '@/ui/Button';
import { useTranslation } from 'react-i18next';
import { useDeleteTask } from '../useDeleteTask';
import { useState } from 'react';

export default function DeleteButton({ id }: { id: number }) {
  const { t } = useTranslation();
  const { isDeleting, deleteTasks } = useDeleteTask();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="px-0 py-0 border-none bg-transparent text-[var(--color-grey-500)] hover:text-red-500"
        >
          <RiDeleteBin6Line className="text-lg" />
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
              deleteTasks(id);
            }}
          ></ButtonDemo>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
