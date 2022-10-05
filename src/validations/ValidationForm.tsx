import * as zod from "zod";

export const newCylceFormSchema = zod.object({
  task: zod.string().min(2, "inform the task"),
  minutesAmount: zod
    .number()
    .min(5, "Cycles must be a minimum of 5 minutes")
    .max(60, "Cycles must be a maximum of 60 minutes"),
});

export type NewCycleFormData = zod.infer<typeof newCylceFormSchema>;