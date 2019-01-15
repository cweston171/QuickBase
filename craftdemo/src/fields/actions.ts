import { FieldSettings } from '../models/builderModels'
/**
 * GET FIELD SETTINGS
 */
export const GET_FIELD_SETTINGS = '[Field] Get Field Settings'
export type GET_FIELD_SETTINGS = typeof GET_FIELD_SETTINGS

export type getFieldSettings = {
  type: GET_FIELD_SETTINGS,
  payload: string
}
export const getFieldSettings = (req: string): getFieldSettings => ({
  type: GET_FIELD_SETTINGS,
  payload: req
})

export const GET_FIELD_SETTINGS_SUCCESS = '[Field] Get Field Settings - Success'
export type GET_FIELD_SETTINGS_SUCCESS = typeof GET_FIELD_SETTINGS_SUCCESS

export type getFieldSettingsSuccess = {
  type: GET_FIELD_SETTINGS_SUCCESS,
  payload: FieldSettings
}
export const getFieldSettingsSuccess = (resp: FieldSettings): getFieldSettingsSuccess => ({
  type: GET_FIELD_SETTINGS_SUCCESS,
  payload: resp
})

export const GET_FIELD_SETTINGS_FAILURE = '[Field] Get Field Settings - Fail'
export type GET_FIELD_SETTINGS_FAILURE = typeof GET_FIELD_SETTINGS_FAILURE

export type getFieldSettingsFail = {
  type: GET_FIELD_SETTINGS_FAILURE
}
export const getFieldSettingsFail = (): getFieldSettingsFail => ({
  type: GET_FIELD_SETTINGS_FAILURE
})

/**
 * SAVE FIELD SETTINGS
 */
export const SAVE_FIELD_SETTINGS = '[Field] Save Settings'
export type SAVE_FIELD_SETTINGS = typeof SAVE_FIELD_SETTINGS

export type saveFieldSettings = {
  type: SAVE_FIELD_SETTINGS,
  payload: FieldSettings
}
export const saveFieldSettings = (req: FieldSettings): saveFieldSettings => ({
  type: SAVE_FIELD_SETTINGS,
  payload: req
})

export const SAVE_FIELD_SETTINGS_SUCCESS = '[Field] Save Settings -- Success'
export type SAVE_FIELD_SETTINGS_SUCCESS = typeof SAVE_FIELD_SETTINGS_SUCCESS

export type saveFieldSettingsSuccess = {
  type: SAVE_FIELD_SETTINGS_SUCCESS,
  payload: FieldSettings
}
export const saveFieldSettingsSuccess = (resp: FieldSettings): saveFieldSettingsSuccess => ({
  type: SAVE_FIELD_SETTINGS_SUCCESS,
  payload: resp
})

export const SAVE_FIELD_SETTINGS_FAIL = '[Field] Save Field Settings -- Fail'
export type SAVE_FIELD_SETTINGS_FAIL = typeof SAVE_FIELD_SETTINGS_FAIL

export type saveFieldSettingsFail = {
  type: SAVE_FIELD_SETTINGS_FAIL,
}
export const saveFieldSettingsFail = (): saveFieldSettingsFail => ({
  type: SAVE_FIELD_SETTINGS_FAIL
})