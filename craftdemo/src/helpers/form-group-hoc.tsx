
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

interface Props {
  label: string
  name: string
  check?: boolean
  children?: any
}
const FormGroupHoc = (
  {
    label = '',
    name = '',
    check = false,
    children = null
  }: Props
) => {
  const formGroup = !check ? (
    <FormGroup row>
      <Label for={name} sm={3}>{label}</Label>
      <Col sm={9}>
        {children}
      </Col>
    </FormGroup>
  ) : (
    <Col xs={12} sm={{ size: 9, offset: 3}}>
      <FormGroup row check style={{textAlign: 'left'}}>
        <Label for={name} sm={12} check>
          {children}
          {label}
        </Label>
      </FormGroup>
    </Col>
  )
  return formGroup
}

export default FormGroupHoc
