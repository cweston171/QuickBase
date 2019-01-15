import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as fieldActionCreators from './fields/actions'
import logo from './logo.svg'
import FieldBuilderUI from './components/builder-form'
import './App.css'
import { FieldSettings } from './models/builderModels'

interface Props {
  field: FieldSettings | undefined
  loadingField: boolean
  actions: any
}

class App extends Component<Props> {
  componentDidMount () {
    this.props.actions.getField('x')
  }

  render() {
    const { field, loadingField } = this.props

    const fieldForm = !loadingField 
      ? <FieldBuilderUI settings={undefined} title={'Field Builder'} />
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

const mstp = state => {
  const { fieldsReducer } = state
  return {
    field: fieldsReducer.fieldSettings,
    loadingField: fieldsReducer.loadingField,
  }
}

const mdtp = dispatch => {
  return {
    actions: bindActionCreators(fieldActionCreators, dispatch)
  }
}

export default connect(mstp,mdtp)(App)
