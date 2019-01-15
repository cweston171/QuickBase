import * as React from 'react'
import {
  IGenericInput, 
  ISelect, 
  InputTypes, 
  MultiOrder
} from '../../models/builderModels'

interface Props {
  settings: IGenericInput | ISelect
}

interface State {
  settings: IGenericInput | ISelect
}

class FormBuilder {
  public static NewGenericInputSettings = (): IGenericInput => {
    return {
      label: '',
      required: false,
      type: InputTypes.text,
      value: undefined,
    }
  }
  public static NewSelectInputSettings = (multi: boolean = false): ISelect => {
    return {
      label: '',
      multi,
      options: [],
      orderBy: MultiOrder.alphabetical,
      required: false,
      type: multi ? InputTypes.multiSelect : InputTypes.select,
      value: undefined
    }
  }
}

class BuilderFormUI extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      settings: FormBuilder.NewGenericInputSettings()
    }
  }

  render () {
    return (
      <div>
        ...form
      </div>
    )
  }
}

export default BuilderFormUI
