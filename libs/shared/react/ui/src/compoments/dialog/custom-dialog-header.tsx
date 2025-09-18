'use client';

import { DialogHeader, DialogTitle } from '../shadcn/dialog';
import { Separator } from '../shadcn/separator';
import { cn } from '@travel-drop/utils';
import { LucideIcon } from 'lucide-react';

interface Props {
  title?: string;
  subtitle?: string;
  icon?: LucideIcon;

  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function CustomDialogHeader(props: Props) {
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2">
          {props.icon && (
            <props.icon
              size={30}
              className={cn('stroke-primary', props.iconClassName)}
            />
          )}
          {props.title && (
            <p className={cn('text-xl text-primary', props.titleClassName)}>
              {props.title}
            </p>
          )}
          {props.subtitle && (
            <p
              className={cn(
                'text-sm text-muted-foreground',
                props.subtitleClassName
              )}
            >
              {props.subtitle}
            </p>
          )}
        </div>
      </DialogTitle>
      <Separator />
    </DialogHeader>
  );
}
