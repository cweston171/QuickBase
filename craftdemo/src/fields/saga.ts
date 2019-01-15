import { call, put, takeLatest } from 'redux-saga/effects'
import FieldService from './services'
import * as actions from './actions'

/**
 * GET CHARACTERS
 */
export function* getFieldSettings(action: actions.getFieldSettings) {
  try {
    console.log('saga action.data:', action.payload)
    const resp = yield call(FieldService.getFieldSettings, action.payload)
    console.log('resp', resp)
    yield put(actions.getFieldSettingsSuccess(resp))
  } catch (ex) {
    console.log(ex)
    yield put(actions.getFieldSettingsFail())
  }
}

/**
 * SAVE CHARACTER
 */
export function* saveFieldSettings(action: actions.saveFieldSettings) {
  try {
    const resp = yield call(FieldService.saveField, action.payload)
    yield put(actions.saveFieldSettingsSuccess(action.payload))
  } catch (ex) {
    console.log(ex)
    yield put(actions.saveFieldSettingsFail())
  }
}

export function* charactersSaga() {
  yield takeLatest(actions.GET_FIELD_SETTINGS, getFieldSettings)
  yield takeLatest(actions.SAVE_FIELD_SETTINGS, saveFieldSettings)
}