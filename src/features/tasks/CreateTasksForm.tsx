import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ButtonDemo } from '@/ui/Button';
import { DatePickerUi } from '@/ui/DatePicker';
import { SelectForm } from '@/ui/SelectForm';
import { TextareaUi } from '@/ui/TextArea';
import { HiPlus } from 'react-icons/hi2';
import { useCreateTask } from './useCreateTasks';
import { useTranslation } from 'react-i18next';

export interface FormData {
  title: string;
  startDate: Date;
  endDate: Date;
  note: string;
  status: string;
  image?: FileList; // Optional, as image is not required
}

export function CreateTask() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { createTask, isCreating } = useCreateTask();
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  // Use watch to monitor image input
  const imageFile = watch('image')?.[0];

  const onSubmit = (data: FormData) => {
    const transformedData = {
      ...data,
      startDate: data.startDate.toISOString(),
      endDate: data.endDate.toISOString(),
      image: data.image?.[0] || undefined,
    };
    createTask(transformedData, {
      onSuccess: () => {
        setOpen(false);
        onClear();
      },
    });
  };

  function onClear() {
    reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ButtonDemo
          type="normal"
          icon={HiPlus}
          label={t('createTaskButton')}
          onClick={() => setOpen(true)}
        />
      </DialogTrigger>
      <DialogContent className="w-fit bg-[var(--color-grey-0)] border border-[var(--color-grey-0)]">
        <DialogHeader>
          <DialogTitle>{t('formTitle')}</DialogTitle>
          <DialogDescription>{t('formDescription')}</DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              id="title"
              placeholder={t('titleInput')}
              type="text"
              disabled={isCreating}
              {...register('title', { required: t('titleInputAlert') })}
            />
            {errors.title && (
              <span className="text-red-500 text-xs">
                {errors.title.message}
              </span>
            )}
          </div>
          <div>
            <Controller
              name="note"
              rules={{ required: t('noteAreaAlert') }}
              control={control}
              render={({ field }) => (
                <TextareaUi
                  {...field}
                  value={field.value}
                  disabled={isCreating}
                ></TextareaUi>
              )}
            ></Controller>

            {errors.note && (
              <span className="text-red-500 text-xs">
                {errors.note.message}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <div className="flex-col flex w-[50%]">
              <Controller
                name="startDate"
                control={control}
                rules={{ required: t('startDateInputAlert') }}
                render={({ field }) => (
                  <DatePickerUi label={t('startDateInput')} {...field} />
                )}
              />
              {errors.startDate && (
                <span className="text-red-500 text-xs">
                  {errors.startDate.message}
                </span>
              )}
            </div>
            <div className="flex-col flex w-[50%]">
              <Controller
                name="endDate"
                control={control}
                rules={{ required: t('endDateInputAlert') }}
                render={({ field }) => (
                  <DatePickerUi label={t('endDateInput')} {...field} />
                )}
              />
              {errors.endDate && (
                <span className="text-red-500 text-xs">
                  {errors.endDate.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex file-inputflex w-full rounded-md border focus:border-transparent border-[var(--color-stone-100)] bg-[var(--color-grey-0)] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-700)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <label htmlFor="image" className="">
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="image"
                {...register('image')}
                disabled={isCreating}
              />
              <span>{imageFile?.name || t('imageInput')}</span>
            </label>
          </div>
          <div>
            <Controller
              name="status"
              control={control}
              rules={{ required: t('selectStatusAlert') }}
              render={({ field }) => (
                <SelectForm
                  {...field}
                  onChange={field.onChange}
                  disabled={isCreating}
                />
              )}
            />
            {errors.status && (
              <span className="text-red-500 text-xs">
                {errors.status.message}
              </span>
            )}
          </div>

          <DialogFooter className="flex gap-2">
            <Button
              disabled={isCreating}
              onClick={onClear}
              type="reset"
              className=" w-fit bg-transparent hover:bg-[var(--color-light-black)] border border-stone-300 active:border-[var(--border-color-hover)] text-[var(--color-text-main)]"
            >
              {t('clearForm')}
            </Button>
            <Button
              disabled={isCreating}
              type="submit"
              className="w-fit px-2 bg-[var(--border-color-hover)] text-white hover:bg-[var(--border-color-hover)] hover:scale-x-105 hover:scale-y-105 transition-all duration-300"
            >
              {t('submitForm')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
