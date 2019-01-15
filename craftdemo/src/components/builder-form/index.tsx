import * as React from 'react'
import {
  Row, 
  Col,
  Form,
  Input,
  Button
} from 'reactstrap'
import {
  FieldSettings
} from '../../models/builderModels'
import FormGroupHoc from '../../helpers/form-group-hoc'
import './index.scss'

interface Props {
  settings: FieldSettings | undefined
  title: string
}

interface State extends FieldSettings {
  labelValid: boolean
  formValid: boolean
}

class FieldBuilderUI extends React.Component<Props, State> {
  readonly initialState: State = {
    choices: [],
    displayAlpha: true,
    label: '',
    required: true,
    type: 'multi-select',
    value: '',
    labelValid: false,
    formValid: false
  }
  constructor (props: Props) {
    super(props)
    this.state = this.initialState
  }

  validateForm = () => {
    // validate builder form
    const { label } = this.state
    const labelValid = label.length > 0
    this.setState(
      (prevState) => Object.assign({}, prevState, {
        labelValid,
        formValid: labelValid
      })
    )
  }

  handleInputChange = (name: string, value: any) => {
    // handle input change
    this.setState(
      (prevState) => Object.assign({}, prevState, ({[name]: value})), 
      () => { this.validateForm() }
    )
  }

  handleCancel = () => {
    this.setState(
      (prevState) => this.initialState,
      () => { this.validateForm() }
    )
  }

  handleSubmit = () => {}

  render () {
    const { title } = this.props

    const labelError = !this.state.labelValid ? (
      <div className={'text-danger'}>A label is required</div>
    ) : null
    
    const form = (
      <>
      <FormGroupHoc label="Label" name="label">
        <Input 
          type="text"
          name="label"
          value={this.state.label}
          onChange={(e) => { this.handleInputChange('label', e.target.value) }}
          required
        />
        {labelError}
      </FormGroupHoc>
      <FormGroupHoc label="Type" name="type">
        <Input 
          type="text"
          name="type"
          value={this.state.type}
          required
          readOnly
        />
      </FormGroupHoc>
      <FormGroupHoc label="A value is required" name="required" check>
        <Input 
          type="checkbox"
          name="required"
          checked={this.state.required}
          onChange={(e) => { this.handleInputChange('required', e.target.checked) }}
        />
      </FormGroupHoc>
      <FormGroupHoc label="Default Value" name="value">
        <Input 
          type="text"
          name="value"
          value={this.state.value}
          onChange={(e) => { this.handleInputChange('value', e.target.value) }}
        />
      </FormGroupHoc>
      <FormGroupHoc label="Choices" name="choices">
        <Input 
          type="textarea"
          name="choices"
          value={this.state.choices}
          onChange={(e) => { this.handleInputChange('choices', e.target.value) }}
          style={{height: '150px'}}
        />
      </FormGroupHoc>
      <FormGroupHoc label="Order" name="order">
      <Input 
          type="select"
          name="order"
          value={0}
          readOnly
        >
          <option value={0}>Display choices alphabetically</option>
        </Input>
      </FormGroupHoc>
      </>
    )

    const buttons = (
      <>
      <Button
        color={'primary'}
        className={'mr-2'}
        onClick={this.handleSubmit}
        disabled={!this.state.formValid}
      >
        Submit
      </Button>
      Or
      <Button
        color={'link'}
        onClick={this.handleCancel}
      >
        Cancel
      </Button> 
      </>
    )

    return (
      <Row>
        <Col xs={12} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} className="field-builder">
          <div className="builder-title">{title}</div>
          <div className="builder-content">
            <Form>
              {form}
              <hr />
              {buttons}
            </Form>
          </div>
        </Col>
      </Row>
    )
  }
}

export default FieldBuilderUI
