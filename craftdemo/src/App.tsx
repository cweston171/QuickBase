import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as fieldActionCreators from './fields/actions'
import { FieldSettings } from './models/builderModels'
import FieldBuilderUI from './components/builder-form'
import './App.css'

interface Props {
  field: FieldSettings | undefined
  loadingField: boolean
  savingField: boolean
  getField (id: string): any
  saveField (req: FieldSettings): any
}

class App extends Component<Props> {
  componentDidMount () {
    this.props.getField('x')
  }

  render() {
    const { field, loadingField, savingField } = this.props

    const fieldForm = !loadingField 
      ? (
        <FieldBuilderUI 
          settings={field}
          title={'Field Builder'}
          saving={savingField}
          updateField={this.props.saveField}
        />
      )
      : <div>Loading...</div>

    return (
      <div className="App">
        <header className="App-header">
          Chase Weston
          <br/>
          <span style={{fontSize: '.75em'}}>Senior Frontend Engineer | Craft Demo</span>
        </header>
        {fieldForm}
      </div>
    );
  }
}

const mstp = (state: any) => {
  const { fieldsReducer } = state
  return {
    field: fieldsReducer.fieldSettings,
    loadingField: fieldsReducer.loadingField,
    savingField: fieldsReducer.savingField
  }
}

const mdtp = (dispatch: any) => {
  return {
    getField: bindActionCreators(fieldActionCreators.getFieldSettings, dispatch),
    saveField: bindActionCreators(fieldActionCreators.saveFieldSettings, dispatch)
  }
}

export default connect(mstp,mdtp)(App)
