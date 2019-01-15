import * as React from 'react'
import { Button } from 'reactstrap'

interface Props {
  working: boolean
  text: string
  classes: string
  onClick (): any
}

const StandardSubmitButton = ({
  working = false,
  text = 'Submit',
  classes = '',
  onClick = () => true
}: Props) => {
  const loader = working ? <div className="spinner"></div> : null

  return (
    <Button
      color={'primary'}
      onClick={onClick}
      className={classes}
    >
      {loader}{text}
    </Button>
  )
}

export default StandardSubmitButton