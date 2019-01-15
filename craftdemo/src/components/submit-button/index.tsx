import * as React from 'react'
import { Button } from 'reactstrap'
import './index.scss'

interface Props {
  working: boolean
  text: string
  classes: string
  disabled: boolean
  onClick (): any
}

const StandardSubmitButton = ({
  working = false,
  text = 'Submit',
  disabled = false,
  classes = '',
  onClick = () => true
}: Props) => {
  const loader = working ? <span className="spinner">...</span> : null

  return (
    <Button
      color={'primary'}
      onClick={onClick}
      className={classes}
      disabled={disabled || working}
    >
      {loader}{text}
    </Button>
  )
}

export default StandardSubmitButton