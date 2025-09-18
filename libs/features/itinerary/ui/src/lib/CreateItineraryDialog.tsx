"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  CustomDialogHeader,
  Input,
  Textarea,
} from '@travel-drop/ui';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createItinerarySchema,
  createItinerarySchemaType,
} from "@travel-drop/features-itinerary-schemas";
import { useState, useCallback } from 'react';
import { useMutation } from "@tanstack/react-query";
import { toast } from 'sonner';
import { Layers2Icon, Loader2 } from 'lucide-react';
import { CreateItinerary } from "@travel-drop/features-itinerary-actions";


export function CreateItineraryDialog({ triggerText }: { triggerText: string }) {
  const [open, setOpen] = useState(false);
  const form = useForm<createItinerarySchemaType>({
    resolver: zodResolver(createItinerarySchema),
    defaultValues: {},
  });

  const { mutate, isPending } = useMutation({
    mutationFn: CreateItinerary,
    onSuccess: () => {
      toast.success("Itinerary created", { id: "create-itinerary" });
      setOpen(false);
    },
    onError: (error: unknown) => {
      if (
        error instanceof Error &&
        error.message.includes("already exists")
      ) {
        toast.error("You already have an itinerary with this title.", { id: "create-itinerary" });
      } else {
        toast.error("Failed to create itinerary", { id: "create-itinerary" });
      }
    },
  });

  const onSubmit = useCallback(
    (values: createItinerarySchemaType) => {
      toast.loading("Creating itinerary...", { id: "create-itinerary" });
      mutate(values);
    },
    [mutate],
  );

  return (
    <Dialog open={open} onOpenChange={(open) => {
      form.reset();
      setOpen(open);
    }}>
      <DialogTrigger asChild>
        <Button>{triggerText ?? "Create itinerary"}</Button>
      </DialogTrigger>
      <DialogContent className="px-0">
        <CustomDialogHeader
          icon={Layers2Icon}
          title="Create Itinerary"
          subtitle="Start building your itinerary"
        />
        <div className="p-6">
          <Form {...form}>
            <form
              className="space-y-8 w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      Title
                      <p className="text-xs text-primary">(required)</p>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Chose a descriptive and unique title.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      Description
                      <p className="text-xs text-muted-foreground">
                        (optional)
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Textarea className="resize-none" {...field} />
                    </FormControl>
                    <FormDescription>
                      Provide a brief description of what this itinerary does.
                      <br /> This is optional but can help you remember the
                      itinerary&apos;s purpose.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      Start Date
                      <p className="text-xs text-primary">(required)</p>
                    </FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormDescription>
                      Select the start date of the itinerary.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      End Date
                      <p className="text-xs text-primary">(required)</p>
                    </FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormDescription>
                      Select the end date of the itinerary.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                {!isPending && "Proceed"}
                {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
