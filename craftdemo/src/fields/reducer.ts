import * as types from './actions'
import { FieldSettings } from '../models/builderModels'

interface State {
  fieldSettings: FieldSettings | undefined
  loadingField: boolean
  savingField: boolean
}

const initialState: State = {
  fieldSettings: undefined,
  loadingField: false,
  savingField: false,
}

function fieldsReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.GET_FIELD_SETTINGS:
      return {
        ...state,
        fieldSettings: undefined,
        loadingField: true
      }

    case types.GET_FIELD_SETTINGS_SUCCESS:
      console.log('reducer', action.payload)
      return {
       ...state,
       fieldSettings: action.payload,
       loadingField: false
      }

    case types.SAVE_FIELD_SETTINGS:
      return {
        ...state,
        savingField: true
      }

    default:
      return state
  }
}

export default fieldsReducer
