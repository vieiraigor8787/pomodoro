import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">I will work in:</label>
      <TaskInput
        id="task"
        placeholder="Give a name to your project"
        {...register("task")}
        disabled={!!activeCycle}
      />

      <label htmlFor="minutsAmount">During</label>
      <MinutesAmountInput
        id="minutsAmount"
        type="number"
        placeholder="05"
        step="5"
        min="5"
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}
