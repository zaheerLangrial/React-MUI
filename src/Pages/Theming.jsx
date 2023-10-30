import { Button } from '@mui/material'
import React from 'react'

function Theming() {
  return (
    <div>
        <Button variant='contained' color='primary'>
            Hello world 
        </Button>
        <br />
        <br /><hr />
        <Button variant='contained' color='secondary'>
            Hello world 
        </Button>
    </div>
  )
}

export default Theming