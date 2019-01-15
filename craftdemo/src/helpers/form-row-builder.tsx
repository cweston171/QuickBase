
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
import { LabelValue } from '../models/helperModels'
import { InputTypes } from '../models/builderModels'

const buildFormRow = (
  label: string = '', 
  name: string, 
  value: any = null, 
  type: number = InputTypes.text,
  options: LabelValue[] = []
) => (
  <FormGroup row>
    <Label for={name} sm={3}>{label}</Label>
    <Col sm={9}>
      <Input type="text" name={name} value={value} />
    </Col>
  </FormGroup>
)

export default buildFormRow
