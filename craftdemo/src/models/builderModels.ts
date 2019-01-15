import { LabelValue } from './helperModels'

export enum InputTypes {
  email = 0,
  number = 1,
  text = 2,
  select = 3,
  multiSelect = 4
}

export enum MultiOrder {
  alphabetical = 0,
  reversed = 1,
}

export interface IGenericInput {
  label: string
  value?: string
  required: boolean
  type: number
}

export interface ISelect extends IGenericInput {
  multi: boolean
  options: LabelValue[]
  orderBy: number
}
