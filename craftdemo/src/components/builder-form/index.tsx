import * as React from 'react'
import {
  Row, 
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import FormSettings, {
  IGenericInput, 
  ISelect, 
  InputTypes, 
  MultiOrder
} from '../../models/builderModels'
import { LabelValue } from '../../models/helperModels'
import buildFormRow from '../../helpers/form-row-builder'
import './index.scss'

interface Props {
  settings: IGenericInput | ISelect | undefined
  title: string
}

interface State {
  settings: IGenericInput | ISelect
  isValid: boolean
}

class FieldBuilderUI extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      settings: props.settings || FormSettings.NewGenericInputSettings(),
      isValid: false
    }
  }

  componentDidMount () {
    // retrieve options if settings have a config id
  }

  componentDidUpdate (prevProps: Props) {
    // do update if needed
  }

  validateForm = () => {
    // validate builder form
  }

  handleInputChange = (name: string, value: any) => {
    // handle input change
    this.setState(
      (prevState) => Object.assign({}, prevState, {[name]: value}), 
      () => { this.validateForm() }
    )
  }

  handleCancel = () => {}

  handleSubmit = () => {}

  render () {
    const { title } = this.props
    const { settings } = this.state
    
    const basicForm = (
      <>
      {buildFormRow('Label', 'settings.label', settings.label)}
      {buildFormRow('Type', 'settings.type', settings.type)}
      {buildFormRow('', 'settings.required', settings.required, InputTypes.select)}
      {buildFormRow('Default Value', 'settings.value', settings.value || '')}
      </>
    )

    return (
      <Row>
        <Col xs={12} sm={{ size: 6, offset: 3 }} className="field-builder">
          <div className="builder-title">{title}</div>
          <div className="builder-content">
            <Form>
              {basicForm}
            </Form>
          </div>
        </Col>
      </Row>
    )
  }
}

export default FieldBuilderUI
