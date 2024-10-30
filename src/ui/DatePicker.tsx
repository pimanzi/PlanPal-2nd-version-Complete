import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

interface DatePickerUiProps {
  label: string;
  value: Date | undefined; // Current selected date
  onChange: (date: Date | undefined) => void; // Function to handle date changes
}

export function DatePickerUi({ label, value, onChange }: DatePickerUiProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            '  w-full text-sm justify-start text-left font-normal border border-[var(--color-stone-100)]',
            'hover:text-[var(--color-grey-500)] hover:bg-[var(--color-bg-main)]',
            'bg-[var(--color-grey-0)] text-[var(--color-grey-500)]',
            !value && 'text-muted-foreground',
            'truncate'
          )}
        >
          {!value && <CalendarIcon className="mr-1" />}
          {value ? format(value, 'PPP') : <span>{label}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-[var(--color-grey-0)] text-[var(--color-text-main)]">
        <Calendar
          className="text-[--color-grey-500]"
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange(date);
            setIsOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
