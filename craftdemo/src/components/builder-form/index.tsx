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
import StandardSubmitButton from '../submit-button'
import './index.scss'

interface Props {
  settings: FieldSettings | undefined
  title: string
  saving: boolean
  updateField (req: FieldSettings): any
}

interface State extends FieldSettings {
  labelValid: boolean
  choicesError: string | undefined
  formValid: boolean
}

const hasDupes = (a: any) => {
  let counts = [];
  for(let i = 0; i <= a.length; i++) {
    if(counts[a[i]] === undefined) {
      counts[a[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

class FieldBuilderUI extends React.Component<Props, State> {
  private initialState: State = {
    choices: this.props.settings && this.props.settings.choices || [],
    choicesError: undefined,
    displayAlpha: this.props.settings && this.props.settings.displayAlpha || false,
    default: this.props.settings && this.props.settings.default || '',
    label: this.props.settings && this.props.settings.label || '',
    required: this.props.settings && this.props.settings.required || false,
    type: 'multi-select',
    labelValid: false,
    formValid: false
  }
  constructor (props: Props) {
    super(props)
    this.state = this.initialState
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.settings !== this.props.settings) {
      this.initialState = Object.assign({}, this.initialState, this.props.settings)
      this.setState(
        (prevState) => Object.assign({}, prevState, this.props.settings),
        () => { this.validateForm() }
      )
    }
  }

  validateForm = () => {
    // validate builder form
    const { label, choices } = this.state
    const labelValid = label.trim().length > 0
    const choicesLengthValid = choices.length <= 50 && choices.length >= 2
    const noChoiceDupes = !hasDupes(choices)
    const choicesError = !choicesLengthValid && !noChoiceDupes
        ? 'Number of choices must be less 50 and greater than two with no duplicate values.'
        : !choicesLengthValid && noChoiceDupes
            ? 'Number or choices must be less than 50 and greater than 2'
            : choicesLengthValid && !noChoiceDupes
                ? 'Choices must not include duplicated values'
                : undefined
    
    this.setState(
      (prevState) => ({
        labelValid,
        formValid: labelValid && choicesLengthValid && noChoiceDupes,
        choicesError
      })
    )
  }

  handleInputChange = (name: string, value: any) => {
    // handle input change
    if (name === 'choices') {
       const newVal = value.split('\n')
       value = newVal
    }
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

  handleFreshStart = () => {
    this.initialState = {
      choices: [],
      choicesError: undefined,
      displayAlpha: false,
      default: '',
      label: '',
      required: false,
      type: 'multi-select',
      labelValid: false,
      formValid: false
    }
    this.handleCancel()
  }

  handleSubmit = () => {
    const req = this.state
    
    if (req.choices.indexOf(req.default) <= -1) {
      req.choices.push(req.default)
    }

    this.props.updateField(this.state)
  }

  render () {
    const { title, saving } = this.props

    const labelError = !this.state.labelValid ? (
      <div className={'text-danger'}>A label is required</div>
    ) : null

    const choicesError = (this.state.choicesError) ? (
      <div className={'text-danger'}>{this.state.choicesError}</div>  
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
      <FormGroupHoc label="Default Value" name="default">
        <Input 
          type="text"
          name="default"
          value={this.state.default}
          onChange={(e) => { this.handleInputChange('default', e.target.value) }}
        />
      </FormGroupHoc>
      <FormGroupHoc label="Choices" name="choices">
        <Input 
          type="textarea"
          name="choices"
          value={this.state.choices.join('\n')}
          onChange={(e) => { this.handleInputChange('choices', e.target.value) }}
          style={{height: '150px'}}
        />
        {choicesError}
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
      <StandardSubmitButton 
        working={saving}
        text="Submit"
        classes={'mr-2'}
        disabled={!this.state.formValid}
        onClick={this.handleSubmit}
      />
      Or
      <Button
        color={'link'}
        onClick={this.handleCancel}
      >
        Cancel
      </Button> 
      </>
    )

    const freshButton = (
      <Button
        color={'muted'}
        onClick={this.handleFreshStart}
      >
        Clear form &amp; start fresh.
      </Button>
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
              <hr />
              {freshButton}
            </Form>
          </div>
        </Col>
      </Row>
    )
  }
}

export default FieldBuilderUI
