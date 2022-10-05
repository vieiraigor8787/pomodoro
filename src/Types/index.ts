import { ReactNode } from "react"

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export interface CreateCycleData {
  task: string
  minutesAmount: number
}

export interface CyclesContextProviderProps {
  children: ReactNode
}

export interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

