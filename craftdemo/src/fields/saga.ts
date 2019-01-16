import { call, put, takeLatest } from 'redux-saga/effects'
import FieldService from './services'
import * as actions from './actions'

/**
 * GET CHARACTERS
 */
export function* getFieldSettings(action: actions.getFieldSettings) {
  try {
    const resp = yield call(FieldService.getFieldSettings, action.payload)
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
    console.log('Field Settings submitted: ', action.payload)
    console.log(`Transaction Status: ${resp.data.status}`)
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